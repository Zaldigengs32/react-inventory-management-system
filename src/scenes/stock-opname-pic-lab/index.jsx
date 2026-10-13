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
  Chip,
} from "@mui/material";
import { tokens } from "../../theme";
import { Add, Menu as MenuIcon } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import Footer from "../../components/Footer";

const API_BASE_URL = "https://localhost:7130";

const StockOpnamePICLab = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const basePath = "/dashboardPIClab";

  const [stockOpnames, setStockOpnames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Filter states
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");

  // Master data
  const [penggunaList, setPenggunaList] = useState([]);

  useEffect(() => {
    fetchStockOpnames();
    fetchPengguna();
  }, []);

  const fetchStockOpnames = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/StockOpname`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setStockOpnames(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching stock opnames:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPengguna = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Pengguna`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setPenggunaList(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching pengguna:", error);
    }
  };

  const getPenggunaName = (idPengguna) => {
    const pengguna = penggunaList.find(p => p.idPengguna === idPengguna);
    return pengguna?.namaPengguna || idPengguna;
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setStatusFilter("");
  };

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(columnId);
      setOrder("asc");
    }
  };

  const filteredStockOpnames = stockOpnames.filter((so) => {
    // PIC Lab dan PIC Non Asset hanya bisa melihat status Draft
    const matchesDraft = so.soStatus === "Draft";

    const search = searchTerm.trim().toLowerCase();
    const matchesSearch = !search ||
      getPenggunaName(so.soPic)?.toLowerCase().includes(search) ||
      so.soDeskripsi?.toLowerCase().includes(search);

    const matchesStatus = !statusFilter || so.soStatus === statusFilter;

    const soDate = dayjs(so.soStartDate);
    const matchesStartDate = !startDate || soDate.isAfter(startDate.subtract(1, 'day'));
    const matchesEndDate = !endDate || soDate.isBefore(endDate.add(1, 'day'));

    return matchesDraft && matchesSearch && matchesStatus && matchesStartDate && matchesEndDate;
  });

  const sortedStockOpnames = [...filteredStockOpnames].sort((a, b) => {
    if (!orderBy) return 0;
    let aVal, bVal;
    if (orderBy === "soStartDate" || orderBy === "soEndDate") {
      aVal = new Date(a[orderBy] || 0);
      bVal = new Date(b[orderBy] || 0);
      return order === "asc" ? aVal - bVal : bVal - aVal;
    } else if (orderBy === "soPic") {
      aVal = getPenggunaName(a.soPic)?.toLowerCase() || "";
      bVal = getPenggunaName(b.soPic)?.toLowerCase() || "";
    } else {
      aVal = String(a[orderBy] ?? "").toLowerCase();
      bVal = String(b[orderBy] ?? "").toLowerCase();
    }
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });

  const displayStockOpnames = orderBy === "no"
    ? (order === "desc" ? [...sortedStockOpnames].reverse() : sortedStockOpnames)
    : sortedStockOpnames;

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "draft": return { bg: "#f59e0b", color: "#fff" };
      case "on progress": return { bg: "#8b5cf6", color: "#fff" };
      case "on progress koor upt": return { bg: "#8b5cf6", color: "#fff" };
      case "upt": return { bg: "#3b82f6", color: "#fff" };
      case "approved": return { bg: "#dbeafe", color: "#1d4ed8" };
      case "rejected": return { bg: "#ef4444", color: "#fff" };
      default: return { bg: "#9e9e9e", color: "#fff" };
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  const columns = [
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "soStartDate", label: "Start Date", sortable: true, align: "center" },
    { id: "soEndDate", label: "End Date", sortable: true, align: "center" },
    { id: "soPic", label: "PIC", sortable: true, align: "center" },
    { id: "soDeskripsi", label: "Description", sortable: true, align: "center" },
    { id: "soTotalItem", label: "Total Items", sortable: true, align: "center" },
    { id: "soStatus", label: "Status", sortable: true, align: "center" },
    { id: "action", label: "Action", sortable: false, align: "center" },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box m="20px">
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
            Stock Opname
          </Typography>
        </Box>

        {/* Filter Section */}
        <Box backgroundColor={colors.primary[400]} p={3} borderRadius="8px" mb={3}>
          <Typography variant="h5" fontWeight="bold" mb={2}>Filter</Typography>
          <Box display="flex" gap={2} mb={2} alignItems="center">
            <Box>
              <Typography variant="body2" mb={0.5}>Start Date</Typography>
              <DatePicker
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                format="DD/MM/YYYY"
                slotProps={{ textField: { size: "small", placeholder: "dd/mm/yyyy", sx: { width: 150 } } }}
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>End Date</Typography>
              <DatePicker
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                format="DD/MM/YYYY"
                slotProps={{ textField: { size: "small", placeholder: "dd/mm/yyyy", sx: { width: 150 } } }}
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Status</Typography>
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} displayEmpty>
                  <MenuItem value="">- All Status -</MenuItem>
                  <MenuItem value="Draft">Draft</MenuItem>
                  <MenuItem value="On Progress">On Progress</MenuItem>
                  <MenuItem value="On Progress Koor UPT">On Progress Koor UPT</MenuItem>
                  <MenuItem value="UPT">UPT</MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ alignSelf: "flex-end" }}>
              <Button
                variant="contained"
                onClick={handleReset}
                sx={{ backgroundColor: "#6b7280", "&:hover": { backgroundColor: "#4b5563" } }}
              >
                Reset
              </Button>
            </Box>
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
        </Box>

        {/* Table */}
        <Paper sx={{ backgroundColor: colors.primary[400], borderRadius: "8px", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align || "left"}
                      sx={{ fontWeight: "bold", cursor: column.sortable ? "pointer" : "default", userSelect: "none" }}
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
                  <TableRow><TableCell colSpan={8} align="center">Loading...</TableCell></TableRow>
                ) : displayStockOpnames.length === 0 ? (
                  <TableRow><TableCell colSpan={8} align="center">No data available</TableCell></TableRow>
                ) : (
                  displayStockOpnames
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((so, index) => {
                      const rowNum = orderBy === "no" && order === "desc"
                        ? displayStockOpnames.length - (page * rowsPerPage + index)
                        : page * rowsPerPage + index + 1;
                      return (
                        <TableRow key={so.soIdOpname} hover>
                          <TableCell align="center">{rowNum}</TableCell>
                          <TableCell align="center">{formatDate(so.soStartDate)}</TableCell>
                          <TableCell align="center">{formatDate(so.soEndDate)}</TableCell>
                          <TableCell align="center">{getPenggunaName(so.soPic)}</TableCell>
                          <TableCell align="center">{so.soDeskripsi || "-"}</TableCell>
                          <TableCell align="center">{so.soTotalItem}</TableCell>
                          <TableCell align="center">
                            <Chip
                              label={so.soStatus}
                              size="small"
                              sx={{ backgroundColor: getStatusColor(so.soStatus).bg, color: getStatusColor(so.soStatus).color }}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Box display="flex" gap={0.5} justifyContent="center">
                              {so.soStatus === "Draft" && (
                                <IconButton
                                  size="small"
                                  onClick={() => navigate(`${basePath}/stock-opname/${so.soIdOpname}/add-item`)}
                                  sx={{ backgroundColor: "#22c55e", color: "#fff", "&:hover": { backgroundColor: "#16a34a" }, width: 28, height: 28 }}
                                >
                                  <Add fontSize="small" />
                                </IconButton>
                              )}
                              <IconButton
                                size="small"
                                onClick={() => navigate(`${basePath}/stock-opname/${so.soIdOpname}/detail`)}
                                sx={{ backgroundColor: "#3b82f6", color: "#fff", "&:hover": { backgroundColor: "#2563eb" }, width: 28, height: 28 }}
                              >
                                <MenuIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1.5}>
            <Typography>
              Showing {displayStockOpnames.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
              {Math.min((page + 1) * rowsPerPage, displayStockOpnames.length)} of {displayStockOpnames.length} entries
            </Typography>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={displayStockOpnames.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_, newPage) => setPage(newPage)}
              onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
            />
          </Box>
        </Paper>

        {/* Footer */}
        <Footer />
      </Box>
    </LocalizationProvider>
  );
};

export default StockOpnamePICLab;
