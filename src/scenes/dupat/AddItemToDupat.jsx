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
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Checkbox,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { HelpOutline, CheckCircle } from "@mui/icons-material";
import { tokens } from "../../theme";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const AddItemToDupat = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { id } = useParams();
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
  const [selectedItems, setSelectedItems] = useState([]);
  const [proposalValues, setProposalValues] = useState({});

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
    fetchBarang();
    fetchLocations();
    fetchStorages();
    fetchDtlPenyimpanan();
  }, []);

  const fetchBarang = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Barang/available-for-dupat`, {
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

  // Get filtered storages based on selected location
  const getFilteredStorages = () => {
    if (!locationFilter) {
      return storages;
    }
    
    const selectedLocation = locations.find(loc => loc.namaRuangan === locationFilter);
    if (!selectedLocation) {
      return [];
    }
    
    const dtlForLocation = dtlPenyimpanan.filter(dtl => dtl.idRuangan === selectedLocation.idRuangan);
    const storageIds = [...new Set(dtlForLocation.map(dtl => dtl.idPenyimpanan))];
    
    return storages.filter(storage => storageIds.includes(storage.idPenyimpanan));
  };

  // Get location name from idDtlPenyimpanan
  const getLocationName = (idDtlPenyimpanan) => {
    const dtl = dtlPenyimpanan.find(d => d.idDtlPenyimpanan === idDtlPenyimpanan);
    if (!dtl) return "";
    const location = locations.find(l => l.idRuangan === dtl.idRuangan);
    return location?.namaRuangan || "";
  };

  // Get storage name from idDtlPenyimpanan
  const getStorageName = (idDtlPenyimpanan) => {
    const dtl = dtlPenyimpanan.find(d => d.idDtlPenyimpanan === idDtlPenyimpanan);
    if (!dtl) return "";
    const storage = storages.find(s => s.idPenyimpanan === dtl.idPenyimpanan);
    return storage?.namaPenyimpanan || "";
  };

  const handleSelectItem = (barang) => {
    const isSelected = selectedItems.some(item => item.idBarang === barang.idBarang);
    if (isSelected) {
      setSelectedItems(selectedItems.filter(item => item.idBarang !== barang.idBarang));
      const newProposalValues = { ...proposalValues };
      delete newProposalValues[barang.idBarang];
      setProposalValues(newProposalValues);
    } else {
      setSelectedItems([...selectedItems, barang]);
      setProposalValues({ ...proposalValues, [barang.idBarang]: "Deleted" });
    }
  };

  const handleProposalChange = (idBarang, value) => {
    setProposalValues({ ...proposalValues, [idBarang]: value });
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
      for (const barang of selectedItems) {
        const detailData = {
          idDupat: parseInt(id),
          idBarang: barang.idBarang,
          idPenyimpanan: barang.idPenyimpanan || 1,
          keterangan: "",
          kondisiBarang: barang.kondisiBarang || "Good",
          usulanPengeluaran: proposalValues[barang.idBarang] || "Deleted",
          fotoBarang: barang.gambarBarang || "",
        };

        const response = await fetch(`${API_BASE_URL}/api/DtlDupat`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(detailData),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error response:", errorText);
          throw new Error(`Failed to add item: ${response.status}`);
        }
      }

      setAddedCount(selectedItems.length);
      setSelectedItems([]);
      setProposalValues({});
      
      // Reload data
      await fetchBarang();
      
      setSuccessModalOpen(true);
    } catch (error) {
      console.error("Error adding items:", error);
      alert("Failed to add items to dupat: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setLocationFilter("");
    setStorageFilter("");
    setCategoryFilter("");
    setConditionFilter("");
    setSearchTerm("");
    setPage(0);
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

    const matchesCategory = !categoryFilter ||
      barang.kategoriBarang?.toLowerCase() === categoryFilter.toLowerCase();

    const matchesCondition = !conditionFilter ||
      barang.kondisiBarang?.toLowerCase() === conditionFilter.toLowerCase();

    return matchesSearch && matchesLocation && matchesStorage && matchesCategory && matchesCondition;
  });

  const getConditionColor = (condition) => {
    switch (condition?.toLowerCase()) {
      case "good": 
        return { bg: "#dcfce7", color: "#16a34a" };
      case "not good": 
        return { bg: "#fee2e2", color: "#dc2626" };
      case "minor damaged": 
        return { bg: "#ffedd5", color: "#ea580c" };
      case "major damaged": 
        return { bg: "#fee2e2", color: "#dc2626" };
      default: 
        return { bg: "#dcfce7", color: "#16a34a" };
    }
  };

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Add Item to Dupat
        </Typography>
      </Box>

      {/* Main Content Paper */}
      <Paper sx={{ p: 3, borderRadius: "12px", backgroundColor: colors.primary[400] }}>
        {/* Header with buttons */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Select Item for Dupat
          </Typography>
          <Box display="flex" gap={1}>
            <Button
              variant="contained"
              onClick={() => navigate(`${basePath}/dupat/${id}/detail`)}
              sx={{
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
                textTransform: "none",
              }}
            >
              DUPAT DETAIL
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate(`${basePath}/dupat`)}
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

        {/* Filter Section */}
        <Box display="flex" gap={2} mb={2} alignItems="center" flexWrap="wrap">
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={locationFilter}
              onChange={(e) => {
                setLocationFilter(e.target.value);
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

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            <TextField
              size="small"
              type="number"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              sx={{ width: 60 }}
            />
            <Typography>entries per page</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography>Search:</Typography>
            <TextField
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: 200 }}
            />
          </Box>
        </Box>

        {/* Table */}
        <TableContainer sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Checkbox
                    checked={selectedItems.length === filteredBarang.length && filteredBarang.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedItems(filteredBarang);
                        const newProposalValues = {};
                        filteredBarang.forEach(item => {
                          newProposalValues[item.idBarang] = "Deleted";
                        });
                        setProposalValues(newProposalValues);
                      } else {
                        setSelectedItems([]);
                        setProposalValues({});
                      }
                    }}
                  />
                </TableCell>
                <TableCell align="center">No</TableCell>
                <TableCell align="left">Inventory Name</TableCell>
                <TableCell align="center">Asset/Non Asset Number</TableCell>
                <TableCell align="center">Condition</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Proposal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <CircularProgress size={40} />
                      <Typography mt={2}>Loading data...</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : filteredBarang.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 4 }}>No data available</TableCell>
                </TableRow>
              ) : (
                filteredBarang
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((barang, index) => {
                    const isSelected = selectedItems.some(item => item.idBarang === barang.idBarang);
                    return (
                      <TableRow key={barang.idBarang} hover>
                        <TableCell align="center">
                          <Checkbox
                            checked={isSelected}
                            onChange={() => handleSelectItem(barang)}
                          />
                        </TableCell>
                        <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell align="left">
                          <Box display="flex" alignItems="center" gap={1.5}>
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
                              <Typography fontWeight="500" fontSize="14px">
                                {barang.namaBarang || "-"}
                              </Typography>
                              <Box display="flex" gap={0.5} mt={0.5}>
                                <Chip
                                  label={barang.kategoriBarang || "Asset"}
                                  size="small"
                                  sx={{
                                    fontSize: "10px",
                                    height: 20,
                                    backgroundColor: barang.kategoriBarang?.toLowerCase() === "asset" ? "#22c55e" : "#3b82f6",
                                    color: "#fff",
                                  }}
                                />
                                <Chip
                                  label={barang.tipeBarang || "Non Consumable"}
                                  size="small"
                                  sx={{
                                    fontSize: "10px",
                                    height: 20,
                                    backgroundColor: (barang.tipeBarang?.toLowerCase() === "consumable" || barang.tipeBarang?.toLowerCase() === "consummable") ? "#8b5cf6" : "#ec4899",
                                    color: "#fff",
                                  }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="center">{barang.nomorAktiva || "-"}</TableCell>
                        <TableCell align="center">
                          <Chip
                            label={barang.kondisiBarang || "Good"}
                            size="small"
                            sx={{
                              backgroundColor: getConditionColor(barang.kondisiBarang).bg,
                              color: getConditionColor(barang.kondisiBarang).color,
                              fontWeight: 500,
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">{barang.keteranganPenyimpanan || "-"}</TableCell>
                        <TableCell align="center">
                          <FormControl size="small" sx={{ minWidth: 120 }}>
                            <Select
                              value={proposalValues[barang.idBarang] || "Deleted"}
                              onChange={(e) => handleProposalChange(barang.idBarang, e.target.value)}
                            >
                              <MenuItem value="Deleted">Deleted</MenuItem>
                              <MenuItem value="Sold">Sold</MenuItem>
                              <MenuItem value="Auction">Auction</MenuItem>
                              <MenuItem value="Donated">Donated</MenuItem>
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

        {/* Pagination */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} pt={2} px={2} borderTop="1px solid #e5e7eb">
          <Typography variant="body2" color="textSecondary">
            Showing {filteredBarang.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, filteredBarang.length)} of {filteredBarang.length} entries
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
              {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, filteredBarang.length)} of {filteredBarang.length}
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
              disabled={page >= Math.ceil(filteredBarang.length / rowsPerPage) - 1}
              onClick={() => setPage(page + 1)}
            >
              ›
            </IconButton>
          </Box>
        </Box>

        {/* Footer with Selected Count and Add Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} pt={2} px={2} pb={2} borderTop="1px solid #e5e7eb">
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
            ADD SELECTED ITEMS TO DUPAT
          </Button>
        </Box>
      </Paper>

      {/* Confirm Modal */}
      <Dialog open={confirmModalOpen} onClose={() => setConfirmModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <HelpOutline sx={{ fontSize: 80, color: "#3b82f6", mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Add to Dupat?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Add <strong>{selectedItems.length} item</strong> to this dupat?
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
        message="Items added to Dupat successfully!" 
      />
    </Box>
  );
};

export default AddItemToDupat;
