import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  useTheme,
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
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { tokens } from "../../theme";
import { Add, Edit, Delete, Close, Warning } from "@mui/icons-material";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const RoomStorage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [storages, setStorages] = useState([]);
  const [allStorages, setAllStorages] = useState([]);
  const [dtlRuanganPenyimpanan, setDtlRuanganPenyimpanan] = useState([]);
  const [roomStorageData, setRoomStorageData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Add Storage Modal
  const [addStorageModalOpen, setAddStorageModalOpen] = useState(false);
  const [newStorage, setNewStorage] = useState({ idPenyimpanan: "" });

  // Edit Storage Modal
  const [editStorageModalOpen, setEditStorageModalOpen] = useState(false);
  const [editStorageItem, setEditStorageItem] = useState(null);

  // Delete Storage Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteStorageItem, setDeleteStorageItem] = useState(null);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  useEffect(() => {
    fetchRoom();
    fetchAllStorages();
    fetchDtlRuanganPenyimpanan();
  }, [id]);

  useEffect(() => {
    if (room && dtlRuanganPenyimpanan.length >= 0 && allStorages.length > 0) {
      loadRoomStorageData();
    }
  }, [room, dtlRuanganPenyimpanan, allStorages]);

  const fetchRoom = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan/${id}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result;
        setRoom(data);
      }
    } catch (error) {
      console.error("Error fetching room:", error);
    }
  };

  const fetchAllStorages = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Penyimpanan`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setAllStorages(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching storages:", error);
    }
  };

  const fetchDtlRuanganPenyimpanan = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlRuanganPenyimpanan`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setDtlRuanganPenyimpanan(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching dtl ruangan penyimpanan:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadRoomStorageData = () => {
    const roomDtl = dtlRuanganPenyimpanan.filter(d => String(d.idRuangan) === String(id));
    const storageList = roomDtl.map(dtl => {
      const storage = allStorages.find(s => s.idPenyimpanan === dtl.idPenyimpanan);
      return {
        idDtlPenyimpanan: dtl.idDtlPenyimpanan,
        idPenyimpanan: dtl.idPenyimpanan,
        storageName: storage?.namaPenyimpanan || "-",
      };
    });
    setRoomStorageData(storageList);
  };

  // Add Storage handlers
  const handleAddStorageClick = () => {
    setNewStorage({ idPenyimpanan: "" });
    setAddStorageModalOpen(true);
  };

  const handleAddStorageClose = () => {
    setAddStorageModalOpen(false);
  };

  const handleAddStorageSave = async () => {
    if (!newStorage.idPenyimpanan) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlRuanganPenyimpanan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          idRuangan: parseInt(id),
          idPenyimpanan: parseInt(newStorage.idPenyimpanan),
        }),
      });
      if (response.ok) {
        await fetchDtlRuanganPenyimpanan();
        handleAddStorageClose();
        showSuccess("Storage added successfully!");
      } else {
        alert("Failed to add storage");
      }
    } catch (error) {
      console.error("Error adding storage:", error);
      alert("Failed to add storage");
    }
  };

  // Edit Storage handlers
  const handleEditStorageClick = (item) => {
    setEditStorageItem({ ...item });
    setEditStorageModalOpen(true);
  };

  const handleEditStorageClose = () => {
    setEditStorageModalOpen(false);
    setTimeout(() => {
      setEditStorageItem(null);
    }, 300);
  };

  const handleEditStorageSave = async () => {
    if (!editStorageItem) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlRuanganPenyimpanan`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          idDtlPenyimpanan: editStorageItem.idDtlPenyimpanan,
          idRuangan: parseInt(id),
          idPenyimpanan: parseInt(editStorageItem.idPenyimpanan),
        }),
      });
      if (response.ok) {
        await fetchDtlRuanganPenyimpanan();
        handleEditStorageClose();
        showSuccess("Storage updated successfully!");
      } else {
        alert("Failed to update storage");
      }
    } catch (error) {
      console.error("Error updating storage:", error);
      alert("Failed to update storage");
    }
  };

  // Delete Storage handlers
  const handleDeleteClick = (item) => {
    setDeleteStorageItem(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setTimeout(() => setDeleteStorageItem(null), 300);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteStorageItem) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlRuanganPenyimpanan/${deleteStorageItem.idDtlPenyimpanan}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        await fetchDtlRuanganPenyimpanan();
        handleDeleteClose();
        showSuccess("Storage removed successfully!");
      } else {
        alert("Failed to remove storage");
      }
    } catch (error) {
      console.error("Error removing storage:", error);
      alert("Failed to remove storage");
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

  const filteredData = roomStorageData.filter((item) => {
    const search = searchTerm.trim().toLowerCase();
    return !search || item.storageName?.toLowerCase().includes(search);
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (!orderBy) return 0;
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  const handleBackToRoom = () => {
    navigate("/room");
  };

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Room's Storage
        </Typography>
        <Typography variant="body2" color={colors.gray[300]}>
          Dashboard - Room's Storage
        </Typography>
      </Box>

      {/* Room Name Header with Buttons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} p={2} bgcolor="#f8fafc" borderRadius={1}>
        <Typography variant="h4" fontWeight="bold" color="#1f2937">
          {room?.namaRuangan || "Loading..."}
        </Typography>
        <Box display="flex" gap={1}>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddStorageClick}
            sx={{ backgroundColor: "#3b82f6", "&:hover": { backgroundColor: "#2563eb" }, textTransform: "none" }}
          >
            Add Storage
          </Button>
          <Button
            variant="contained"
            onClick={handleBackToRoom}
            sx={{ backgroundColor: "#1f2937", "&:hover": { backgroundColor: "#111827" }, textTransform: "none" }}
          >
            Back To Room
          </Button>
        </Box>
      </Box>

      {/* Entries and Search */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
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
      <TableContainer component={Paper} sx={{ backgroundColor: colors.primary[400] }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", cursor: "pointer", userSelect: "none" }}
                onClick={() => handleSort("no")}
              >
                <Box display="flex" alignItems="center" justifyContent="center" gap={0.5}>
                  No
                  <Box display="flex" flexDirection="column" sx={{ fontSize: "8px", lineHeight: 0.8, ml: 0.5 }}>
                    <span style={{ color: orderBy === "no" && order === "asc" ? "#000" : "rgba(0,0,0,0.3)" }}>▲</span>
                    <span style={{ color: orderBy === "no" && order === "desc" ? "#000" : "rgba(0,0,0,0.3)" }}>▼</span>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", cursor: "pointer", userSelect: "none" }}
                onClick={() => handleSort("storageName")}
              >
                <Box display="flex" alignItems="center" gap={0.5}>
                  Storage
                  <Box display="flex" flexDirection="column" sx={{ fontSize: "8px", lineHeight: 0.8, ml: 0.5 }}>
                    <span style={{ color: orderBy === "storageName" && order === "asc" ? "#000" : "rgba(0,0,0,0.3)" }}>▲</span>
                    <span style={{ color: orderBy === "storageName" && order === "desc" ? "#000" : "rgba(0,0,0,0.3)" }}>▼</span>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                <Box display="flex" alignItems="center" justifyContent="center" gap={0.5}>
                  Action
                  <Box display="flex" flexDirection="column" sx={{ fontSize: "8px", lineHeight: 0.8, ml: 0.5 }}>
                    <span style={{ color: "rgba(0,0,0,0.3)" }}>▲</span>
                    <span style={{ color: "rgba(0,0,0,0.3)" }}>▼</span>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} align="center">Loading...</TableCell>
              </TableRow>
            ) : sortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">No data available</TableCell>
              </TableRow>
            ) : (
              sortedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow key={item.idDtlPenyimpanan} hover>
                    <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{item.storageName}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" gap={0.5} justifyContent="center">
                        <IconButton
                          size="small"
                          sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 28, height: 28 }}
                          onClick={() => handleEditStorageClick(item)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{ backgroundColor: "#ef4444", color: "#fff", "&:hover": { backgroundColor: "#dc2626" }, width: 28, height: 28 }}
                          onClick={() => handleDeleteClick(item)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Info */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Typography>
          Showing {sortedData.length === 0 ? 0 : page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, sortedData.length)} of {sortedData.length} {sortedData.length === 1 ? "entry" : "entries"}
        </Typography>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </Box>

      {/* Add Storage Modal */}
      <Dialog 
        open={addStorageModalOpen} 
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleAddStorageClose();
          }
        }} 
        maxWidth="sm" 
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Add Storage to {room?.namaRuangan}</Typography>
          <IconButton onClick={handleAddStorageClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2} pt={1}>
            <Box>
              <Typography variant="body2" mb={0.5}>Storage <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={newStorage.idPenyimpanan}
                  onChange={(e) => setNewStorage({ idPenyimpanan: e.target.value })}
                  displayEmpty
                >
                  <MenuItem value="">--Select Storage--</MenuItem>
                  {allStorages.map((storage) => (
                    <MenuItem key={storage.idPenyimpanan} value={storage.idPenyimpanan}>
                      {storage.namaPenyimpanan}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
          <Button
            onClick={handleAddStorageSave}
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
            onClick={handleAddStorageClose}
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

      {/* Edit Storage Modal */}
      <Dialog 
        open={editStorageModalOpen} 
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleEditStorageClose();
          }
        }} 
        maxWidth="sm" 
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Edit Storage</Typography>
          <IconButton onClick={handleEditStorageClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {editStorageItem && (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box>
                <Typography variant="body2" mb={0.5}>Storage <span style={{ color: "red" }}>*</span></Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={editStorageItem.idPenyimpanan}
                    onChange={(e) => setEditStorageItem({ ...editStorageItem, idPenyimpanan: e.target.value })}
                  >
                    {allStorages.map((storage) => (
                      <MenuItem key={storage.idPenyimpanan} value={storage.idPenyimpanan}>
                        {storage.namaPenyimpanan}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
          <Button
            onClick={handleEditStorageSave}
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
            onClick={handleEditStorageClose}
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
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Are you sure you want to delete this storage?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            You can't undo this action!
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

export default RoomStorage;

