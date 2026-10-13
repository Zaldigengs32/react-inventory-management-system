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
  Dialog,
  DialogContent,
  DialogActions,
  Chip,
} from "@mui/material";
import { tokens } from "../../theme";
import { Menu as MenuIcon, Warning } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const MutationKoorUPT = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const basePath = "/dashboardKoorUPT";

  const [mutations, setMutations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Filter states
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [statusFilter, setStatusFilter] = useState("");

  // Master data
  const [penggunaList, setPenggunaList] = useState([]);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchMutations();
    fetchPengguna();
  }, []);


  const fetchMutations = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Mutasi`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setMutations(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching mutations:", error);
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

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  // Filter handler - Reset all filters
  const handleReset = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setStatusFilter("");
    setPage(0);
  };

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(columnId);
      setOrder("asc");
    }
  };

  const filteredMutations = mutations.filter((mutation) => {
    // Filter out Draft status - Koor UPT should only see On Progress Koor UPT, Approved, and Rejected
    const allowedStatuses = ["On Progress Koor UPT", "Approved", "Rejected"];
    if (!allowedStatuses.includes(mutation.statusMutasi)) {
      return false;
    }

    const search = searchTerm.trim().toLowerCase();
    const matchesSearch = !search ||
      getPenggunaName(mutation.idPengguna)?.toLowerCase().includes(search) ||
      mutation.lokasiAsal?.toLowerCase().includes(search) ||
      mutation.lokasiTujuan?.toLowerCase().includes(search) ||
      mutation.alasanMutasi?.toLowerCase().includes(search);

    const matchesStatus = !statusFilter || mutation.statusMutasi === statusFilter;

    const mutationDate = dayjs(mutation.tanggalMutasi);
    const matchesStartDate = !startDate || mutationDate.isAfter(startDate.subtract(1, 'day'));
    const matchesEndDate = !endDate || mutationDate.isBefore(endDate.add(1, 'day'));

    return matchesSearch && matchesStatus && matchesStartDate && matchesEndDate;
  });

  const sortedMutations = [...filteredMutations].sort((a, b) => {
    if (!orderBy) return 0;
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    if (orderBy === "tanggalMutasi") {
      return order === "asc"
        ? new Date(aVal) - new Date(bVal)
        : new Date(bVal) - new Date(aVal);
    }
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "draft": return { bg: "#f59e0b", color: "#fff" }; // Orange
      case "on progress koor upt": return { bg: "#8b5cf6", color: "#fff" }; // Purple
      case "approved": return { bg: "#dbeafe", color: "#1d4ed8" }; // Light blue bg, blue text
      case "rejected": return { bg: "#ef4444", color: "#fff" }; // Red
      default: return { bg: "#9e9e9e", color: "#fff" };
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  const columns = [
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "tanggalMutasi", label: "Mutation Date", sortable: true, align: "center" },
    { id: "idPengguna", label: "PIC", sortable: true, align: "center" },
    { id: "lokasiAsal", label: "Origin Location", sortable: true, align: "center" },
    { id: "lokasiTujuan", label: "Destination Location", sortable: true, align: "center" },
    { id: "ruangPenyimpananTujuan", label: "Destination Room", sortable: true, align: "center" },
    { id: "alasanMutasi", label: "Reason", sortable: true, align: "center" },
    { id: "statusMutasi", label: "Status", sortable: true, align: "center" },
    { id: "action", label: "Action", sortable: false, align: "center" },
  ];


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box m="20px">
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
            Mutation
          </Typography>
        </Box>

        {/* Filter Section */}
        <Box backgroundColor={colors.primary[400]} p={3} borderRadius="8px" mb={3}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Filter
          </Typography>
          <Box display="flex" gap={2} mb={2} alignItems="flex-end">
            <Box>
              <Typography variant="body2" mb={0.5}>Start Date</Typography>
              <DatePicker
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    size: "small",
                    placeholder: "DD/MM/YYYY",
                    sx: { width: 150 },
                  },
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>End Date</Typography>
              <DatePicker
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    size: "small",
                    placeholder: "DD/MM/YYYY",
                    sx: { width: 150 },
                  },
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Status</Typography>
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <Select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">- All Status -</MenuItem>
                  <MenuItem value="On Progress Koor UPT">On Progress Koor UPT</MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              onClick={handleReset}
              sx={{
                backgroundColor: "#6b7280",
                "&:hover": { backgroundColor: "#4b5563" },
              }}
            >
              RESET
            </Button>
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
        <Paper sx={{ backgroundColor: colors.primary[400], borderRadius: "8px", overflow: "hidden" }}>
          <TableContainer>
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
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={9} align="center">Loading...</TableCell>
                  </TableRow>
                ) : sortedMutations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} align="center">No data available</TableCell>
                  </TableRow>
                ) : (
                  sortedMutations
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((mutation, index) => (
                      <TableRow key={mutation.idMutasi} hover>
                        <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell align="center">{formatDate(mutation.tanggalMutasi)}</TableCell>
                        <TableCell align="center">{getPenggunaName(mutation.idPengguna)}</TableCell>
                        <TableCell align="center">{mutation.lokasiAsal}</TableCell>
                        <TableCell align="center">{mutation.lokasiTujuan}</TableCell>
                        <TableCell align="center">{mutation.ruangPenyimpananTujuan || "-"}</TableCell>
                        <TableCell align="center">{mutation.alasanMutasi || "-"}</TableCell>
                        <TableCell align="center">
                          <Chip
                            label={mutation.statusMutasi}
                            size="small"
                            sx={{
                              backgroundColor: getStatusColor(mutation.statusMutasi).bg,
                              color: getStatusColor(mutation.statusMutasi).color,
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            size="small"
                            onClick={() => navigate(`${basePath}/mutation/${mutation.idMutasi}/detail`)}
                            sx={{ backgroundColor: "#3b82f6", color: "#fff", "&:hover": { backgroundColor: "#2563eb" }, width: 28, height: 28 }}
                          >
                            <MenuIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1.5}>
            <Typography>
              Showing {sortedMutations.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
              {Math.min((page + 1) * rowsPerPage, sortedMutations.length)} of {sortedMutations.length} entries
            </Typography>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={sortedMutations.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_, newPage) => setPage(newPage)}
              onRowsPerPageChange={(e) => {
                setRowsPerPage(parseInt(e.target.value, 10));
                setPage(0);
              }}
            />
          </Box>
        </Paper>

        {/* Success Modal */}
        <SuccessModal 
          open={successModalOpen} 
          onClose={() => setSuccessModalOpen(false)} 
          message={successMessage} 
        />

        {/* Footer */}
        <Footer />
      </Box>
    </LocalizationProvider>
  );
};

export default MutationKoorUPT;
