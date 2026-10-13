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
import { Add, Edit, Delete, Close, Menu as MenuIcon, Send } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

const API_BASE_URL = "https://localhost:7130";

const StockOpname = () => {
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

  const [stockOpnames, setStockOpnames] = useState([]);
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
  const [newStockOpname, setNewStockOpname] = useState({
    soPic: "",
    soStartDate: dayjs(),
    soDeskripsi: "",
  });
  const [addErrors, setAddErrors] = useState({});

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editStockOpname, setEditStockOpname] = useState(null);
  const [editErrors, setEditErrors] = useState({});

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteStockOpname, setDeleteStockOpname] = useState(null);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Send Modal
  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [sendStockOpname, setSendStockOpname] = useState(null);
  const [warningModalOpen, setWarningModalOpen] = useState(false);

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
        
        // Fetch actual item count for each stock opname
        const stockOpnamesWithActualCount = await Promise.all(
          (Array.isArray(data) ? data : []).map(async (so) => {
            try {
              const itemsResponse = await fetch(`${API_BASE_URL}/api/DtlStockOpname/byopname/${so.soIdOpname}`, {
                method: "GET",
                headers: { "Accept": "application/json" },
              });
              if (itemsResponse.ok) {
                const itemsResult = await itemsResponse.json();
                const items = itemsResult.data || itemsResult || [];
                const actualCount = Array.isArray(items) ? items.length : 0;
                return { ...so, soTotalItem: actualCount };
              }
            } catch (error) {
              console.error(`Error fetching items for ${so.soIdOpname}:`, error);
            }
            return so;
          })
        );
        
        setStockOpnames(stockOpnamesWithActualCount);
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
    setNewStockOpname({
      soPic: currentUser?.idPengguna || "",
      soStartDate: dayjs(),
      soDeskripsi: "",
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
    if (!newStockOpname.soDeskripsi?.trim()) {
      errors.soDeskripsi = "Description is required";
    }
    setAddErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddSave = async () => {
    if (!validateAddForm()) return;
    try {
      const createData = {
        soStartDate: newStockOpname.soStartDate.format("YYYY-MM-DD"),
        soPic: newStockOpname.soPic,
        soTotalItem: 0,
        soStatus: "Draft",
        soDeskripsi: newStockOpname.soDeskripsi,
        createdBy: newStockOpname.soPic,
      };
      const response = await fetch(`${API_BASE_URL}/api/StockOpname`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(createData),
      });
      if (response.ok) {
        fetchStockOpnames();
        handleAddClose();
        showSuccess("Stock Opname session added successfully!");
      } else {
        alert("Failed to add stock opname");
      }
    } catch (error) {
      console.error("Error adding stock opname:", error);
      alert("Failed to add stock opname");
    }
  };

  // Edit handlers
  const handleEditClick = (stockOpname) => {
    setEditStockOpname({
      ...stockOpname,
      soStartDate: dayjs(stockOpname.soStartDate),
    });
    setEditErrors({});
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setEditErrors({});
    setTimeout(() => setEditStockOpname(null), 300);
  };

  const validateEditForm = () => {
    const errors = {};
    if (!editStockOpname.soDeskripsi?.trim()) {
      errors.soDeskripsi = "Description is required";
    }
    setEditErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEditSave = async () => {
    if (!validateEditForm()) return;
    try {
      const updateData = {
        soIdOpname: editStockOpname.soIdOpname,
        soStartDate: editStockOpname.soStartDate.format("YYYY-MM-DD"),
        soEndDate: editStockOpname.soEndDate || null,
        soPic: editStockOpname.soPic,
        soTotalItem: editStockOpname.soTotalItem,
        soStatus: editStockOpname.soStatus,
        soDeskripsi: editStockOpname.soDeskripsi,
        modifiedBy: editStockOpname.soPic,
      };
      const response = await fetch(`${API_BASE_URL}/api/StockOpname`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(updateData),
      });
      if (response.ok) {
        fetchStockOpnames();
        handleEditClose();
        showSuccess("Stock Opname updated successfully!");
      } else {
        alert("Failed to update stock opname");
      }
    } catch (error) {
      console.error("Error updating stock opname:", error);
      alert("Failed to update stock opname");
    }
  };

  // Delete handlers
  const handleDeleteClick = (stockOpname) => {
    setDeleteStockOpname(stockOpname);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setTimeout(() => setDeleteStockOpname(null), 300);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/StockOpname/${deleteStockOpname.soIdOpname}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchStockOpnames();
        handleDeleteClose();
        showSuccess("Stock Opname deleted successfully!");
      } else {
        alert("Failed to delete stock opname");
        handleDeleteClose();
      }
    } catch (error) {
      console.error("Error deleting stock opname:", error);
      alert("Failed to delete stock opname");
      handleDeleteClose();
    }
  };

  // Send handler
  const handleSendClick = async (stockOpname) => {
    if (stockOpname.soStatus !== "Draft") {
      alert("Only Draft stock opnames can be submitted");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlStockOpname/byopname/${stockOpname.soIdOpname}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const items = result.data || result || [];
        if (!Array.isArray(items) || items.length === 0) {
          setWarningModalOpen(true);
          return;
        }
        setSendStockOpname(stockOpname);
        setSendModalOpen(true);
      }
    } catch (error) {
      console.error("Error checking stock opname items:", error);
      alert("Failed to check stock opname items");
    }
  };

  const handleSendConfirm = async () => {
    if (!sendStockOpname) return;
    
    try {
      // Validasi tambahan sebelum submit
      const response = await fetch(`${API_BASE_URL}/api/DtlStockOpname/byopname/${sendStockOpname.soIdOpname}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      
      if (response.ok) {
        const result = await response.json();
        const items = result.data || result || [];
        
        if (!Array.isArray(items) || items.length === 0) {
          setSendModalOpen(false);
          setSendStockOpname(null);
          setWarningModalOpen(true);
          return;
        }
      }

      const approveData = {
        soIdOpname: sendStockOpname.soIdOpname,
        soStatus: "On Progress Koor UPT",
        modifiedBy: sendStockOpname.soPic || "SYSTEM",
      };
      
      console.log("Sending approval data:", approveData);
      
      const approveResponse = await fetch(`${API_BASE_URL}/api/StockOpname/approve`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json", 
          "Accept": "application/json",
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(approveData),
      });
      
      console.log("Approve response status:", approveResponse.status);
      
      if (approveResponse.ok) {
        await fetchStockOpnames();
        setSendModalOpen(false);
        setSendStockOpname(null);
        showSuccess("Stock Opname submitted for approval!");
      } else {
        // Baca error response
        let errorMessage = "Unknown error occurred";
        try {
          const errorData = await approveResponse.json();
          console.error("Submit failed:", errorData);
          errorMessage = errorData.Message || errorData.message || errorData.error || `Server error (${approveResponse.status})`;
        } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
          errorMessage = `Server error (${approveResponse.status}): ${approveResponse.statusText}`;
        }
        
        setSendModalOpen(false);
        setSendStockOpname(null);
        alert(`Failed to submit stock opname: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error submitting stock opname:", error);
      setSendModalOpen(false);
      setSendStockOpname(null);
      alert(`Failed to submit stock opname: ${error.message}. Please check your connection and try again.`);
    }
  };

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

  const filteredStockOpnames = stockOpnames.filter((so) => {
    const storedUser = localStorage.getItem("user");
    let currentUserId = null;
    if (storedUser) {
      const currentUser = JSON.parse(storedUser);
      currentUserId = currentUser?.idPengguna;
    }
    const matchesUser = !currentUserId || so.soPic === currentUserId;

    const search = searchTerm.trim().toLowerCase();
    const matchesSearch = !search ||
      getPenggunaName(so.soPic)?.toLowerCase().includes(search) ||
      so.soDeskripsi?.toLowerCase().includes(search);

    const matchesStatus = !statusFilter || so.soStatus === statusFilter;

    const soDate = dayjs(so.soStartDate);
    const matchesStartDate = !startDate || soDate.isAfter(startDate.subtract(1, 'day'));
    const matchesEndDate = !endDate || soDate.isBefore(endDate.add(1, 'day'));

    return matchesUser && matchesSearch && matchesStatus && matchesStartDate && matchesEndDate;
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
          <Button
            variant="contained"
            onClick={handleAddClick}
            sx={{ backgroundColor: "#3b82f6", "&:hover": { backgroundColor: "#2563eb" } }}
          >
            Add Session
          </Button>
        </Box>

        {/* Filter Section */}
        <Box backgroundColor={colors.primary[400]} p={3} borderRadius="8px" mb={3}>
          <Typography variant="h5" fontWeight="bold" mb={2}>Filter</Typography>
          <Box display="flex" gap={2} mb={2} alignItems="flex-end">
            <Box>
              <Typography variant="body2" mb={0.5}>Start Date</Typography>
              <DatePicker
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                format="DD/MM/YYYY"
                slotProps={{ textField: { size: "small", placeholder: "DD/MM/YYYY", sx: { width: 150 } } }}
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>End Date</Typography>
              <DatePicker
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                format="DD/MM/YYYY"
                slotProps={{ textField: { size: "small", placeholder: "DD/MM/YYYY", sx: { width: 150 } } }}
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Status</Typography>
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} displayEmpty>
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
              sx={{ backgroundColor: "#6b7280", "&:hover": { backgroundColor: "#4b5563" } }}
            >
              RESET
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
                                <>
                                  <IconButton
                                    size="small"
                                    onClick={() => navigate(`${basePath}/stock-opname/${so.soIdOpname}/add-item`)}
                                    sx={{ backgroundColor: "#22c55e", color: "#fff", "&:hover": { backgroundColor: "#16a34a" }, width: 28, height: 28 }}
                                  >
                                    <Add fontSize="small" />
                                  </IconButton>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleEditClick(so)}
                                    sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 28, height: 28 }}
                                  >
                                    <Edit fontSize="small" />
                                  </IconButton>
                                </>
                              )}
                              <IconButton
                                size="small"
                                onClick={() => navigate(`${basePath}/stock-opname/${so.soIdOpname}/detail`)}
                                sx={{ backgroundColor: "#3b82f6", color: "#fff", "&:hover": { backgroundColor: "#2563eb" }, width: 28, height: 28 }}
                              >
                                <MenuIcon fontSize="small" />
                              </IconButton>
                              {so.soStatus === "Draft" && (
                                <>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleDeleteClick(so)}
                                    sx={{ backgroundColor: "#ef4444", color: "#fff", "&:hover": { backgroundColor: "#dc2626" }, width: 28, height: 28 }}
                                  >
                                    <Delete fontSize="small" />
                                  </IconButton>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleSendClick(so)}
                                    sx={{ backgroundColor: "#8b5cf6", color: "#fff", "&:hover": { backgroundColor: "#7c3aed" }, width: 28, height: 28 }}
                                  >
                                    <Send fontSize="small" />
                                  </IconButton>
                                </>
                              )}
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

        {/* Add Modal */}
        <Dialog open={addModalOpen} onClose={(e, r) => r !== "backdropClick" && handleAddClose()} maxWidth="sm" fullWidth disableEscapeKeyDown>
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "bold" }}>
            Add Opname Session
            <IconButton onClick={handleAddClose} size="small"><Close /></IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box display="flex" gap={2}>
                <Box flex={1}>
                  <Typography variant="body2" mb={0.5}>PIC <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={getPenggunaName(newStockOpname.soPic) || ""}
                    fullWidth
                    size="small"
                    disabled
                    sx={{ backgroundColor: "#f5f5f5", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", color: "#000" } }}
                  />
                </Box>
                <Box flex={1}>
                  <Typography variant="body2" mb={0.5}>Start Date <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={newStockOpname.soStartDate?.format("DD/MM/YYYY") || ""}
                    fullWidth
                    size="small"
                    disabled
                    sx={{ backgroundColor: "#f5f5f5", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", color: "#000" } }}
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Description <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  value={newStockOpname.soDeskripsi}
                  onChange={(e) => setNewStockOpname({ ...newStockOpname, soDeskripsi: e.target.value })}
                  fullWidth
                  size="small"
                  multiline
                  rows={3}
                  placeholder="Enter description"
                  error={!!addErrors.soDeskripsi}
                  helperText={addErrors.soDeskripsi}
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
        <Dialog open={editModalOpen} onClose={(e, r) => r !== "backdropClick" && handleEditClose()} maxWidth="sm" fullWidth disableEscapeKeyDown>
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "bold" }}>
            Edit Opname Session
            <IconButton onClick={handleEditClose} size="small"><Close /></IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {editStockOpname && (
              <Box display="flex" flexDirection="column" gap={2} pt={1}>
                <Box display="flex" gap={2}>
                  <Box flex={1}>
                    <Typography variant="body2" mb={0.5}>PIC <span style={{ color: "red" }}>*</span></Typography>
                    <TextField
                      value={getPenggunaName(editStockOpname.soPic) || ""}
                      fullWidth
                      size="small"
                      disabled
                      sx={{ backgroundColor: "#f5f5f5", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", color: "#000" } }}
                    />
                  </Box>
                  <Box flex={1}>
                    <Typography variant="body2" mb={0.5}>Start Date <span style={{ color: "red" }}>*</span></Typography>
                    <TextField
                      value={editStockOpname.soStartDate?.format("DD/MM/YYYY") || ""}
                      fullWidth
                      size="small"
                      disabled
                      sx={{ backgroundColor: "#f5f5f5", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", color: "#000" } }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Description <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={editStockOpname.soDeskripsi || ""}
                    onChange={(e) => setEditStockOpname({ ...editStockOpname, soDeskripsi: e.target.value })}
                    fullWidth
                    size="small"
                    multiline
                    rows={3}
                    placeholder="Enter description"
                    error={!!editErrors.soDeskripsi}
                    helperText={editErrors.soDeskripsi}
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
        <Dialog open={deleteModalOpen} onClose={handleDeleteClose} maxWidth="xs" fullWidth>
          <DialogContent sx={{ textAlign: "center", py: 4 }}>
            <Box sx={{ fontSize: 60, color: "#ef4444", mb: 2 }}>!</Box>
            <Typography variant="h5" fontWeight="bold" mb={1}>Are you sure?</Typography>
            <Typography color="textSecondary">You won't be able to revert this!</Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
            <Button
              onClick={handleDeleteConfirm}
              variant="contained"
              sx={{
                backgroundColor: "#ef4444",
                "&:hover": { backgroundColor: "#dc2626" },
                minWidth: 120,
                borderRadius: "25px",
                textTransform: "none",
                fontSize: "16px",
                py: 1.5,
              }}
            >
              Yes, delete it!
            </Button>
            <Button
              onClick={handleDeleteClose}
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

        {/* Send Modal */}
        <Dialog open={sendModalOpen} onClose={() => setSendModalOpen(false)} maxWidth="xs" fullWidth>
          <DialogContent sx={{ textAlign: "center", py: 4 }}>
            <Box sx={{ fontSize: 60, color: "#3b82f6", mb: 2 }}>?</Box>
            <Typography variant="h5" fontWeight="bold" mb={1}>Send for Approval?</Typography>
            <Typography color="textSecondary">This stock opname will be submitted for approval. You won't be able to edit it after sending.</Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
            <Button
              onClick={handleSendConfirm}
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
              Yes, send it!
            </Button>
            <Button
              onClick={() => setSendModalOpen(false)}
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

        {/* Warning Modal - No Items */}
        <Dialog open={warningModalOpen} onClose={() => setWarningModalOpen(false)} maxWidth="xs" fullWidth>
          <DialogContent sx={{ textAlign: "center", py: 4 }}>
            <Box sx={{ fontSize: 60, color: "#f59e0b", mb: 2 }}>⚠</Box>
            <Typography variant="h5" fontWeight="bold" mb={1}>Cannot Submit</Typography>
            <Typography color="textSecondary">Please add at least one item before submitting for approval.</Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
            <Button
              onClick={() => setWarningModalOpen(false)}
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
              OK
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
    </LocalizationProvider>
  );
};

export default StockOpname;
