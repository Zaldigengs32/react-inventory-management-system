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
  InputLabel,
} from "@mui/material";
import { tokens } from "../../theme";
import { Add, Edit, Search, Close, Delete, Warning } from "@mui/icons-material";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const Inventory = () => {
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
  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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
    kategoriBarang: "",
    tipeBarang: "",
    idRuangan: "",
    idPenyimpanan: "",
    keteranganPenyimpanan: "",
    statusBarang: "Available",
  });
  const [addFile, setAddFile] = useState(null);
  const [addFilePreview, setAddFilePreview] = useState(null);

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [editFile, setEditFile] = useState(null);
  const [editFilePreview, setEditFilePreview] = useState(null);
  const [locations, setLocations] = useState([]);
  const [storages, setStorages] = useState([]);
  const [dtlPenyimpanan, setDtlPenyimpanan] = useState([]);

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

  // Get location and storage names from idDtlPenyimpanan
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
      kategoriBarang: "",
      tipeBarang: "",
      idRuangan: "",
      idPenyimpanan: "",
      keteranganPenyimpanan: "",
      statusBarang: "Available",
    });
    setAddFile(null);
    setAddFilePreview(null);
    setAddModalOpen(true);
  };

  const handleAddClose = () => {
    setAddModalOpen(false);
    // Delay reset data sampai animasi modal selesai
    setTimeout(() => {
      setAddFile(null);
      setAddFilePreview(null);
    }, 300);
  };

  const handleAddChange = (field, value) => {
    setNewItem(prev => ({ ...prev, [field]: value }));
  };

  const handleAddFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAddFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAddFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
      alert("Failed to add inventory. Server error occurred.");
    }
  };

  const handleEditClick = (item) => {
    // Get idRuangan and idPenyimpanan from dtlPenyimpanan
    const dtl = dtlPenyimpanan.find(d => d.idDtlPenyimpanan === item.idDtlPenyimpanan);
    console.log("Edit item tipeBarang:", item.tipeBarang); // Debug
    setEditItem({ 
      ...item,
      idRuangan: dtl?.idRuangan || "",
      idPenyimpanan: dtl?.idPenyimpanan || "",
    });
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    // Delay reset data sampai animasi modal selesai
    setTimeout(() => {
      setEditItem(null);
      setEditFile(null);
      setEditFilePreview(null);
    }, 300);
  };

  const handleEditChange = (field, value) => {
    setEditItem(prev => ({ ...prev, [field]: value }));
  };

  const handleEditFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

  // Delete handlers (permanent delete)
  const handleDeleteClick = (item) => {
    setDeleteItem(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    // Delay reset data sampai animasi modal selesai
    setTimeout(() => {
      setDeleteItem(null);
    }, 300);
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
        alert("Failed to delete data. Data may still be linked to other tables.");
        handleDeleteClose();
      }
    } catch (error) {
      console.error("Error deleting inventory:", error);
      alert("Failed to delete data. Server error occurred.");
      handleDeleteClose();
    }
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
        console.log("API Response:", result); // Debug full response
        const data = result.data || result || [];
        console.log("Extracted data:", data); // Debug extracted data
        console.log("Data length:", data.length); // Debug data count
        if (data.length > 0) {
          console.log("First item:", data[0]); // Debug first item
        }
        setInventory(Array.isArray(data) ? data : []);
      } else {
        console.error("API response not OK:", response.status, response.statusText);
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
                         item.nomorAktiva?.toLowerCase().includes(search) ||
                         item.nomorAktiva?.includes(searchTerm.trim()); // exact match juga
    
    const matchesCategory = !categoryFilter || 
                           item.kategoriBarang?.toLowerCase() === categoryFilter.toLowerCase();
    
    const matchesType = !typeFilter || 
                       item.tipeBarang?.toLowerCase() === typeFilter.toLowerCase();
    
    const matchesCondition = !conditionFilter || 
                            item.kondisiBarang?.toLowerCase() === conditionFilter.toLowerCase();
    
    const matchesStatus = !statusFilter || 
                         item.ketersediaanBarang?.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesType && matchesCondition && matchesStatus;
  });

  // Custom order untuk status: 
  // ASC (▲) = Available di atas, Booked di bawah
  // DESC (▼) = Booked di atas, Available di bawah
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
    
    // Custom sorting untuk kolom status (ketersediaanBarang)
    if (orderBy === "ketersediaanBarang") {
      const aOrder = getStatusOrder(a.ketersediaanBarang);
      const bOrder = getStatusOrder(b.ketersediaanBarang);
      return order === "asc" ? aOrder - bOrder : bOrder - aOrder;
    }
    
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    
    // Handle numeric sorting
    if (typeof aVal === "number" && typeof bVal === "number") {
      return order === "asc" ? aVal - bVal : bVal - aVal;
    }
    
    // Handle string sorting
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    
    if (order === "asc") {
      return aVal.localeCompare(bVal);
    } else {
      return bVal.localeCompare(aVal);
    }
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getConditionColor = (condition) => {
    switch (condition?.toLowerCase()) {
      case "good": return "success";
      case "not good": return "warning";
      case "minor damaged": return "warning";
      case "major damaged": return "error";
      default: return "default";
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "available": return "success";
      case "booked": return "warning";
      case "in use": return "info";
      default: return "default";
    }
  };

  const columns = [
    { id: "no", label: "No", sortable: false, align: "right" },
    { id: "namaBarang", label: "Inventory Name", sortable: true, align: "left" },
    { id: "nomorAktiva", label: "Asset/Non Asset Number", sortable: true, align: "right" },
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
        <Box>
          <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
            Inventory
          </Typography>
        </Box>
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
      <Box
        backgroundColor={colors.primary[400]}
        p={3}
        borderRadius="8px"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Filter
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
          <FormControl size="small" fullWidth>
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Inventory Category -</MenuItem>
              <MenuItem value="Asset">Asset</MenuItem>
              <MenuItem value="Non Asset">Non Asset</MenuItem>
            </Select>
          </FormControl>
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

        {/* Entries and Search */}
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
                    userSelect: "none",
                  }}
                  onClick={() => column.sortable && handleSort(column.id)}
                >
                  <Box display="flex" alignItems="center" justifyContent={column.align === "right" ? "flex-end" : column.align === "center" ? "center" : "flex-start"} gap={0.5}>
                    {column.label}
                    {column.sortable && (
                      <Box display="flex" flexDirection="column" sx={{ fontSize: "8px", lineHeight: 0.8, ml: 0.5 }}>
                        <span style={{ 
                          color: orderBy === column.id && order === "asc" ? "#000" : "rgba(0,0,0,0.3)" 
                        }}>▲</span>
                        <span style={{ 
                          color: orderBy === column.id && order === "desc" ? "#000" : "rgba(0,0,0,0.3)" 
                        }}>▼</span>
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
                          onError={(e) => { 
                            const ext = e.target.src.split('.').pop();
                            if (ext === 'jpg') {
                              e.target.src = `/src/assets/Barang/${item.nomorAktiva}.jpeg`;
                            } else if (ext === 'jpeg') {
                              e.target.src = `/src/assets/Barang/${item.nomorAktiva}.png`;
                            } else {
                              e.target.style.display = 'none';
                            }
                          }}
                        />
                        <Box>
                          <Typography fontWeight="bold">{item.namaBarang}</Typography>
                          <Box display="flex" gap={0.5} mt={0.5}>
                            <Chip
                              label={item.kategoriBarang === "Asset" ? "Asset" : "Non Asset"}
                              size="small"
                              sx={{ 
                                fontSize: "10px", 
                                height: 20,
                                backgroundColor: item.kategoriBarang?.toLowerCase() === "asset" ? "#22c55e" : "#3b82f6",
                                color: "#fff",
                              }}
                            />
                            <Chip
                              label={item.tipeBarang || "Non Consumable"}
                              size="small"
                              sx={{ 
                                fontSize: "10px", 
                                height: 20,
                                backgroundColor: (item.tipeBarang?.toLowerCase() === "consumable" || item.tipeBarang?.toLowerCase() === "consummable") ? "#8b5cf6" : "#ec4899",
                                color: "#fff",
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{item.nomorAktiva}</TableCell>
                    <TableCell align="right">{item.jumlahBarang} Pcs</TableCell>
                    <TableCell align="right">{item.jumlahMinimum || 30} Pcs</TableCell>
                    <TableCell align="right">{item.jumlahOptimum || 32} Pcs</TableCell>
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
                    <TableCell align="center">
                      <Typography variant="body2">{getFullLocation(item)}</Typography>
                    </TableCell>
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
                          sx={{ 
                            backgroundColor: "#f59e0b", 
                            color: "#fff", 
                            "&:hover": { backgroundColor: "#d97706" },
                            width: 32,
                            height: 32
                          }}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        {item.ketersediaanBarang?.toLowerCase() !== "booked" && (
                          <IconButton 
                            size="small" 
                            onClick={() => handleDeleteClick(item)}
                            sx={{ 
                              backgroundColor: "#ef4444", 
                              color: "#fff", 
                              "&:hover": { backgroundColor: "#dc2626" },
                              width: 32,
                              height: 32
                            }}
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/* Add Modal */}
      <Dialog 
        open={addModalOpen} 
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleAddClose();
          }
        }}
        maxWidth="sm"
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Add Inventory</Typography>
          <IconButton onClick={handleAddClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2} pt={1}>
            <Box>
              <Typography variant="body2" mb={0.5}>Inventory Name <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                placeholder="Inventory Name"
                value={newItem.namaBarang}
                onChange={(e) => handleAddChange("namaBarang", e.target.value)}
                fullWidth
                size="small"
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Asset/Non Asset Number <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                placeholder="Asset Number"
                value={newItem.nomorAktiva}
                onChange={(e) => handleAddChange("nomorAktiva", e.target.value)}
                fullWidth
                size="small"
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Total Items <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                placeholder="Total Items"
                type="number"
                value={newItem.jumlahBarang}
                onChange={(e) => handleAddChange("jumlahBarang", parseInt(e.target.value) || "")}
                fullWidth
                size="small"
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Total Items Minimum <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                placeholder="Total Items"
                type="number"
                value={newItem.jumlahMinimum}
                onChange={(e) => handleAddChange("jumlahMinimum", parseInt(e.target.value) || "")}
                fullWidth
                size="small"
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Total Items Optimum <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                placeholder="Total Items"
                type="number"
                value={newItem.jumlahOptimum}
                onChange={(e) => handleAddChange("jumlahOptimum", parseInt(e.target.value) || "")}
                fullWidth
                size="small"
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Inventory Unit <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={newItem.satuanBarang}
                  onChange={(e) => handleAddChange("satuanBarang", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">--Inventory Unit--</MenuItem>
                  <MenuItem value="Pcs">Pcs</MenuItem>
                  <MenuItem value="Lembar">Lembar</MenuItem>
                  <MenuItem value="Pack">Pack</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Inventory Condition <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={newItem.kondisiBarang}
                  onChange={(e) => handleAddChange("kondisiBarang", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">--Inventory Condition--</MenuItem>
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Not Good">Not Good</MenuItem>
                  <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
                  <MenuItem value="Major Damaged">Major Damaged</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Inventory Category <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={newItem.kategoriBarang}
                  onChange={(e) => handleAddChange("kategoriBarang", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">--Inventory Category--</MenuItem>
                  <MenuItem value="Asset">Asset</MenuItem>
                  <MenuItem value="Non Asset">Non Asset</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Inventory Type <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={newItem.tipeBarang}
                  onChange={(e) => handleAddChange("tipeBarang", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">--Inventory Type--</MenuItem>
                  <MenuItem value="Consummable">Consummable</MenuItem>
                  <MenuItem value="Non Consummable">Non Consummable</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Inventory Location <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={newItem.idRuangan}
                  onChange={(e) => handleAddChange("idRuangan", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">--Inventory Location--</MenuItem>
                  {locations.map((loc) => (
                    <MenuItem key={loc.idRuangan} value={loc.idRuangan}>
                      {loc.namaRuangan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Inventory Storage <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={newItem.idPenyimpanan}
                  onChange={(e) => handleAddChange("idPenyimpanan", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">--Inventory Storage--</MenuItem>
                  {storages.map((storage) => (
                    <MenuItem key={storage.idPenyimpanan} value={storage.idPenyimpanan}>
                      {storage.namaPenyimpanan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Storage Details <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                placeholder="Storage Details"
                value={newItem.keteranganPenyimpanan}
                onChange={(e) => handleAddChange("keteranganPenyimpanan", e.target.value)}
                fullWidth
                size="small"
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Inventory Photos <span style={{ color: "red" }}>*</span></Typography>
              <Box sx={{ display: "flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.23)", borderRadius: 1, overflow: "hidden" }}>
                <Button 
                  variant="contained" 
                  component="label" 
                  size="small"
                  sx={{ 
                    borderRadius: 0, 
                    backgroundColor: "#e0e0e0", 
                    color: "#333",
                    "&:hover": { backgroundColor: "#d0d0d0" }
                  }}
                >
                  Choose File
                  <input 
                    type="file" 
                    hidden 
                    accept="image/jpeg,image/jpg,image/png,image/gif,image/*" 
                    onChange={handleAddFileChange}
                  />
                </Button>
                <Typography variant="body2" sx={{ ml: 2, color: "rgba(255,255,255,0.5)" }}>
                  {addFile ? addFile.name : "No file chosen"}
                </Typography>
              </Box>
              {addFilePreview && (
                <Box mt={2}>
                  <img
                    src={addFilePreview}
                    alt="Preview"
                    style={{ maxWidth: "100%", maxHeight: 200, objectFit: "contain", borderRadius: 4 }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
          <Button 
            onClick={handleAddSave} 
            variant="contained" 
            sx={{ 
              backgroundColor: "#5b7cfa", 
              "&:hover": { backgroundColor: "#4a6ae8" },
              minWidth: 120,
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "16px",
              py: 1.5
            }}
          >
            Add
          </Button>
          <Button 
            onClick={handleAddClose} 
            variant="contained" 
            sx={{ 
              backgroundColor: "#e8e8e8", 
              color: "#666",
              "&:hover": { backgroundColor: "#d8d8d8" },
              minWidth: 120,
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "16px",
              py: 1.5
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog 
        open={editModalOpen} 
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleEditClose();
          }
        }}
        maxWidth="sm"
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Edit Inventory</Typography>
          <IconButton onClick={handleEditClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {editItem && (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <TextField
                label="Inventory Name *"
                value={editItem.namaBarang || ""}
                onChange={(e) => handleEditChange("namaBarang", e.target.value)}
                fullWidth
                size="small"
              />
              <TextField
                label="Asset Number *"
                value={editItem.nomorAktiva || ""}
                onChange={(e) => handleEditChange("nomorAktiva", e.target.value)}
                fullWidth
                size="small"
              />
              <TextField
                label="Total Items *"
                type="number"
                value={editItem.jumlahBarang || ""}
                onChange={(e) => handleEditChange("jumlahBarang", parseInt(e.target.value))}
                fullWidth
                size="small"
              />
              <TextField
                label="Total Items Minimum *"
                type="number"
                value={editItem.jumlahMinimum || ""}
                onChange={(e) => handleEditChange("jumlahMinimum", parseInt(e.target.value))}
                fullWidth
                size="small"
              />
              <TextField
                label="Total Items Optimum *"
                type="number"
                value={editItem.jumlahOptimum || ""}
                onChange={(e) => handleEditChange("jumlahOptimum", parseInt(e.target.value))}
                fullWidth
                size="small"
              />
              <TextField
                label="Inventory Unit *"
                value={editItem.satuanBarang || ""}
                onChange={(e) => handleEditChange("satuanBarang", e.target.value)}
                fullWidth
                size="small"
              />
              <FormControl fullWidth size="small">
                <InputLabel>Inventory Condition *</InputLabel>
                <Select
                  value={editItem.kondisiBarang || ""}
                  onChange={(e) => handleEditChange("kondisiBarang", e.target.value)}
                  label="Inventory Condition *"
                >
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Not Good">Not Good</MenuItem>
                  <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
                  <MenuItem value="Major Damaged">Major Damaged</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Inventory Category *</InputLabel>
                <Select
                  value={editItem.kategoriBarang || ""}
                  onChange={(e) => handleEditChange("kategoriBarang", e.target.value)}
                  label="Inventory Category *"
                >
                  <MenuItem value="Asset">Asset</MenuItem>
                  <MenuItem value="Non Asset">Non Asset</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Inventory Type *"
                value={editItem.tipeBarang || ""}
                fullWidth
                size="small"
                InputProps={{ readOnly: true }}
              />
              <FormControl fullWidth size="small">
                <InputLabel>Inventory Location *</InputLabel>
                <Select
                  value={editItem.idRuangan || ""}
                  onChange={(e) => handleEditChange("idRuangan", e.target.value)}
                  label="Inventory Location *"
                >
                  {locations.map((loc) => (
                    <MenuItem key={loc.idRuangan} value={loc.idRuangan}>
                      {loc.namaRuangan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Inventory Storage *</InputLabel>
                <Select
                  value={editItem.idPenyimpanan || ""}
                  onChange={(e) => handleEditChange("idPenyimpanan", e.target.value)}
                  label="Inventory Storage *"
                >
                  {storages.map((storage) => (
                    <MenuItem key={storage.idPenyimpanan} value={storage.idPenyimpanan}>
                      {storage.namaPenyimpanan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Storage Details"
                value={editItem.keteranganPenyimpanan || ""}
                onChange={(e) => handleEditChange("keteranganPenyimpanan", e.target.value)}
                fullWidth
                size="small"
              />
              <Box>
                <Typography variant="body2" mb={1}>Inventory Photos</Typography>
                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.23)", borderRadius: 1, overflow: "hidden" }}>
                  <Button 
                    variant="contained" 
                    component="label" 
                    size="small"
                    sx={{ 
                      borderRadius: 0, 
                      backgroundColor: "#e0e0e0", 
                      color: "#333",
                      "&:hover": { backgroundColor: "#d0d0d0" }
                    }}
                  >
                    Choose File
                    <input 
                      type="file" 
                      hidden 
                      accept="image/jpeg,image/jpg,image/png,image/gif,image/*" 
                      onChange={handleEditFileChange}
                    />
                  </Button>
                  <Typography variant="body2" sx={{ ml: 2, color: "rgba(255,255,255,0.5)" }}>
                    {editFile ? editFile.name : "No file chosen"}
                  </Typography>
                </Box>
                {editFilePreview ? (
                  <Box mt={2}>
                    <img
                      src={editFilePreview}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: 200, objectFit: "contain", borderRadius: 4 }}
                    />
                  </Box>
                ) : (
                  <Box mt={2}>
                    <img
                      src={`/src/assets/Barang/${editItem.nomorAktiva}.jpg`}
                      alt="Current"
                      style={{ maxWidth: "100%", maxHeight: 200, objectFit: "contain", borderRadius: 4 }}
                      onError={(e) => {
                        const ext = e.target.src.split('.').pop();
                        if (ext === 'jpg') {
                          e.target.src = `/src/assets/Barang/${editItem.nomorAktiva}.jpeg`;
                        } else if (ext === 'jpeg') {
                          e.target.src = `/src/assets/Barang/${editItem.nomorAktiva}.png`;
                        } else {
                          e.target.style.display = 'none';
                        }
                      }}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
          <Button 
            onClick={handleEditSave} 
            variant="contained" 
            sx={{ 
              backgroundColor: "#5b7cfa", 
              "&:hover": { backgroundColor: "#4a6ae8" },
              minWidth: 120,
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "16px",
              py: 1.5
            }}
          >
            Update
          </Button>
          <Button 
            onClick={handleEditClose} 
            variant="contained" 
            sx={{ 
              backgroundColor: "#e8e8e8", 
              color: "#666",
              "&:hover": { backgroundColor: "#d8d8d8" },
              minWidth: 120,
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "16px",
              py: 1.5
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog
        open={deleteModalOpen}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleDeleteClose();
          }
        }}
        maxWidth="xs"
        fullWidth
        disableEscapeKeyDown
      >
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Warning sx={{ fontSize: 80, color: "#ff9800", mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Are you sure you want to delete data?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            You can't return this!
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
          <Button 
            onClick={handleDeleteConfirm} 
            variant="contained" 
            sx={{ backgroundColor: "#2196f3", "&:hover": { backgroundColor: "#1976d2" } }}
          >
            Yes, Delete
          </Button>
          <Button 
            onClick={handleDeleteClose} 
            variant="contained" 
            sx={{ backgroundColor: "#f44336", "&:hover": { backgroundColor: "#d32f2f" } }}
          >
            Cancel
          </Button>
        </DialogActions>
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

export default Inventory;

