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
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Autocomplete,
} from "@mui/material";
import { tokens } from "../../theme";
import { Add, Edit, Delete, Close, Warning, Menu as MenuIcon, Send } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const Mutation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine base path from current URL
  const getBasePath = () => {
    if (location.pathname.startsWith("/dashboardPIClab")) return "/dashboardPIClab";
    if (location.pathname.startsWith("/dashboardPICnonasset")) return "/dashboardPICnonasset";
    return "/dashboardPICasset";
  };
  const basePath = getBasePath();

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
  const [lembagaList, setLembagaList] = useState([]);
  const [penggunaList, setPenggunaList] = useState([]);

  // Add Modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newMutation, setNewMutation] = useState({
    idPengguna: "",
    tanggalMutasi: dayjs(),
    lokasiAsal: "",
    idLembagaTujuan: "",
    ruangPenyimpananTujuan: "",
    alasanMutasi: "",
    statusMutasi: "Draft",
  });
  const [addErrors, setAddErrors] = useState({});

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editMutation, setEditMutation] = useState(null);
  const [editErrors, setEditErrors] = useState({});

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteMutation, setDeleteMutation] = useState(null);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Send Modal states
  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [sendMutation, setSendMutation] = useState(null);
  const [warningModalOpen, setWarningModalOpen] = useState(false);

  // Detail Modal
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailMutation, setDetailMutation] = useState(null);
  const [detailItems, setDetailItems] = useState([]);

  useEffect(() => {
    fetchMutations();
    fetchLembaga();
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

  const fetchLembaga = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Lembaga`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setLembagaList(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching lembaga:", error);
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
    return pengguna?.namaPengguna || (idPengguna === "S1866" ? "Roni Prasetyo" : idPengguna);
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  // Add handlers
  const handleAddClick = () => {
    // Get current logged in user from localStorage
    const storedUser = localStorage.getItem("user");
    let currentUser = null;
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
    }
    
    setNewMutation({
      idPengguna: currentUser?.idPengguna || "",
      tanggalMutasi: dayjs(), // Today's date
      lokasiAsal: "UPT-Informatika", // Default origin location
      idLembagaTujuan: "",
      ruangPenyimpananTujuan: "",
      alasanMutasi: "",
      statusMutasi: "Draft",
    });
    setAddErrors({});
    setAddModalOpen(true);
  };

  const handleAddClose = () => {
    setAddModalOpen(false);
    setAddErrors({});
  };

  const validateAddForm = () => {
    const errors = {};
    if (!newMutation.idLembagaTujuan) {
      errors.idLembagaTujuan = "This field is required";
    }
    if (!newMutation.ruangPenyimpananTujuan?.trim()) {
      errors.ruangPenyimpananTujuan = "This field is required";
    }
    if (!newMutation.alasanMutasi?.trim()) {
      errors.alasanMutasi = "This field is required";
    }
    setAddErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddSave = async () => {
    if (!validateAddForm()) {
      return;
    }
    try {
      const createData = {
        idPengguna: newMutation.idPengguna,
        idLembagaTujuan: parseInt(newMutation.idLembagaTujuan),
        ruangPenyimpananTujuan: newMutation.ruangPenyimpananTujuan,
        alasanMutasi: newMutation.alasanMutasi,
        statusMutasi: "Draft",
      };
      const response = await fetch(`${API_BASE_URL}/api/Mutasi`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(createData),
      });
      if (response.ok) {
        fetchMutations();
        handleAddClose();
        showSuccess("Mutation session added successfully!");
      } else {
        alert("Failed to add mutation");
      }
    } catch (error) {
      console.error("Error adding mutation:", error);
      alert("Failed to add mutation");
    }
  };

  // Edit handlers
  const handleEditClick = (mutation) => {
    const lembaga = lembagaList.find(l => l.namaLembaga === mutation.lokasiTujuan);
    setEditMutation({
      ...mutation,
      idLembagaTujuan: lembaga?.id || "",
      tanggalMutasi: dayjs(mutation.tanggalMutasi),
    });
    setEditErrors({});
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setEditErrors({});
    setTimeout(() => setEditMutation(null), 300);
  };

  const validateEditForm = () => {
    const errors = {};
    if (!editMutation.idLembagaTujuan) {
      errors.idLembagaTujuan = "This field is required";
    }
    if (!editMutation.ruangPenyimpananTujuan?.trim()) {
      errors.ruangPenyimpananTujuan = "This field is required";
    }
    if (!editMutation.alasanMutasi?.trim()) {
      errors.alasanMutasi = "This field is required";
    }
    setEditErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEditSave = async () => {
    if (!validateEditForm()) {
      return;
    }
    try {
      const updateData = {
        idMutasi: editMutation.idMutasi,
        idPengguna: editMutation.idPengguna,
        idLembagaTujuan: parseInt(editMutation.idLembagaTujuan),
        ruangPenyimpananTujuan: editMutation.ruangPenyimpananTujuan,
        alasanMutasi: editMutation.alasanMutasi,
        statusMutasi: editMutation.statusMutasi,
        modifiedBy: "1",
      };
      const response = await fetch(`${API_BASE_URL}/api/Mutasi`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(updateData),
      });
      if (response.ok) {
        fetchMutations();
        handleEditClose();
        showSuccess("Mutation updated successfully!");
      } else {
        alert("Failed to update mutation");
      }
    } catch (error) {
      console.error("Error updating mutation:", error);
      alert("Failed to update mutation");
    }
  };

  // Delete handlers
  const handleDeleteClick = (mutation) => {
    setDeleteMutation(mutation);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setTimeout(() => setDeleteMutation(null), 300);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/${deleteMutation.idMutasi}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchMutations();
        handleDeleteClose();
        showSuccess("Mutation deleted successfully!");
      } else {
        alert("Failed to delete mutation");
        handleDeleteClose();
      }
    } catch (error) {
      console.error("Error deleting mutation:", error);
      alert("Failed to delete mutation");
      handleDeleteClose();
    }
  };

  // Detail handlers
  const handleDetailClick = async (mutation) => {
    setDetailMutation(mutation);
    try {
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/${mutation.idMutasi}/detail`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setDetailItems(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching detail:", error);
    }
    setDetailModalOpen(true);
  };

  const handleDetailClose = () => {
    setDetailModalOpen(false);
    setTimeout(() => {
      setDetailMutation(null);
      setDetailItems([]);
    }, 300);
  };

  // Send/Submit handler - check if mutation has items first
  const handleSendClick = async (mutation) => {
    if (mutation.statusMutasi !== "Draft") {
      alert("Only Draft mutations can be submitted");
      return;
    }
    
    // Check if mutation has items
    try {
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/${mutation.idMutasi}/detail`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const items = result.data || result || [];
        
        if (!Array.isArray(items) || items.length === 0) {
          // No items - show warning
          setWarningModalOpen(true);
          return;
        }
        
        // Has items - show confirmation
        setSendMutation(mutation);
        setSendModalOpen(true);
      }
    } catch (error) {
      console.error("Error checking mutation items:", error);
      alert("Failed to check mutation items");
    }
  };

  const handleSendConfirm = async () => {
    if (!sendMutation) return;
    
    try {
      const approveData = {
        idMutasi: sendMutation.idMutasi,
        statusMutasi: "On Progress Koor UPT",
        disetujuiOleh: "",
        modifiedBy: "1",
      };
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/approve`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(approveData),
      });
      if (response.ok) {
        fetchMutations();
        setSendModalOpen(false);
        setSendMutation(null);
        showSuccess("Mutation submitted for approval!");
      } else {
        alert("Failed to submit mutation");
      }
    } catch (error) {
      console.error("Error submitting mutation:", error);
      alert("Failed to submit mutation");
    }
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
    // Filter by logged in user
    const storedUser = localStorage.getItem("user");
    let currentUserId = null;
    if (storedUser) {
      const currentUser = JSON.parse(storedUser);
      currentUserId = currentUser?.idPengguna;
    }
    const matchesUser = !currentUserId || mutation.idPengguna === currentUserId;

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

    return matchesUser && matchesSearch && matchesStatus && matchesStartDate && matchesEndDate;
  });

  const sortedMutations = [...filteredMutations].sort((a, b) => {
    if (!orderBy) return 0;
    
    let aVal, bVal;
    
    if (orderBy === "tanggalMutasi") {
      aVal = new Date(a.tanggalMutasi);
      bVal = new Date(b.tanggalMutasi);
      return order === "asc" ? aVal - bVal : bVal - aVal;
    } else if (orderBy === "idPengguna") {
      aVal = getPenggunaName(a.idPengguna)?.toLowerCase() || "";
      bVal = getPenggunaName(b.idPengguna)?.toLowerCase() || "";
    } else {
      aVal = String(a[orderBy] ?? "").toLowerCase();
      bVal = String(b[orderBy] ?? "").toLowerCase();
    }
    
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });

  // Apply reverse order for "No" column
  const displayMutations = orderBy === "no" 
    ? (order === "desc" ? [...sortedMutations].reverse() : sortedMutations)
    : sortedMutations;

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
          <Button
            variant="contained"
            onClick={handleAddClick}
            sx={{
              backgroundColor: "#3b82f6",
              "&:hover": { backgroundColor: "#2563eb" },
            }}
          >
            Add Session
          </Button>
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
                  <MenuItem value="Draft">Draft</MenuItem>
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

        {/* Table with Pagination in same Paper */}
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
                ) : displayMutations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} align="center">No data available</TableCell>
                  </TableRow>
                ) : (
                  displayMutations
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((mutation, index) => {
                      // Calculate row number based on sort order
                      const rowNum = orderBy === "no" && order === "desc"
                        ? displayMutations.length - (page * rowsPerPage + index)
                        : page * rowsPerPage + index + 1;
                      return (
                      <TableRow key={mutation.idMutasi} hover>
                        <TableCell align="center">{rowNum}</TableCell>
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
                          <Box display="flex" gap={0.5} justifyContent="center">
                            {mutation.statusMutasi === "Draft" && (
                              <>
                                <IconButton
                                  size="small"
                                  onClick={() => navigate(`${basePath}/mutation/${mutation.idMutasi}/add-item`)}
                                  sx={{ backgroundColor: "#22c55e", color: "#fff", "&:hover": { backgroundColor: "#16a34a" }, width: 28, height: 28 }}
                                >
                                  <Add fontSize="small" />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  onClick={() => handleEditClick(mutation)}
                                  sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 28, height: 28 }}
                                >
                                  <Edit fontSize="small" />
                                </IconButton>
                              </>
                            )}
                            <IconButton
                              size="small"
                              onClick={() => navigate(`${basePath}/mutation/${mutation.idMutasi}/detail`)}
                              sx={{ backgroundColor: "#3b82f6", color: "#fff", "&:hover": { backgroundColor: "#2563eb" }, width: 28, height: 28 }}
                            >
                              <MenuIcon fontSize="small" />
                            </IconButton>
                            {mutation.statusMutasi === "Draft" && (
                              <>
                                <IconButton
                                  size="small"
                                  onClick={() => handleDeleteClick(mutation)}
                                  sx={{ backgroundColor: "#ef4444", color: "#fff", "&:hover": { backgroundColor: "#dc2626" }, width: 28, height: 28 }}
                                >
                                  <Delete fontSize="small" />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  onClick={() => handleSendClick(mutation)}
                                  sx={{ backgroundColor: "#8b5cf6", color: "#fff", "&:hover": { backgroundColor: "#7c3aed" }, width: 28, height: 28 }}
                                >
                                  <Send fontSize="small" />
                                </IconButton>
                              </>
                            )}
                          </Box>
                        </TableCell>
                      </TableRow>
                    )})
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination inside Paper */}
          <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1.5}>
            <Typography>
              Showing {displayMutations.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
              {Math.min((page + 1) * rowsPerPage, displayMutations.length)} of {displayMutations.length} entries
            </Typography>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={displayMutations.length}
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

        {/* Add Modal */}
        <Dialog
          open={addModalOpen}
          onClose={(e, r) => r !== "backdropClick" && handleAddClose()}
          maxWidth="sm"
          fullWidth
          disableEscapeKeyDown
        >
          <DialogTitle component="div" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" fontWeight="bold">Add Session</Typography>
            <IconButton onClick={handleAddClose} size="small">
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box>
                <Typography variant="body2" mb={0.5}>PIC Name <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  value={getPenggunaName(newMutation.idPengguna) || ""}
                  fullWidth
                  size="small"
                  disabled
                  sx={{ 
                    backgroundColor: "#f5f5f5",
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                      color: "#000000",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Mutation Date <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  value={newMutation.tanggalMutasi?.format("DD/MM/YYYY") || ""}
                  fullWidth
                  size="small"
                  disabled
                  sx={{ 
                    backgroundColor: "#f5f5f5",
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                      color: "#000000",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Origin Location <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  value={newMutation.lokasiAsal}
                  fullWidth
                  size="small"
                  disabled
                  sx={{ 
                    backgroundColor: "#f5f5f5",
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                      color: "#000000",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Destination Location <span style={{ color: "red" }}>*</span></Typography>
                <Autocomplete
                  options={lembagaList}
                  getOptionLabel={(option) => option.namaLembaga || ""}
                  value={lembagaList.find(l => l.id === newMutation.idLembagaTujuan) || null}
                  onChange={(event, newValue) => {
                    setNewMutation({ ...newMutation, idLembagaTujuan: newValue?.id || "" });
                    if (newValue?.id) setAddErrors({ ...addErrors, idLembagaTujuan: "" });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="-- Select Destination Location --"
                      size="small"
                      error={!!addErrors.idLembagaTujuan}
                      helperText={addErrors.idLembagaTujuan}
                    />
                  )}
                  isOptionEqualToValue={(option, value) => option.id === value?.id}
                  noOptionsText="No location found"
                  fullWidth
                />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Destination Room <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  placeholder="Enter destination room"
                  value={newMutation.ruangPenyimpananTujuan}
                  onChange={(e) => {
                    setNewMutation({ ...newMutation, ruangPenyimpananTujuan: e.target.value });
                    if (e.target.value.trim()) setAddErrors({ ...addErrors, ruangPenyimpananTujuan: "" });
                  }}
                  fullWidth
                  size="small"
                  error={!!addErrors.ruangPenyimpananTujuan}
                  helperText={addErrors.ruangPenyimpananTujuan}
                />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Mutation Reason <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  placeholder="Enter the reason for mutation"
                  value={newMutation.alasanMutasi}
                  onChange={(e) => {
                    setNewMutation({ ...newMutation, alasanMutasi: e.target.value });
                    if (e.target.value.trim()) setAddErrors({ ...addErrors, alasanMutasi: "" });
                  }}
                  fullWidth
                  size="small"
                  multiline
                  rows={3}
                  error={!!addErrors.alasanMutasi}
                  helperText={addErrors.alasanMutasi}
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
            <Button
              onClick={handleAddSave}
              variant="contained"
              sx={{
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
                minWidth: 120,
                borderRadius: "25px",
                textTransform: "none",
                fontSize: "16px",
                py: 1.5,
              }}
            >
              Save
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
                py: 1.5,
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        {/* Edit Modal */}
        <Dialog
          open={editModalOpen}
          onClose={(e, r) => r !== "backdropClick" && handleEditClose()}
          maxWidth="sm"
          fullWidth
          disableEscapeKeyDown
        >
          <DialogTitle component="div" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" fontWeight="bold">Edit Session</Typography>
            <IconButton onClick={handleEditClose} size="small">
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {editMutation && (
              <Box display="flex" flexDirection="column" gap={2} pt={1}>
                <Box>
                  <Typography variant="body2" mb={0.5}>PIC Name <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={getPenggunaName(editMutation.idPengguna) || ""}
                    fullWidth
                    size="small"
                    disabled
                    sx={{ 
                      backgroundColor: "#f5f5f5",
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                        color: "#000000",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Mutation Date <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={editMutation.tanggalMutasi?.format("DD/MM/YYYY") || ""}
                    fullWidth
                    size="small"
                    disabled
                    sx={{ 
                      backgroundColor: "#f5f5f5",
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                        color: "#000000",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Origin Location <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={editMutation.lokasiAsal}
                    fullWidth
                    size="small"
                    disabled
                    sx={{ 
                      backgroundColor: "#f5f5f5",
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                        color: "#000000",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Destination Location <span style={{ color: "red" }}>*</span></Typography>
                  <Autocomplete
                    options={lembagaList}
                    getOptionLabel={(option) => option.namaLembaga || ""}
                    value={lembagaList.find(l => l.id === editMutation.idLembagaTujuan) || null}
                    onChange={(event, newValue) => {
                      setEditMutation({ ...editMutation, idLembagaTujuan: newValue?.id || "" });
                      if (newValue?.id) setEditErrors({ ...editErrors, idLembagaTujuan: "" });
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="-- Select Destination Location --"
                        size="small"
                        error={!!editErrors.idLembagaTujuan}
                        helperText={editErrors.idLembagaTujuan}
                      />
                    )}
                    isOptionEqualToValue={(option, value) => option.id === value?.id}
                    noOptionsText="No location found"
                    fullWidth
                  />
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Destination Room <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    placeholder="Enter destination room"
                    value={editMutation.ruangPenyimpananTujuan || ""}
                    onChange={(e) => {
                      setEditMutation({ ...editMutation, ruangPenyimpananTujuan: e.target.value });
                      if (e.target.value.trim()) setEditErrors({ ...editErrors, ruangPenyimpananTujuan: "" });
                    }}
                    fullWidth
                    size="small"
                    error={!!editErrors.ruangPenyimpananTujuan}
                    helperText={editErrors.ruangPenyimpananTujuan}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Mutation Reason <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    placeholder="Enter the reason for mutation"
                    value={editMutation.alasanMutasi || ""}
                    onChange={(e) => {
                      setEditMutation({ ...editMutation, alasanMutasi: e.target.value });
                      if (e.target.value.trim()) setEditErrors({ ...editErrors, alasanMutasi: "" });
                    }}
                    fullWidth
                    size="small"
                    error={!!editErrors.alasanMutasi}
                    helperText={editErrors.alasanMutasi}
                    multiline
                    rows={3}
                  />
                </Box>
              </Box>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
            <Button
              onClick={handleEditSave}
              variant="contained"
              sx={{
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
                minWidth: 120,
                borderRadius: "25px",
                textTransform: "none",
                fontSize: "16px",
                py: 1.5,
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
                py: 1.5,
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        {/* Delete Modal */}
        <Dialog
          open={deleteModalOpen}
          onClose={(e, r) => r !== "backdropClick" && handleDeleteClose()}
          maxWidth="xs"
          fullWidth
          disableEscapeKeyDown
        >
          <DialogContent sx={{ textAlign: "center", py: 4 }}>
            <Warning sx={{ fontSize: 80, color: "#ff9800", mb: 2 }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
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

        {/* Detail Modal */}
        <Dialog
          open={detailModalOpen}
          onClose={handleDetailClose}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle component="div" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" fontWeight="bold">Mutation Detail</Typography>
            <IconButton onClick={handleDetailClose} size="small">
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {detailMutation && (
              <Box>
                <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} mb={3}>
                  <Box>
                    <Typography variant="body2" color="textSecondary">PIC Name</Typography>
                    <Typography fontWeight="bold">{getPenggunaName(detailMutation.idPengguna)}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">Mutation Date</Typography>
                    <Typography fontWeight="bold">{formatDate(detailMutation.tanggalMutasi)}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">Origin Location</Typography>
                    <Typography fontWeight="bold">{detailMutation.lokasiAsal}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">Destination Location</Typography>
                    <Typography fontWeight="bold">{detailMutation.lokasiTujuan}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">Destination Room</Typography>
                    <Typography fontWeight="bold">{detailMutation.ruangPenyimpananTujuan || "-"}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">Status</Typography>
                    <Chip
                      label={detailMutation.statusMutasi}
                      size="small"
                      sx={{ backgroundColor: getStatusColor(detailMutation.statusMutasi).bg, color: getStatusColor(detailMutation.statusMutasi).color }}
                    />
                  </Box>
                  <Box gridColumn="1 / -1">
                    <Typography variant="body2" color="textSecondary">Reason</Typography>
                    <Typography fontWeight="bold">{detailMutation.alasanMutasi || "-"}</Typography>
                  </Box>
                </Box>

                <Typography variant="h6" fontWeight="bold" mb={2}>Items</Typography>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell>Item ID</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Condition</TableCell>
                        <TableCell>Notes</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {detailItems.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} align="center">No items</TableCell>
                        </TableRow>
                      ) : (
                        detailItems.map((item, index) => (
                          <TableRow key={item.idDtlMutasi}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.idBarang}</TableCell>
                            <TableCell>{item.kuantitas}</TableCell>
                            <TableCell>{item.kondisiBarang}</TableCell>
                            <TableCell>{item.catatan || "-"}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 2, justifyContent: "center" }}>
            <Button
              onClick={handleDetailClose}
              variant="contained"
              sx={{
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
                minWidth: 100,
                borderRadius: "25px",
                textTransform: "none",
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* Success Modal */}
        <SuccessModal 
          open={successModalOpen} 
          onClose={() => setSuccessModalOpen(false)} 
          message={successMessage} 
        />

        {/* Send Confirmation Modal */}
        <Dialog open={sendModalOpen} onClose={() => setSendModalOpen(false)} maxWidth="xs" fullWidth>
          <DialogContent sx={{ textAlign: "center", py: 4 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Typography variant="h2" color="#0ea5e9">?</Typography>
            </Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Send for Approval?
            </Typography>
            <Typography variant="body1" color="textSecondary">
              This mutation will be submitted for approval. You won't be able to edit it after sending.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
            <Button
              onClick={handleSendConfirm}
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
              Yes, send it!
            </Button>
            <Button
              onClick={() => { setSendModalOpen(false); setSendMutation(null); }}
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

        {/* Warning Modal - No Items */}
        <Dialog open={warningModalOpen} onClose={() => setWarningModalOpen(false)} maxWidth="xs" fullWidth>
          <DialogContent sx={{ textAlign: "center", py: 4 }}>
            <Warning sx={{ fontSize: 80, color: "#f59e0b", mb: 2 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Warning!
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Cannot send mutation without items. Please add at least one item first.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
            <Button
              onClick={() => setWarningModalOpen(false)}
              variant="contained"
              sx={{
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
                minWidth: 100,
                borderRadius: "25px",
                textTransform: "none",
              }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* Footer */}
        <Footer />
      </Box>
    </LocalizationProvider>
  );
};

export default Mutation;

