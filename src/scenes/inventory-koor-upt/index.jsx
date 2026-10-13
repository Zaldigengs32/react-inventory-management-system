import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { tokens } from "../../theme";

import Footer from "../../components/Footer";

const API_BASE_URL = "https://localhost:7130";

const InventoryKoorUPT = () => {
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
  const [locationFilter, setLocationFilter] = useState("");
  const [storageFilter, setStorageFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Master data
  const [locations, setLocations] = useState([]);
  const [storages, setStorages] = useState([]);
  const [dtlPenyimpanan, setDtlPenyimpanan] = useState([]);

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

  // Fetch all items that are in mutation details (to exclude from inventory list)
  const fetchMutationItems = async () => {
    // No longer needed - backend handles filtering
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
        console.log("Koor UPT - API Response:", result); // Debug
        const data = result.data || result || [];
        console.log("Koor UPT - Data count:", data.length); // Debug
        setInventory(Array.isArray(data) ? data : []);
      } else {
        console.error("Koor UPT - API error:", response.status);
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
    } finally {
      setLoading(false);
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
    
    const itemLocation = getLocationName(item.idDtlPenyimpanan);
    const matchesLocation = !locationFilter || itemLocation === locationFilter;
    
    const matchesStorage = !storageFilter || item.keteranganPenyimpanan?.includes(storageFilter);
    
    const matchesCategory = !categoryFilter || 
      item.kategoriBarang?.toLowerCase() === categoryFilter.toLowerCase();
    
    const matchesType = !typeFilter || 
      item.tipeBarang?.toLowerCase() === typeFilter.toLowerCase();
    
    const matchesCondition = !conditionFilter || 
      item.kondisiBarang?.toLowerCase() === conditionFilter.toLowerCase();
    
    const matchesStatus = !statusFilter || 
      item.ketersediaanBarang?.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesStorage && matchesCategory && matchesType && matchesCondition && matchesStatus;
  });

  const sortedInventory = [...filteredInventory].sort((a, b) => {
    if (!orderBy) return 0;
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    if (typeof aVal === "number" && typeof bVal === "number") {
      return order === "asc" ? aVal - bVal : bVal - aVal;
    }
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  const columns = [
    { id: "no", label: "No", sortable: false, align: "center" },
    { id: "namaBarang", label: "Inventory Name", sortable: true, align: "left" },
    { id: "nomorAktiva", label: "Asset/Non Asset Number", sortable: true, align: "center" },
    { id: "jumlahBarang", label: "Total Item", sortable: true, align: "center" },
    { id: "kondisiBarang", label: "Inventory Condition", sortable: true, align: "center" },
    { id: "keteranganPenyimpanan", label: "Inventory Location", sortable: true, align: "center" },
    { id: "ketersediaanBarang", label: "Status", sortable: true, align: "center" },
  ];

  // Get unique locations for filter
  const uniqueLocations = [...new Set(locations.map(l => l.namaRuangan))].filter(Boolean);
  const uniqueStorages = [...new Set(storages.map(s => s.namaPenyimpanan))].filter(Boolean);


  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Inventory
        </Typography>
      </Box>

      {/* Filter Section */}
      <Box backgroundColor={colors.primary[400]} p={3} borderRadius="8px" mb={3}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Filter
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2} mb={2}>
          <FormControl size="small" fullWidth>
            <Select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Inventory Location -</MenuItem>
              {uniqueLocations.map((loc) => (
                <MenuItem key={loc} value={loc}>{loc}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <Select
              value={storageFilter}
              onChange={(e) => setStorageFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Inventory Storage -</MenuItem>
              {uniqueStorages.map((storage) => (
                <MenuItem key={storage} value={storage}>{storage}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">- Inventory -</MenuItem>
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
              <MenuItem value="">- Inventory -</MenuItem>
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
                  <Box display="flex" alignItems="center" justifyContent={column.align === "center" ? "center" : "flex-start"} gap={0.5}>
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
                <TableCell colSpan={7} align="center">Loading...</TableCell>
              </TableRow>
            ) : sortedInventory.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">No data available</TableCell>
              </TableRow>
            ) : (
              sortedInventory
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow key={item.idBarang} hover>
                    <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
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
                              label={item.kategoriBarang || "Asset"}
                              size="small"
                              sx={{ 
                                fontSize: "10px", 
                                height: 20,
                                backgroundColor: item.kategoriBarang?.toLowerCase() === "asset" ? "#4caf50" : "#90caf9",
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
                    <TableCell align="center">{item.jumlahBarang} Pcs</TableCell>
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
    

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default InventoryKoorUPT;
