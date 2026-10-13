import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { tokens } from "../../theme";
import { HelpOutline } from "@mui/icons-material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const AddItemToStockOpname = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const getBasePath = () => {
    if (location.pathname.startsWith("/dashboardPIClab")) return "/dashboardPIClab";
    if (location.pathname.startsWith("/dashboardPICnonasset")) return "/dashboardPICnonasset";
    return "/dashboardPICasset";
  };
  const basePath = getBasePath();

  const [barangList, setBarangList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter states
  const [locationFilter, setLocationFilter] = useState("");
  const [storageFilter, setStorageFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");

  // Master data
  const [ruanganList, setRuanganList] = useState([]);
  const [penyimpananList, setPenyimpananList] = useState([]);
  const [dtlRuanganPenyimpanan, setDtlRuanganPenyimpanan] = useState([]);

  // Editable items data (all rows are editable)
  const [itemsData, setItemsData] = useState({});
  
  // Selected items for saving
  const [selectedItems, setSelectedItems] = useState({});

  // Modal states
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    fetchBarang();
    fetchRuangan();
    fetchPenyimpanan();
    fetchDtlRuanganPenyimpanan();
  }, []);

  // Initialize itemsData when barangList loads
  useEffect(() => {
    if (barangList.length > 0 && ruanganList.length > 0 && penyimpananList.length > 0 && dtlRuanganPenyimpanan.length > 0) {
      const initialData = {};
      barangList.forEach(barang => {
        // Get original location from barang's idDtlPenyimpanan
        const dtl = dtlRuanganPenyimpanan.find(d => d.idDtlPenyimpanan === barang.idDtlPenyimpanan);
        let originalRuangan = dtl?.idRuangan || "";
        let originalPenyimpanan = dtl?.idPenyimpanan || "";
        
        // Fallback to first available if not found
        if (!originalRuangan && ruanganList.length > 0) {
          originalRuangan = ruanganList[0].idRuangan;
        }
        
        // Get available storages for the selected ruangan
        const availableStorages = getStoragesByRuangan(originalRuangan);
        if (!originalPenyimpanan && availableStorages.length > 0) {
          originalPenyimpanan = availableStorages[0].idPenyimpanan;
        } else if (!originalPenyimpanan && penyimpananList.length > 0) {
          originalPenyimpanan = penyimpananList[0].idPenyimpanan;
        }
        
        initialData[barang.idBarang] = {
          idRuangan: originalRuangan,
          idPenyimpanan: originalPenyimpanan,
          soQuantity: barang.jumlahBarang || 1,
          kondisiBarang: barang.kondisiBarang || "Good",
        };
      });
      setItemsData(initialData);
    }
  }, [barangList, ruanganList, penyimpananList, dtlRuanganPenyimpanan]);

  const fetchBarang = async () => {
    try {
      // Use new endpoint that filters out items in detail stock opname
      const response = await fetch(`${API_BASE_URL}/api/Barang/available-for-stockopname`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setBarangList(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching barang:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRuangan = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan`, { headers: { "Accept": "application/json" } });
      if (response.ok) {
        const result = await response.json();
        setRuanganList(result.data || result || []);
      }
    } catch (error) {
      console.error("Error fetching ruangan:", error);
    }
  };

  const fetchPenyimpanan = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Penyimpanan`, { headers: { "Accept": "application/json" } });
      if (response.ok) {
        const result = await response.json();
        setPenyimpananList(result.data || result || []);
      }
    } catch (error) {
      console.error("Error fetching penyimpanan:", error);
    }
  };

  const fetchDtlRuanganPenyimpanan = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlRuanganPenyimpanan`, { headers: { "Accept": "application/json" } });
      if (response.ok) {
        const result = await response.json();
        setDtlRuanganPenyimpanan(result.data || result || []);
      }
    } catch (error) {
      console.error("Error fetching dtl ruangan penyimpanan:", error);
    }
  };

  // Get storage list filtered by selected location (ruangan)
  const getStoragesByRuangan = (idRuangan) => {
    if (!idRuangan) return penyimpananList;
    const filteredDtl = dtlRuanganPenyimpanan.filter(d => d.idRuangan === idRuangan);
    const storageIds = filteredDtl.map(d => d.idPenyimpanan);
    return penyimpananList.filter(p => storageIds.includes(p.idPenyimpanan));
  };

  // Get location name from idDtlPenyimpanan
  const getLocationName = (idDtlPenyimpanan) => {
    const dtl = dtlRuanganPenyimpanan.find(d => d.idDtlPenyimpanan === idDtlPenyimpanan);
    if (dtl) {
      const loc = ruanganList.find(l => l.idRuangan === dtl.idRuangan);
      return loc?.namaRuangan || "";
    }
    return "";
  };

  // Get storage name from idDtlPenyimpanan
  const getStorageName = (idDtlPenyimpanan) => {
    const dtl = dtlRuanganPenyimpanan.find(d => d.idDtlPenyimpanan === idDtlPenyimpanan);
    if (dtl) {
      const storage = penyimpananList.find(s => s.idPenyimpanan === dtl.idPenyimpanan);
      return storage?.namaPenyimpanan || "";
    }
    return "";
  };

  // Get full location string
  const getFullLocation = (item) => {
    const location = getLocationName(item.idDtlPenyimpanan);
    const storage = getStorageName(item.idDtlPenyimpanan);
    if (location && storage) {
      return `${location} - ${storage}`;
    }
    return item.keteranganPenyimpanan || "-";
  };

  const handleSelectItem = (barang, checked) => {
    if (checked) {
      setSelectedItems({
        ...selectedItems,
        [barang.idBarang]: true,
      });
    } else {
      const newSelected = { ...selectedItems };
      delete newSelected[barang.idBarang];
      setSelectedItems(newSelected);
    }
  };

  const handleItemChange = (idBarang, field, value) => {
    const newItemData = {
      ...itemsData[idBarang],
      [field]: value,
    };
    
    // Reset storage when location changes
    if (field === "idRuangan") {
      const availableStorages = getStoragesByRuangan(value);
      if (availableStorages.length > 0) {
        newItemData.idPenyimpanan = availableStorages[0].idPenyimpanan;
      } else {
        newItemData.idPenyimpanan = "";
      }
    }
    
    setItemsData({
      ...itemsData,
      [idBarang]: newItemData,
    });
  };

  const handleSaveItems = () => {
    const selectedBarangIds = Object.keys(selectedItems);
    if (selectedBarangIds.length === 0) {
      alert("Please select at least one item");
      return;
    }
    setConfirmModalOpen(true);
  };

  const handleConfirmAdd = async () => {
    setConfirmModalOpen(false);

    const storedUser = localStorage.getItem("user");
    let currentUserId = "";
    if (storedUser) {
      const currentUser = JSON.parse(storedUser);
      currentUserId = currentUser?.idPengguna || "";
    }

    const selectedBarangIds = Object.keys(selectedItems);

    try {
      let successCount = 0;
      let errorCount = 0;
      const errors = [];

      for (const idBarang of selectedBarangIds) {
        const barang = barangList.find(b => b.idBarang === parseInt(idBarang));
        const itemData = itemsData[idBarang];
        
        // Validate data before sending
        if (!itemData.idRuangan || !itemData.idPenyimpanan) {
          console.error(`Missing location data for item ${idBarang}:`, itemData);
          errors.push(`Item ${barang?.namaBarang || idBarang}: Missing location or storage`);
          errorCount++;
          continue;
        }
        
        const createData = {
          soIdOpname: parseInt(id),
          idBarang: parseInt(idBarang),
          idRuangan: itemData.idRuangan,
          idPenyimpanan: itemData.idPenyimpanan,
          originalIdRuangan: itemData.idRuangan,
          originalIdPenyimpanan: itemData.idPenyimpanan,
          originalKondisiBarang: barang?.kondisiBarang || "Good",
          originalJumlahBarang: barang?.jumlahBarang || 0,
          soQuantity: itemData.soQuantity,
          kondisiBarang: itemData.kondisiBarang,
          createdBy: currentUserId,
        };
        
        console.log('Sending data for item:', idBarang, createData);
        
        const response = await fetch(`${API_BASE_URL}/api/DtlStockOpname`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(createData),
        });
        
        if (response.ok) {
          const result = await response.json();
          console.log('Success response:', result);
          successCount++;
        } else {
          const errorText = await response.text();
          console.error(`Failed to save item ${idBarang}:`, response.status, errorText);
          errors.push(`Item ${barang?.namaBarang || idBarang}: ${response.status} - ${errorText}`);
          errorCount++;
        }
      }
      
      if (errorCount > 0) {
        console.error('Errors occurred:', errors);
        alert(`Saved ${successCount} items successfully, but ${errorCount} items failed:\n${errors.join('\n')}`);
      }
      
      if (successCount > 0) {
        setSuccessModalOpen(true);
      }
    } catch (error) {
      console.error("Error saving items:", error);
      alert("Failed to save items: " + error.message);
    }
  };

  // Get filtered storages based on selected location
  const getFilteredStorages = () => {
    if (!locationFilter) {
      return penyimpananList; // Show all if no location selected
    }
    
    // Find the selected location
    const selectedLocation = ruanganList.find(loc => loc.namaRuangan === locationFilter);
    if (!selectedLocation) {
      return [];
    }
    
    // Find dtlRuanganPenyimpanan entries for this location
    const dtlForLocation = dtlRuanganPenyimpanan.filter(dtl => dtl.idRuangan === selectedLocation.idRuangan);
    
    // Get unique storage IDs from dtlRuanganPenyimpanan
    const storageIds = [...new Set(dtlForLocation.map(dtl => dtl.idPenyimpanan))];
    
    // Filter storages to only those in this location
    return penyimpananList.filter(storage => storageIds.includes(storage.idPenyimpanan));
  };

  const handleReset = () => {
    setLocationFilter("");
    setStorageFilter("");
    setConditionFilter("");
  };

  const filteredBarang = barangList.filter((barang) => {
    const search = searchTerm.trim().toLowerCase();
    const matchesSearch = !search ||
      barang.namaBarang?.toLowerCase().includes(search) ||
      barang.nomorAktiva?.toLowerCase().includes(search);

    const matchesLocation = !locationFilter ||
      getLocationName(barang.idDtlPenyimpanan)?.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesStorage = !storageFilter ||
      getStorageName(barang.idDtlPenyimpanan)?.toLowerCase().includes(storageFilter.toLowerCase());

    const matchesCondition = !conditionFilter ||
      barang.kondisiBarang?.toLowerCase() === conditionFilter.toLowerCase();

    return matchesSearch && matchesLocation && matchesStorage && matchesCondition;
  });

  // Warna kondisi sesuai tabel yang diberikan
  const getConditionColor = (condition) => {
    switch (condition) {
      case "Good": return { bg: "#dcfce7", color: "#16a34a" }; // hijau muda, hijau (sama dengan inventory)
      case "Not Good": return { bg: "#fee2e2", color: "#dc2626" }; // merah muda, merah (sama dengan inventory)
      case "Minor Damaged": return { bg: "#ffedd5", color: "#ea580c" }; // orange muda, orange (sama dengan inventory)
      case "Major Damaged": return { bg: "#fee2e2", color: "#dc2626" }; // merah muda, merah (sama dengan inventory)
      default: return { bg: "#dcfce7", color: "#16a34a" };
    }
  };

  const columns = [
    { id: "select", label: "Select", align: "center" },
    { id: "no", label: "No", align: "center" },
    { id: "namaBarang", label: "Inventory Name", align: "left" },
    { id: "nomorAktiva", label: "Asset Number", align: "center" },
    { id: "originalLocation", label: "Current Location", align: "center" },
    { id: "newLocation", label: "Stock Opname Location", align: "center" },
    { id: "qty", label: "Qty", align: "center" },
    { id: "condition", label: "Inventory Condition", align: "center" },
  ];


  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Add Item to Stock Opname
        </Typography>
      </Box>

      {/* Main Content Paper */}
      <Paper sx={{ p: 3, borderRadius: "12px", backgroundColor: colors.primary[400] }}>
        {/* Header with buttons */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Select Item for Stock Opname
          </Typography>
          <Box display="flex" gap={1}>
            <Button
              variant="contained"
              onClick={() => navigate(`${basePath}/stock-opname/${id}/detail`)}
              sx={{ backgroundColor: "#3b82f6", "&:hover": { backgroundColor: "#2563eb" }, textTransform: "none" }}
            >
              STOCK OPNAME DETAIL
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate(`${basePath}/stock-opname`)}
              sx={{ backgroundColor: "#6b7280", "&:hover": { backgroundColor: "#4b5563" }, textTransform: "none" }}
            >
              BACK
            </Button>
          </Box>
        </Box>

        {/* Filter Section */}
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
              {ruanganList.map((r) => (
                <MenuItem key={r.idRuangan} value={r.namaRuangan}>{r.namaRuangan}</MenuItem>
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
              {locationFilter && getFilteredStorages().map((p) => (
                <MenuItem key={p.idPenyimpanan} value={p.namaPenyimpanan}>{p.namaPenyimpanan}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 130 }}>
            <Select value={conditionFilter} onChange={(e) => setConditionFilter(e.target.value)} displayEmpty>
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
            sx={{ backgroundColor: "#6b7280", "&:hover": { backgroundColor: "#4b5563" }, textTransform: "none" }}
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
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
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
                  <TableCell key={column.id} align={column.align || "left"} sx={{ fontWeight: "bold", py: 1.5 }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={8} align="center" sx={{ py: 4 }}>Loading...</TableCell></TableRow>
              ) : filteredBarang.length === 0 ? (
                <TableRow><TableCell colSpan={8} align="center" sx={{ py: 4 }}>No data available</TableCell></TableRow>
              ) : (
                filteredBarang
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((barang, index) => {
                    const isSelected = !!selectedItems[barang.idBarang];
                    const itemData = itemsData[barang.idBarang] || {
                      idRuangan: ruanganList[0]?.idRuangan || "",
                      idPenyimpanan: penyimpananList[0]?.idPenyimpanan || "",
                      soQuantity: barang.jumlahBarang || 1,
                      kondisiBarang: barang.kondisiBarang || "Good",
                    };
                    const conditionColor = getConditionColor(itemData.kondisiBarang);
                    
                    return (
                      <TableRow key={barang.idBarang} hover selected={isSelected} sx={{ borderBottom: "1px solid #f3f4f6" }}>
                        <TableCell align="center">
                          <Checkbox
                            checked={isSelected}
                            onChange={(e) => handleSelectItem(barang, e.target.checked)}
                          />
                        </TableCell>
                        <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={1.5}>
                            {/* Gambar Inventory - sama seperti di Mutation */}
                            <img
                              src={`/src/assets/Barang/${barang.nomorAktiva}.jpg`}
                              alt={barang.namaBarang}
                              style={{ width: 45, height: 45, objectFit: "cover", borderRadius: 4 }}
                              onError={(e) => {
                                const ext = e.target.src.split('.').pop();
                                if (ext === 'jpg') {
                                  e.target.src = `/src/assets/Barang/${barang.nomorAktiva}.jpeg`;
                                } else if (ext === 'jpeg') {
                                  e.target.src = `/src/assets/Barang/${barang.nomorAktiva}.png`;
                                } else {
                                  e.target.style.display = 'none';
                                }
                              }}
                            />
                            <Box>
                              <Typography fontWeight="bold" sx={{ fontSize: "14px" }}>{barang.namaBarang}</Typography>
                              <Box display="flex" gap={0.5} mt={0.5}>
                                <Chip 
                                  label={barang.kategoriBarang === "Asset" ? "Asset" : "Non Asset"} 
                                  size="small" 
                                  sx={{ 
                                    backgroundColor: barang.kategoriBarang?.toLowerCase() === "asset" ? "#22c55e" : "#3b82f6", 
                                    color: "#fff", 
                                    fontSize: 10, 
                                    height: 20 
                                  }} 
                                />
                                <Chip 
                                  label={barang.tipeBarang || "Non Consumable"} 
                                  size="small" 
                                  sx={{ 
                                    backgroundColor: (barang.tipeBarang?.toLowerCase() === "consumable" || barang.tipeBarang?.toLowerCase() === "consummable") ? "#8b5cf6" : "#ec4899", 
                                    color: "#fff", 
                                    fontSize: 10, 
                                    height: 20 
                                  }} 
                                />
                              </Box>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="center">{barang.nomorAktiva}</TableCell>
                        <TableCell align="center">
                          <Typography variant="body2" fontWeight="500">
                            {getFullLocation(barang)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Box>
                            <FormControl size="small" fullWidth sx={{ mb: 0.5 }}>
                              <Select
                                value={itemData.idRuangan && ruanganList.some(r => r.idRuangan === itemData.idRuangan) ? itemData.idRuangan : (ruanganList.length > 0 ? ruanganList[0].idRuangan : "")}
                                onChange={(e) => handleItemChange(barang.idBarang, "idRuangan", e.target.value)}
                                displayEmpty
                              >
                                {ruanganList.length === 0 && <MenuItem value="">No Location Available</MenuItem>}
                                {ruanganList.map((r) => (
                                  <MenuItem key={r.idRuangan} value={r.idRuangan}>{r.namaRuangan}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <FormControl size="small" fullWidth>
                              <Select
                                value={itemData.idPenyimpanan && getStoragesByRuangan(itemData.idRuangan).some(p => p.idPenyimpanan === itemData.idPenyimpanan) ? itemData.idPenyimpanan : (getStoragesByRuangan(itemData.idRuangan).length > 0 ? getStoragesByRuangan(itemData.idRuangan)[0].idPenyimpanan : "")}
                                onChange={(e) => handleItemChange(barang.idBarang, "idPenyimpanan", e.target.value)}
                                displayEmpty
                              >
                                {getStoragesByRuangan(itemData.idRuangan).length === 0 && <MenuItem value="">No Storage Available</MenuItem>}
                                {getStoragesByRuangan(itemData.idRuangan).map((p) => (
                                  <MenuItem key={p.idPenyimpanan} value={p.idPenyimpanan}>{p.namaPenyimpanan}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>
                        </TableCell>
                        <TableCell align="center">
                          <TextField
                            type="number"
                            size="small"
                            value={itemData.soQuantity}
                            onChange={(e) => handleItemChange(barang.idBarang, "soQuantity", parseInt(e.target.value) || 0)}
                            inputProps={{ min: 0 }}
                            sx={{ width: 70 }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <FormControl size="small" sx={{ minWidth: 140 }}>
                            <Select
                              value={itemData.kondisiBarang || "Good"}
                              onChange={(e) => handleItemChange(barang.idBarang, "kondisiBarang", e.target.value)}
                              sx={{
                                backgroundColor: conditionColor.bg,
                                color: conditionColor.color,
                                fontWeight: "bold",
                                "& .MuiSelect-select": {
                                  color: conditionColor.color,
                                },
                              }}
                            >
                              <MenuItem value="Good">Good</MenuItem>
                              <MenuItem value="Not Good">Not Good</MenuItem>
                              <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
                              <MenuItem value="Major Damaged">Major Damaged</MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                      </TableRow>
                    );
                  })
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination Footer */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} pt={2} borderTop="1px solid #e5e7eb">
          <Typography variant="body2">
            Showing {filteredBarang.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, filteredBarang.length)} of {filteredBarang.length} entries
          </Typography>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={filteredBarang.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
          />
        </Box>

        {/* Footer with Selected Count and Save Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} pt={2} borderTop="1px solid #e5e7eb">
          <Typography variant="body2">
            {Object.keys(selectedItems).length} item selected
          </Typography>
          <Button
            variant="contained"
            onClick={handleSaveItems}
            disabled={Object.keys(selectedItems).length === 0}
            sx={{
              backgroundColor: "#3b82f6",
              "&:hover": { backgroundColor: "#2563eb" },
              "&:disabled": { backgroundColor: "#9ca3af" },
              textTransform: "none",
            }}
          >
            ADD SELECTED ITEMS TO STOCK OPNAME
          </Button>
        </Box>
      </Paper>

      {/* Confirm Modal */}
      <Dialog open={confirmModalOpen} onClose={() => setConfirmModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <HelpOutline sx={{ fontSize: 80, color: "#3b82f6", mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Add to Stock Opname?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Add <strong>{Object.keys(selectedItems).length} item</strong> to this stock opname?
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
        onClose={() => { setSuccessModalOpen(false); navigate(`${basePath}/stock-opname/${id}/detail`); }} 
        message="Items added to Stock Opname successfully!" 
      />
    </Box>
  );
};

export default AddItemToStockOpname;
