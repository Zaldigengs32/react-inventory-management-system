import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { tokens } from "../../theme";
import { Add, Edit, Search, Close, Delete, Warning } from "@mui/icons-material";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const InventoryPICNonAsset = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  
  // Filters
  const [typeFilter, setTypeFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Master data
  const [locations, setLocations] = useState([]);
  const [storages, setStorages] = useState([]);
  const [dtlPenyimpanan, setDtlPenyimpanan] = useState([]);

  // Add Modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    namaBarang: "",
    nomorAktiva: "",
    jumlahBarang: "",
    jumlahMinimum: "",
    jumlahOptimum: "",
    satuanBarang: "",
    kondisiBarang: "",
    kategoriBarang: "Non Asset",
    tipeBarang: "",
    statusBarang: "Available",
  });

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  useEffect(() => {
    fetchInventory();
    fetchLocations();
    fetchStorages();
    fetchDtlPenyimpanan();
  }, []);

  // Fetch all items that are in mutation details (to exclude from inventory list)
  const fetchMutationItems = async () => {
    // No longer needed - backend handles filtering
  };

  const fetchLocations = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setLocations(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const fetchStorages = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Penyimpanan`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setStorages(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching storages:", error);
    }
  };

  const fetchDtlPenyimpanan = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlRuanganPenyimpanan`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setDtlPenyimpanan(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching dtl penyimpanan:", error);
    }
  };

  const getLocationName = (idDtlPenyimpanan) => {
    const dtl = dtlPenyimpanan.find(d => d.idDtlPenyimpanan === idDtlPenyimpanan);
    if (dtl) {
      const loc = locations.find(l => l.idRuangan === dtl.idRuangan);
      return loc?.namaRuangan || "";
    }
    return "";
  };

  const getStorageName = (idDtlPenyimpanan) => {
    const dtl = dtlPenyimpanan.find(d => d.idDtlPenyimpanan === idDtlPenyimpanan);
    if (dtl) {
      const storage = storages.find(s => s.idPenyimpanan === dtl.idPenyimpanan);
      return storage?.namaPenyimpanan || "";
    }
    return "";
  };

  // Get full location string (Ruangan - Penyimpanan)
  const getFullLocation = (item) => {
    const location = getLocationName(item.idDtlPenyimpanan);
    const storage = getStorageName(item.idDtlPenyimpanan);
    
    if (location && storage) {
      return `${location} - ${storage}`;
    }
    return item.keteranganPenyimpanan || "-";
  };

  const fetchInventory = async () => {
    try {
      // Use new endpoint that filters out items in detail mutasi
      const response = await fetch(`${API_BASE_URL}/api/Barang/available-for-mutasi`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        console.log("PIC Non Asset - API Response:", result); // Debug
        const data = result.data || result || [];
        // Filter only Non Asset items
        const nonAssetData = data.filter(item => item.kategoriBarang === "Non Asset");
        console.log("PIC Non Asset - Filtered count:", nonAssetData.length); // Debug
        setInventory(Array.isArray(nonAssetData) ? nonAssetData : []);
      } else {
        console.error("PIC Non Asset - API error:", response.status);
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(columnId);
      setOrder("asc");
    }
  };

  const filteredInventory = inventory.filter((item) => {
    const search = searchTerm.trim().toLowerCase();
    const matchesSearch = !search || 
                         item.namaBarang?.toLowerCase().includes(search) ||
                         item.nomorAktiva?.toLowerCase().includes(search);
    
    const matchesType = !typeFilter || 
                       item.tipeBarang?.toLowerCase() === typeFilter.toLowerCase();
    
    const matchesCondition = !conditionFilter || 
                            item.kondisiBarang?.toLowerCase() === conditionFilter.toLowerCase();
    
    const matchesStatus = !statusFilter || 
                         item.ketersediaanBarang?.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesType && matchesCondition && matchesStatus;
  });

  const getStatusOrder = (status) => {
    switch (status?.toLowerCase()) {
      case "available": return 1;
      case "in use": return 2;
      case "booked": return 3;
      default: return 99;
    }
  };

  const sortedInventory = [...filteredInventory].sort((a, b) => {
    if (!orderBy) return 0;
    
    if (orderBy === "ketersediaanBarang") {
      const aOrder = getStatusOrder(a.ketersediaanBarang);
      const bOrder = getStatusOrder(b.ketersediaanBarang);
      return order === "asc" ? aOrder - bOrder : bOrder - aOrder;
    }
    
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    
    if (typeof aVal === "number" && typeof bVal === "number") {
      return order === "asc" ? aVal - bVal : bVal - aVal;
    }
    
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    
    return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  // Add Modal handlers
  const handleAddClick = () => {
    setNewItem({
      namaBarang: "",
      nomorAktiva: "",
      jumlahBarang: "",
      jumlahMinimum: "",
      jumlahOptimum: "",
      satuanBarang: "",
      kondisiBarang: "",
      kategoriBarang: "Non Asset",
      tipeBarang: "",
      statusBarang: "Available",
    });
    setAddModalOpen(true);
  };

  const handleAddClose = () => setAddModalOpen(false);

  const handleAddChange = (field, value) => {
    setNewItem(prev => ({ ...prev, [field]: value }));
  };

  const handleAddSave = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Barang`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify(newItem),
      });
      if (response.ok) {
        fetchInventory();
        handleAddClose();
        showSuccess("Inventory added successfully!");
      } else {
        alert("Failed to add inventory");
      }
    } catch (error) {
      console.error("Error adding inventory:", error);
    }
  };

  const handleEditClick = (item) => {
    setEditItem({ ...item });
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setEditItem(null);
  };

  const handleEditChange = (field, value) => {
    setEditItem(prev => ({ ...prev, [field]: value }));
  };

  const handleEditSave = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Barang`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify(editItem),
      });
      if (response.ok) {
        fetchInventory();
        handleEditClose();
        showSuccess("Inventory updated successfully!");
      }
    } catch (error) {
      console.error("Error updating inventory:", error);
    }
  };

  const handleDeleteClick = (item) => {
    setDeleteItem(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setDeleteItem(null);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Barang/permanent/${deleteItem.idBarang}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchInventory();
        handleDeleteClose();
        showSuccess("Inventory deleted successfully!");
      } else {
        alert("Failed to delete data.");
        handleDeleteClose();
      }
    } catch (error) {
      console.error("Error deleting inventory:", error);
      handleDeleteClose();
    }
  };

  const columns = [
    { id: "no", label: "No", sortable: false, align: "right" },
    { id: "namaBarang", label: "Inventory Name", sortable: true, align: "left" },
    { id: "nomorAktiva", label: "Non Asset Number", sortable: true, align: "right" },
    { id: "jumlahBarang", label: "Total Item", sortable: true, align: "right" },
    { id: "jumlahMinimum", label: "Total Item Minimum", sortable: true, align: "right" },
    { id: "jumlahOptimum", label: "Total Item Optimum", sortable: true, align: "right" },
    { id: "kondisiBarang", label: "Inventory Condition", sortable: true, align: "center" },
    { id: "keteranganPenyimpanan", label: "Inventory Location", sortable: true, align: "center" },
    { id: "ketersediaanBarang", label: "Status", sortable: true, align: "center" },
    { id: "action", label: "Action", sortable: false, align: "center" },
  ];

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Inventory
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddClick}
          sx={{
            backgroundColor: "#3b82f6",
            "&:hover": { backgroundColor: "#2563eb" },
          }}
        >
          Add Inventory
        </Button>
      </Box>

      {/* Filter Section */}
      <Box backgroundColor={colors.primary[400]} p={3} borderRadius="8px" mb={3}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Filter
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mb={2}>
          <FormControl size="small" fullWidth>
            <Select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Inventory Type -</MenuItem>
              <MenuItem value="Consummable">Consummable</MenuItem>
              <MenuItem value="Non Consummable">Non Consummable</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <Select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Inventory Condition -</MenuItem>
              <MenuItem value="Good">Good</MenuItem>
              <MenuItem value="Not Good">Not Good</MenuItem>
              <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
              <MenuItem value="Major Damaged">Major Damaged</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Inventory Status -</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Booked">Booked</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            <TextField
              size="small"
              type="number"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              sx={{ width: 70 }}
            />
            <Typography>entries per page</Typography>
          </Box>
          <TextField
            size="small"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ backgroundColor: colors.primary[400] }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  sx={{ 
                    fontWeight: "bold", 
                    cursor: column.sortable ? "pointer" : "default",
                  }}
                  onClick={() => column.sortable && handleSort(column.id)}
                >
                  <Box display="flex" alignItems="center" justifyContent={column.align === "right" ? "flex-end" : column.align === "center" ? "center" : "flex-start"} gap={0.5}>
                    {column.label}
                    {column.sortable && (
                      <Box display="flex" flexDirection="column" sx={{ fontSize: "8px", lineHeight: 0.8, ml: 0.5 }}>
                        <span style={{ color: orderBy === column.id && order === "asc" ? "#000" : "rgba(0,0,0,0.3)" }}>▲</span>
                        <span style={{ color: orderBy === column.id && order === "desc" ? "#000" : "rgba(0,0,0,0.3)" }}>▼</span>
                      </Box>
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={10} align="center">Loading...</TableCell>
              </TableRow>
            ) : sortedInventory.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} align="center">No data available</TableCell>
              </TableRow>
            ) : (
              sortedInventory
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow key={item.idBarang} hover>
                    <TableCell align="right">{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <img
                          src={`/src/assets/Barang/${item.nomorAktiva}.jpg`}
                          alt={item.namaBarang}
                          style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4 }}
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <Box>
                          <Typography fontWeight="bold">{item.namaBarang}</Typography>
                          <Box display="flex" gap={0.5} mt={0.5}>
                            <Chip
                              label="Non Asset"
                              size="small"
                              sx={{ fontSize: "10px", height: 20, backgroundColor: "#90caf9", color: "#fff" }}
                            />
                            <Chip
                              label={item.tipeBarang || "Non Consumable"}
                              size="small"
                              sx={{ fontSize: "10px", height: 20, backgroundColor: (item.tipeBarang?.toLowerCase() === "consumable" || item.tipeBarang?.toLowerCase() === "consummable") ? "#8b5cf6" : "#ec4899", color: "#fff" }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{item.nomorAktiva}</TableCell>
                    <TableCell align="right">{item.jumlahBarang} Pcs</TableCell>
                    <TableCell align="right">{item.jumlahMinimum || 0} Pcs</TableCell>
                    <TableCell align="right">{item.jumlahOptimum || 0} Pcs</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={item.kondisiBarang || "Good"}
                        size="small"
                        sx={{
                          backgroundColor: 
                            item.kondisiBarang?.toLowerCase() === "good" ? "#dcfce7" :
                            item.kondisiBarang?.toLowerCase() === "not good" ? "#fee2e2" :
                            item.kondisiBarang?.toLowerCase() === "minor damaged" ? "#ffedd5" :
                            item.kondisiBarang?.toLowerCase() === "major damaged" ? "#fee2e2" : "#dcfce7",
                          color: 
                            item.kondisiBarang?.toLowerCase() === "good" ? "#16a34a" :
                            item.kondisiBarang?.toLowerCase() === "not good" ? "#dc2626" :
                            item.kondisiBarang?.toLowerCase() === "minor damaged" ? "#ea580c" :
                            item.kondisiBarang?.toLowerCase() === "major damaged" ? "#dc2626" : "#16a34a",
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">{getFullLocation(item)}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={item.ketersediaanBarang || "Available"}
                        size="small"
                        sx={{
                          backgroundColor: item.ketersediaanBarang?.toLowerCase() === "booked" ? "#ff9800" : "#4caf50",
                          color: "#fff",
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Box display="flex" gap={1} justifyContent="center">
                        <IconButton 
                          size="small" 
                          onClick={() => handleEditClick(item)}
                          sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 32, height: 32 }}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        {item.ketersediaanBarang?.toLowerCase() !== "booked" && (
                          <IconButton 
                            size="small" 
                            onClick={() => handleDeleteClick(item)}
                            sx={{ backgroundColor: "#ef4444", color: "#fff", "&:hover": { backgroundColor: "#dc2626" }, width: 32, height: 32 }}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={sortedInventory.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </TableContainer>

      {/* Add Modal */}
      <Dialog open={addModalOpen} onClose={handleAddClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" fontWeight="bold">Add Non Asset Inventory</Typography>
            <IconButton onClick={handleAddClose} size="small"><Close /></IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2} pt={1}>
            <TextField label="Inventory Name *" value={newItem.namaBarang} onChange={(e) => handleAddChange("namaBarang", e.target.value)} fullWidth size="small" />
            <TextField label="Non Asset Number *" value={newItem.nomorAktiva} onChange={(e) => handleAddChange("nomorAktiva", e.target.value)} fullWidth size="small" />
            <TextField label="Total Items *" type="number" value={newItem.jumlahBarang} onChange={(e) => handleAddChange("jumlahBarang", parseInt(e.target.value) || "")} fullWidth size="small" />
            <TextField label="Total Items Minimum *" type="number" value={newItem.jumlahMinimum} onChange={(e) => handleAddChange("jumlahMinimum", parseInt(e.target.value) || "")} fullWidth size="small" />
            <TextField label="Total Items Optimum *" type="number" value={newItem.jumlahOptimum} onChange={(e) => handleAddChange("jumlahOptimum", parseInt(e.target.value) || "")} fullWidth size="small" />
            <FormControl fullWidth size="small">
              <Select value={newItem.satuanBarang} onChange={(e) => handleAddChange("satuanBarang", e.target.value)} displayEmpty>
                <MenuItem value="">--Inventory Unit--</MenuItem>
                <MenuItem value="Pcs">Pcs</MenuItem>
                <MenuItem value="Lembar">Lembar</MenuItem>
                <MenuItem value="Pack">Pack</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <Select value={newItem.kondisiBarang} onChange={(e) => handleAddChange("kondisiBarang", e.target.value)} displayEmpty>
                <MenuItem value="">--Inventory Condition--</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
                <MenuItem value="Not Good">Not Good</MenuItem>
                <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
                <MenuItem value="Major Damaged">Major Damaged</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <Select value={newItem.tipeBarang} onChange={(e) => handleAddChange("tipeBarang", e.target.value)} displayEmpty>
                <MenuItem value="">--Inventory Type--</MenuItem>
                <MenuItem value="Consummable">Consummable</MenuItem>
                <MenuItem value="Non Consummable">Non Consummable</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose}>Cancel</Button>
          <Button variant="contained" onClick={handleAddSave} sx={{ backgroundColor: "#3b82f6" }}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onClose={handleEditClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" fontWeight="bold">Edit Non Asset Inventory</Typography>
            <IconButton onClick={handleEditClose} size="small"><Close /></IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {editItem && (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <TextField label="Inventory Name *" value={editItem.namaBarang || ""} onChange={(e) => handleEditChange("namaBarang", e.target.value)} fullWidth size="small" />
              <TextField label="Non Asset Number *" value={editItem.nomorAktiva || ""} onChange={(e) => handleEditChange("nomorAktiva", e.target.value)} fullWidth size="small" />
              <TextField label="Total Items *" type="number" value={editItem.jumlahBarang || ""} onChange={(e) => handleEditChange("jumlahBarang", parseInt(e.target.value) || "")} fullWidth size="small" />
              <TextField label="Total Items Minimum *" type="number" value={editItem.jumlahMinimum || ""} onChange={(e) => handleEditChange("jumlahMinimum", parseInt(e.target.value) || "")} fullWidth size="small" />
              <TextField label="Total Items Optimum *" type="number" value={editItem.jumlahOptimum || ""} onChange={(e) => handleEditChange("jumlahOptimum", parseInt(e.target.value) || "")} fullWidth size="small" />
              <FormControl fullWidth size="small">
                <Select value={editItem.kondisiBarang || ""} onChange={(e) => handleEditChange("kondisiBarang", e.target.value)} displayEmpty>
                  <MenuItem value="">--Inventory Condition--</MenuItem>
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Not Good">Not Good</MenuItem>
                  <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
                  <MenuItem value="Major Damaged">Major Damaged</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSave} sx={{ backgroundColor: "#3b82f6" }}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={deleteModalOpen} onClose={handleDeleteClose}>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Warning sx={{ fontSize: 60, color: "#f59e0b", mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" mb={1}>Delete Inventory?</Typography>
          <Typography color="text.secondary" mb={3}>Are you sure you want to delete "{deleteItem?.namaBarang}"?</Typography>
          <Box display="flex" gap={2} justifyContent="center">
            <Button variant="outlined" onClick={handleDeleteClose}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Delete</Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <SuccessModal 
        open={successModalOpen} 
        onClose={() => setSuccessModalOpen(false)} 
        message={successMessage} 
      />
    

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default InventoryPICNonAsset;
