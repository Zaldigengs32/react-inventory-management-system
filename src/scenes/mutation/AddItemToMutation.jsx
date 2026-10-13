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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { tokens } from "../../theme";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const AddItemToMutation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const location = useLocation();
  const { id: mutationId } = useParams();

  // Determine base path from current URL
  const getBasePath = () => {
    if (location.pathname.startsWith("/dashboardPIClab")) return "/dashboardPIClab";
    if (location.pathname.startsWith("/dashboardPICnonasset")) return "/dashboardPICnonasset";
    return "/dashboardPICasset";
  };
  const basePath = getBasePath();

  const [inventory, setInventory] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Filter states
  const [locationFilter, setLocationFilter] = useState("");
  const [storageFilter, setStorageFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");

  // Master data
  const [locations, setLocations] = useState([]);
  const [storages, setStorages] = useState([]);
  const [dtlPenyimpanan, setDtlPenyimpanan] = useState([]);

  // Modal states
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [addedCount, setAddedCount] = useState(0);

  useEffect(() => {
    fetchInventory();
    fetchLocations();
    fetchStorages();
    fetchDtlPenyimpanan();
    fetchExistingItems();
  }, []);

  const fetchInventory = async () => {
    try {
      // Use new endpoint that filters out items in detail mutasi
      const response = await fetch(`${API_BASE_URL}/api/Barang/available-for-mutasi`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setInventory(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchExistingItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/${mutationId}/detail`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        const existingIds = Array.isArray(data) ? data.map(d => d.idBarang) : [];
        setAddedItems(existingIds);
      }
    } catch (error) {
      console.error("Error fetching existing items:", error);
    }
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

  const getFullLocation = (item) => {
    const location = getLocationName(item.idDtlPenyimpanan);
    const storage = getStorageName(item.idDtlPenyimpanan);
    if (location && storage) {
      return `${location} - ${storage}`;
    }
    return item.keteranganPenyimpanan || "-";
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const allIds = availableInventory.map(item => item.idBarang);
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };

  const handleReset = () => {
    setLocationFilter("");
    setStorageFilter("");
    setCategoryFilter("");
    setConditionFilter("");
    setSearchTerm("");
  };

  // Get filtered storages based on selected location
  const getFilteredStorages = () => {
    if (!locationFilter) {
      return storages; // Show all if no location selected
    }
    
    // Find the selected location
    const selectedLocation = locations.find(loc => loc.namaRuangan === locationFilter);
    if (!selectedLocation) {
      return [];
    }
    
    // Find dtlPenyimpanan entries for this location
    const dtlForLocation = dtlPenyimpanan.filter(dtl => dtl.idRuangan === selectedLocation.idRuangan);
    
    // Get unique storage IDs from dtlPenyimpanan
    const storageIds = [...new Set(dtlForLocation.map(dtl => dtl.idPenyimpanan))];
    
    // Filter storages to only those in this location
    return storages.filter(storage => storageIds.includes(storage.idPenyimpanan));
  };

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(columnId);
      setOrder("asc");
    }
  };

  const handleAddClick = () => {
    if (selectedItems.length === 0) {
      return;
    }
    setConfirmModalOpen(true);
  };

  const handleConfirmAdd = async () => {
    setConfirmModalOpen(false);
    setLoading(true);

    try {
      for (const idBarang of selectedItems) {
        const item = inventory.find(i => i.idBarang === idBarang);
        const detailData = {
          idMutasi: parseInt(mutationId),
          idBarang: idBarang,
          kuantitas: item?.jumlahBarang || 1,
          kondisiBarang: item?.kondisiBarang || "Good",
          catatan: "",
        };

        await fetch(`${API_BASE_URL}/api/Mutasi/detail`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(detailData),
        });
      }

      setAddedItems(prev => [...prev, ...selectedItems]);
      setAddedCount(selectedItems.length);
      setSelectedItems([]);
      
      // Reload inventory data to remove added items from list
      await fetchInventory();
      await fetchExistingItems();
      
      setSuccessModalOpen(true);
    } catch (error) {
      console.error("Error adding items:", error);
      alert("Failed to add items to mutation");
    } finally {
      setLoading(false);
    }
  };

  // Items are already filtered by backend, no need for manual filtering
  const availableInventory = inventory;

  const filteredInventory = availableInventory.filter((item) => {
    const search = searchTerm.trim().toLowerCase();
    const matchesSearch = !search ||
      item.namaBarang?.toLowerCase().includes(search) ||
      item.nomorAktiva?.toLowerCase().includes(search);

    const matchesLocation = !locationFilter ||
      getLocationName(item.idDtlPenyimpanan)?.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesStorage = !storageFilter ||
      getStorageName(item.idDtlPenyimpanan)?.toLowerCase().includes(storageFilter.toLowerCase());

    const matchesCategory = !categoryFilter ||
      item.kategoriBarang?.toLowerCase() === categoryFilter.toLowerCase();

    const matchesCondition = !conditionFilter ||
      item.kondisiBarang?.toLowerCase() === conditionFilter.toLowerCase();

    return matchesSearch && matchesLocation && matchesStorage && matchesCategory && matchesCondition;
  });

  const sortedInventory = [...filteredInventory].sort((a, b) => {
    if (!orderBy) return 0;
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  // Pagination
  const totalPages = Math.ceil(sortedInventory.length / rowsPerPage);
  const paginatedInventory = sortedInventory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const columns = [
    { id: "select", label: "", sortable: false, align: "center" },
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "namaBarang", label: "Inventory Name", sortable: true, align: "left" },
    { id: "nomorAktiva", label: "Asset/Non Asset Number", sortable: true, align: "center" },
    { id: "kondisiBarang", label: "Condition", sortable: true, align: "center" },
    { id: "location", label: "Location", sortable: true, align: "center" },
  ];

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Add Item to Mutation
        </Typography>
      </Box>

      {/* Main Content Paper */}
      <Paper sx={{ p: 3, borderRadius: "12px", backgroundColor: colors.primary[400] }}>
        {/* Header with buttons */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Select Item for Mutation
          </Typography>
          <Box display="flex" gap={1}>
            <Button
              variant="contained"
              onClick={() => navigate(`${basePath}/mutation/${mutationId}/detail`)}
              sx={{
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
                textTransform: "none",
              }}
            >
              MUTATION DETAIL
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate(`${basePath}/mutation`)}
              sx={{
                backgroundColor: "#6b7280",
                "&:hover": { backgroundColor: "#4b5563" },
                textTransform: "none",
              }}
            >
              BACK
            </Button>
          </Box>
        </Box>
        <Box display="flex" gap={2} mb={2} alignItems="center" flexWrap="wrap">
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={locationFilter}
              onChange={(e) => {
                setLocationFilter(e.target.value);
                // Reset storage filter when location changes
                setStorageFilter("");
              }}
              displayEmpty
            >
              <MenuItem value="">- Inventory -</MenuItem>
              {locations.map((loc) => (
                <MenuItem key={loc.idRuangan} value={loc.namaRuangan}>
                  {loc.namaRuangan}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={storageFilter}
              onChange={(e) => setStorageFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Inventory Storage -</MenuItem>
              {locationFilter && getFilteredStorages().map((storage) => (
                <MenuItem key={storage.idPenyimpanan} value={storage.namaPenyimpanan}>
                  {storage.namaPenyimpanan}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 130 }}>
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Category -</MenuItem>
              <MenuItem value="Asset">Asset</MenuItem>
              <MenuItem value="Non Asset">Non Asset</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 130 }}>
            <Select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Condition -</MenuItem>
              <MenuItem value="Good">Good</MenuItem>
              <MenuItem value="Not Good">Not Good</MenuItem>
              <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
              <MenuItem value="Major Damaged">Major Damaged</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleReset}
            sx={{
              backgroundColor: "#6b7280",
              "&:hover": { backgroundColor: "#4b5563" },
              textTransform: "none",
            }}
          >
            Reset
          </Button>
        </Box>

        {/* Entries and Search */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <TextField
              size="small"
              type="number"
              value={rowsPerPage}
              onChange={(e) => { setRowsPerPage(Number(e.target.value)); setPage(0); }}
              sx={{ width: 70 }}
              inputProps={{ min: 1 }}
            />
            <Typography variant="body2">entries per page</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">Search:</Typography>
            <TextField
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: 200 }}
            />
          </Box>
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ borderBottom: "2px solid #e5e7eb" }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || "left"}
                    sx={{
                      fontWeight: "bold",
                      cursor: column.sortable ? "pointer" : "default",
                      userSelect: "none",
                      py: 1.5,
                    }}
                    onClick={() => column.sortable && handleSort(column.id)}
                  >
                    {column.id === "select" ? (
                      <Checkbox
                        checked={selectedItems.length === filteredInventory.length && filteredInventory.length > 0}
                        indeterminate={selectedItems.length > 0 && selectedItems.length < filteredInventory.length}
                        onChange={handleSelectAll}
                      />
                    ) : (
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent={column.align === "center" ? "center" : "flex-start"}
                        gap={0.5}
                      >
                        {column.label}
                        {column.sortable && (
                          <Box display="flex" flexDirection="column" sx={{ fontSize: "8px", lineHeight: 0.8, ml: 0.5 }}>
                            <span style={{ color: orderBy === column.id && order === "asc" ? "#000" : "rgba(0,0,0,0.3)" }}>▲</span>
                            <span style={{ color: orderBy === column.id && order === "desc" ? "#000" : "rgba(0,0,0,0.3)" }}>▼</span>
                          </Box>
                        )}
                      </Box>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <CircularProgress size={40} />
                      <Typography mt={2}>Loading data...</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : paginatedInventory.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>No data available</TableCell>
                </TableRow>
              ) : (
                paginatedInventory.map((item, index) => (
                  <TableRow key={item.idBarang} sx={{ borderBottom: "1px solid #f3f4f6" }}>
                    <TableCell align="center">
                      <Checkbox
                        checked={selectedItems.includes(item.idBarang)}
                        onChange={() => handleSelectItem(item.idBarang)}
                      />
                    </TableCell>
                    <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1.5}>
                        <img
                          src={`/src/assets/Barang/${item.nomorAktiva}.jpg`}
                          alt={item.namaBarang}
                          style={{ width: 45, height: 45, objectFit: "cover", borderRadius: 4 }}
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
                          <Typography fontWeight="500" fontSize="14px">{item.namaBarang}</Typography>
                          <Box display="flex" gap={0.5} mt={0.5}>
                            <Chip
                              label={item.kategoriBarang || "Asset"}
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
                    <TableCell align="center">{item.nomorAktiva}</TableCell>
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
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} pt={2} borderTop="1px solid #e5e7eb">
          <Typography variant="body2" color="textSecondary">
            Showing {sortedInventory.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, sortedInventory.length)} of {sortedInventory.length} entries
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" color="textSecondary">Rows per page:</Typography>
            <Select
              size="small"
              value={rowsPerPage}
              onChange={(e) => { setRowsPerPage(Number(e.target.value)); setPage(0); }}
              sx={{ minWidth: 60 }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
            <Typography variant="body2" color="textSecondary">
              {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, sortedInventory.length)} of {sortedInventory.length}
            </Typography>
            <IconButton
              size="small"
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
            >
              ‹
            </IconButton>
            <IconButton
              size="small"
              disabled={page >= totalPages - 1}
              onClick={() => setPage(page + 1)}
            >
              ›
            </IconButton>
          </Box>
        </Box>

        {/* Footer with Selected Count and Add Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} pt={2} borderTop="1px solid #e5e7eb">
          <Typography variant="body2">
            {selectedItems.length} item selected
          </Typography>
          <Button
            variant="contained"
            onClick={handleAddClick}
            disabled={selectedItems.length === 0}
            sx={{
              backgroundColor: "#3b82f6",
              "&:hover": { backgroundColor: "#2563eb" },
              "&:disabled": { backgroundColor: "#9ca3af" },
              textTransform: "none",
            }}
          >
            ADD SELECTED ITEMS TO MUTATION
          </Button>
        </Box>
      </Paper>

      {/* Confirm Modal */}
      <Dialog open={confirmModalOpen} onClose={() => setConfirmModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <HelpOutline sx={{ fontSize: 80, color: "#3b82f6", mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Add to Mutation?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Add <strong>{selectedItems.length} item</strong> to this mutation?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
          <Button
            onClick={handleConfirmAdd}
            variant="contained"
            sx={{ 
              backgroundColor: "#3b82f6", 
              "&:hover": { backgroundColor: "#2563eb" }, 
              minWidth: 140,
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "16px",
              py: 1.5,
            }}
          >
            Yes, add them!
          </Button>
          <Button
            onClick={() => setConfirmModalOpen(false)}
            variant="contained"
            sx={{ 
              backgroundColor: "#6b7280", 
              "&:hover": { backgroundColor: "#4b5563" }, 
              minWidth: 140,
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "16px",
              py: 1.5,
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Modal */}
      <SuccessModal 
        open={successModalOpen} 
        onClose={() => setSuccessModalOpen(false)} 
        message="Items added to Mutation successfully!" 
      />
    </Box>
  );
};

export default AddItemToMutation;

