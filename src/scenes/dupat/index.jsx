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
} from "@mui/material";
import { tokens } from "../../theme";
import { Add, Edit, Delete, Close, Menu as MenuIcon, Send, Warning } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const Dupat = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const location = useLocation();
  
  const getBasePath = () => {
    if (location.pathname.startsWith("/dashboardPIClab")) return "/dashboardPIClab";
    if (location.pathname.startsWith("/dashboardPICnonasset")) return "/dashboardPICnonasset";
    return "/dashboardPICasset";
  };
  const basePath = getBasePath();

  const [dupats, setDupats] = useState([]);
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

  // Add Modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newDupat, setNewDupat] = useState({
    idPengguna: "",
    tanggalDupat: dayjs(),
    keterangan: "",
    statusDupat: "Draft",
  });
  const [addErrors, setAddErrors] = useState({});

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editDupat, setEditDupat] = useState(null);
  const [editErrors, setEditErrors] = useState({});

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteDupat, setDeleteDupat] = useState(null);

  // Send Modal
  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [sendDupat, setSendDupat] = useState(null);
  
  // Warning Modal (no items)
  const [warningModalOpen, setWarningModalOpen] = useState(false);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchDupats();
    fetchPengguna();
  }, []);

  const fetchDupats = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Dupat`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setDupats(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching dupats:", error);
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

  // Add handlers
  const handleAddClick = () => {
    const storedUser = localStorage.getItem("user");
    let currentUser = null;
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
    }
    
    setNewDupat({
      idPengguna: currentUser?.idPengguna || "",
      tanggalDupat: dayjs(),
      keterangan: "",
      statusDupat: "Draft",
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
    if (!newDupat.keterangan?.trim()) {
      errors.keterangan = "This field is required";
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
        idPengguna: newDupat.idPengguna,
        keteranganDupat: newDupat.keterangan,
        statusDupat: "Draft",
      };
      const response = await fetch(`${API_BASE_URL}/api/Dupat`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(createData),
      });
      if (response.ok) {
        fetchDupats();
        handleAddClose();
        showSuccess("Dupat session added successfully!");
      } else {
        alert("Failed to add dupat");
      }
    } catch (error) {
      console.error("Error adding dupat:", error);
      alert("Failed to add dupat");
    }
  };

  // Edit handlers
  const handleEditClick = (dupat) => {
    setEditDupat({
      ...dupat,
      keterangan: dupat.keteranganDupat,
      tanggalDupat: dayjs(dupat.tanggalDupat),
    });
    setEditErrors({});
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setEditErrors({});
    setTimeout(() => setEditDupat(null), 300);
  };

  const validateEditForm = () => {
    const errors = {};
    if (!editDupat.keterangan?.trim()) {
      errors.keterangan = "This field is required";
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
        idDupat: editDupat.idDupat,
        idPengguna: editDupat.idPengguna,
        keteranganDupat: editDupat.keterangan,
        statusDupat: editDupat.statusDupat,
        modifiedBy: "1",
      };
      const response = await fetch(`${API_BASE_URL}/api/Dupat`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(updateData),
      });
      if (response.ok) {
        fetchDupats();
        handleEditClose();
        showSuccess("Dupat updated successfully!");
      } else {
        alert("Failed to update dupat");
      }
    } catch (error) {
      console.error("Error updating dupat:", error);
      alert("Failed to update dupat");
    }
  };

  // Delete handlers
  const handleDeleteClick = (dupat) => {
    setDeleteDupat(dupat);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setTimeout(() => setDeleteDupat(null), 300);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Dupat/${deleteDupat.idDupat}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchDupats();
        handleDeleteClose();
        showSuccess("Dupat deleted successfully!");
      } else {
        alert("Failed to delete dupat");
        handleDeleteClose();
      }
    } catch (error) {
      console.error("Error deleting dupat:", error);
      alert("Failed to delete dupat");
      handleDeleteClose();
    }
  };

  // Send/Submit handler - check if dupat has items first
  const handleSendClick = async (dupat) => {
    if (dupat.statusDupat !== "Draft") {
      alert("Only Draft dupats can be submitted");
      return;
    }
    
    // Check if dupat has items
    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlDupat/bydupat/${dupat.idDupat}`, {
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
        setSendDupat(dupat);
        setSendModalOpen(true);
      }
    } catch (error) {
      console.error("Error checking dupat items:", error);
      alert("Failed to check dupat items");
    }
  };

  const handleSendConfirm = async () => {
    if (!sendDupat) return;
    
    try {
      const storedUser = localStorage.getItem("user");
      let currentUserId = "1";
      if (storedUser) {
        const currentUser = JSON.parse(storedUser);
        currentUserId = currentUser?.idPengguna || "1";
      }

      const updateData = {
        idDupat: sendDupat.idDupat,
        idPengguna: sendDupat.idPengguna,
        keteranganDupat: sendDupat.keteranganDupat,
        statusDupat: "On Progress Koor UPT",
        modifiedBy: currentUserId,
      };
      
      const response = await fetch(`${API_BASE_URL}/api/Dupat`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(updateData),
      });
      
      if (response.ok) {
        fetchDupats();
        setSendModalOpen(false);
        setSendDupat(null);
        showSuccess("Dupat submitted for approval!");
      } else {
        const errorText = await response.text();
        console.error("Failed to submit dupat:", errorText);
        alert("Failed to submit dupat");
      }
    } catch (error) {
      console.error("Error submitting dupat:", error);
      alert("Failed to submit dupat");
    }
  };

  // Filter handler
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

  const filteredDupats = dupats.filter((dupat) => {
    const storedUser = localStorage.getItem("user");
    let currentUserId = null;
    if (storedUser) {
      const currentUser = JSON.parse(storedUser);
      currentUserId = currentUser?.idPengguna;
    }
    const matchesUser = !currentUserId || dupat.idPengguna === currentUserId;

    const search = searchTerm.trim().toLowerCase();
    const matchesSearch = !search ||
      getPenggunaName(dupat.idPengguna)?.toLowerCase().includes(search) ||
      dupat.keteranganDupat?.toLowerCase().includes(search);

    const matchesStatus = !statusFilter || dupat.statusDupat === statusFilter;

    const dupatDate = dayjs(dupat.tanggalDupat);
    const matchesStartDate = !startDate || dupatDate.isAfter(startDate.subtract(1, 'day'));
    const matchesEndDate = !endDate || dupatDate.isBefore(endDate.add(1, 'day'));

    return matchesUser && matchesSearch && matchesStatus && matchesStartDate && matchesEndDate;
  });

  const sortedDupats = [...filteredDupats].sort((a, b) => {
    if (!orderBy) return 0;
    
    let aVal, bVal;
    
    if (orderBy === "tanggalDupat") {
      aVal = new Date(a.tanggalDupat);
      bVal = new Date(b.tanggalDupat);
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

  const displayDupats = orderBy === "no" 
    ? (order === "desc" ? [...sortedDupats].reverse() : sortedDupats)
    : sortedDupats;

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
    { id: "tanggalDupat", label: "Date", sortable: true, align: "center" },
    { id: "idPengguna", label: "PIC", sortable: true, align: "center" },
    { id: "keterangan", label: "Description", sortable: true, align: "center" },
    { id: "statusDupat", label: "Status", sortable: true, align: "center" },
    { id: "action", label: "Action", sortable: false, align: "center" },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box m="20px">
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
            Dupat
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

        {/* Table with Pagination */}
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
                    <TableCell colSpan={6} align="center">Loading...</TableCell>
                  </TableRow>
                ) : displayDupats.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">No data available</TableCell>
                  </TableRow>
                ) : (
                  displayDupats
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((dupat, index) => {
                      const rowNum = orderBy === "no" && order === "desc"
                        ? displayDupats.length - (page * rowsPerPage + index)
                        : page * rowsPerPage + index + 1;
                      return (
                      <TableRow key={dupat.idDupat} hover>
                        <TableCell align="center">{rowNum}</TableCell>
                        <TableCell align="center">{formatDate(dupat.tanggalDupat)}</TableCell>
                        <TableCell align="center">{getPenggunaName(dupat.idPengguna)}</TableCell>
                        <TableCell align="center">{dupat.keteranganDupat || "-"}</TableCell>
                        <TableCell align="center">
                          <Chip
                            label={dupat.statusDupat}
                            size="small"
                            sx={{
                              backgroundColor: getStatusColor(dupat.statusDupat).bg,
                              color: getStatusColor(dupat.statusDupat).color,
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Box display="flex" gap={0.5} justifyContent="center">
                            {dupat.statusDupat === "Draft" && (
                              <>
                                <IconButton
                                  size="small"
                                  onClick={() => navigate(`${basePath}/dupat/${dupat.idDupat}/add-item`)}
                                  sx={{ backgroundColor: "#22c55e", color: "#fff", "&:hover": { backgroundColor: "#16a34a" }, width: 28, height: 28 }}
                                >
                                  <Add fontSize="small" />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  onClick={() => handleEditClick(dupat)}
                                  sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 28, height: 28 }}
                                >
                                  <Edit fontSize="small" />
                                </IconButton>
                              </>
                            )}
                            <IconButton
                              size="small"
                              onClick={() => navigate(`${basePath}/dupat/${dupat.idDupat}/detail`)}
                              sx={{ backgroundColor: "#3b82f6", color: "#fff", "&:hover": { backgroundColor: "#2563eb" }, width: 28, height: 28 }}
                            >
                              <MenuIcon fontSize="small" />
                            </IconButton>
                            {dupat.statusDupat === "Draft" && (
                              <>
                                <IconButton
                                  size="small"
                                  onClick={() => handleDeleteClick(dupat)}
                                  sx={{ backgroundColor: "#ef4444", color: "#fff", "&:hover": { backgroundColor: "#dc2626" }, width: 28, height: 28 }}
                                >
                                  <Delete fontSize="small" />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  onClick={() => handleSendClick(dupat)}
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

          {/* Pagination */}
          <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1.5}>
            <Typography>
              Showing {displayDupats.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
              {Math.min((page + 1) * rowsPerPage, displayDupats.length)} of {displayDupats.length} entries
            </Typography>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={displayDupats.length}
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
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "bold" }}>
          Add Dupat Session
          <IconButton onClick={handleAddClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
          <DialogContent dividers>
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box>
                <Typography variant="body2" mb={0.5}>PIC <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  value={getPenggunaName(newDupat.idPengguna) || ""}
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
                <Typography variant="body2" mb={0.5}>Date <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  value={newDupat.tanggalDupat?.format("DD/MM/YYYY") || ""}
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
                <Typography variant="body2" mb={0.5}>Description <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  value={newDupat.keterangan}
                  onChange={(e) => setNewDupat({ ...newDupat, keterangan: e.target.value })}
                  fullWidth
                  size="small"
                  multiline
                  rows={3}
                  error={!!addErrors.keterangan}
                  helperText={addErrors.keterangan}
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleAddSave}
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
              variant="contained"
              onClick={handleAddClose}
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
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "bold" }}>
          Edit Dupat Session
          <IconButton onClick={handleEditClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
          <DialogContent dividers>
            {editDupat && (
              <Box display="flex" flexDirection="column" gap={2} pt={1}>
                <Box>
                  <Typography variant="body2" mb={0.5}>PIC <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={getPenggunaName(editDupat.idPengguna) || ""}
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
                  <Typography variant="body2" mb={0.5}>Date <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={editDupat.tanggalDupat?.format("DD/MM/YYYY") || ""}
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
                  <Typography variant="body2" mb={0.5}>Description <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={editDupat.keterangan}
                    onChange={(e) => setEditDupat({ ...editDupat, keterangan: e.target.value })}
                    fullWidth
                    size="small"
                    multiline
                    rows={3}
                    error={!!editErrors.keterangan}
                    helperText={editErrors.keterangan}
                  />
                </Box>
              </Box>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleEditSave}
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
              variant="contained"
              onClick={handleEditClose}
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
              This dupat will be submitted for approval. You won't be able to edit it after sending.
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
              onClick={() => { setSendModalOpen(false); setSendDupat(null); }}
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

        {/* Warning Modal (No Items) */}
        <Dialog open={warningModalOpen} onClose={() => setWarningModalOpen(false)} maxWidth="xs" fullWidth>
          <DialogContent sx={{ textAlign: "center", py: 4 }}>
            <Warning sx={{ fontSize: 80, color: "#f59e0b", mb: 2 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Warning!
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Cannot send dupat without items. Please add at least one item first.
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

export default Dupat;
