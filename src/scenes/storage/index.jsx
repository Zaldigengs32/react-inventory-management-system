import { useState, useEffect } from "react";
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
} from "@mui/material";
import { tokens } from "../../theme";
import { Add, Edit, Delete, Close, Warning } from "@mui/icons-material";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const Storage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [storages, setStorages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Add Modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newStorage, setNewStorage] = useState({
    namaPenyimpanan: "",
    statusPenyimpanan: "Aktif",
  });

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editStorage, setEditStorage] = useState(null);

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteStorage, setDeleteStorage] = useState(null);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchStorages();
  }, []);

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
    } finally {
      setLoading(false);
    }
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  // Add handlers
  const handleAddClick = () => {
    setNewStorage({ namaPenyimpanan: "", statusPenyimpanan: "Aktif" });
    setAddModalOpen(true);
  };

  const handleAddClose = () => {
    setAddModalOpen(false);
  };

  const handleAddSave = async () => {
    if (!newStorage.namaPenyimpanan.trim()) {
      alert("Storage Name is required");
      return;
    }
    try {
      const createData = {
        namaPenyimpanan: newStorage.namaPenyimpanan,
        statusPenyimpanan: newStorage.statusPenyimpanan || "Aktif",
        createdBy: "1",
      };
      const response = await fetch(`${API_BASE_URL}/api/Penyimpanan`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(createData),
      });
      if (response.ok) {
        fetchStorages();
        handleAddClose();
        showSuccess("Storage added successfully!");
      } else {
        alert("Failed to add storage");
      }
    } catch (error) {
      console.error("Error adding storage:", error);
      alert("Failed to add storage");
    }
  };

  // Edit handlers
  const handleEditClick = (storage) => {
    setEditStorage({ ...storage });
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setTimeout(() => setEditStorage(null), 300);
  };

  const handleEditSave = async () => {
    if (!editStorage.namaPenyimpanan.trim()) {
      alert("Storage Name is required");
      return;
    }
    try {
      const updateData = {
        idPenyimpanan: editStorage.idPenyimpanan,
        namaPenyimpanan: editStorage.namaPenyimpanan,
        statusPenyimpanan: editStorage.statusPenyimpanan || "Aktif",
        modifiedBy: "1",
      };
      const response = await fetch(`${API_BASE_URL}/api/Penyimpanan`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(updateData),
      });
      if (response.ok) {
        fetchStorages();
        handleEditClose();
        showSuccess("Storage updated successfully!");
      } else {
        alert("Failed to update storage");
      }
    } catch (error) {
      console.error("Error updating storage:", error);
      alert("Failed to update storage");
    }
  };

  // Delete handlers
  const handleDeleteClick = (storage) => {
    setDeleteStorage(storage);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setTimeout(() => setDeleteStorage(null), 300);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Penyimpanan/${deleteStorage.idPenyimpanan}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchStorages();
        handleDeleteClose();
        showSuccess("Storage deleted successfully!");
      } else {
        alert("Failed to delete storage. It may be linked to other data.");
        handleDeleteClose();
      }
    } catch (error) {
      console.error("Error deleting storage:", error);
      alert("Failed to delete storage");
      handleDeleteClose();
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

  const filteredStorages = storages.filter((storage) => {
    const search = searchTerm.trim().toLowerCase();
    return !search || storage.namaPenyimpanan?.toLowerCase().includes(search);
  });

  const sortedStorages = [...filteredStorages].sort((a, b) => {
    if (!orderBy) return 0;
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  const columns = [
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "namaPenyimpanan", label: "Storage Name", sortable: true, align: "left" },
    { id: "action", label: "Action", sortable: false, align: "center" },
  ];

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>Storage</Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAddClick}
          sx={{ backgroundColor: "#3b82f6", "&:hover": { backgroundColor: "#2563eb" } }}>
          Add Storage
        </Button>
      </Box>

      {/* Table with Entries, Search and Pagination in same Paper */}
      <Paper sx={{ backgroundColor: colors.primary[400], borderRadius: "8px", overflow: "hidden" }}>
        {/* Entries and Search */}
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <TextField size="small" type="number" value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))} sx={{ width: 60 }} />
            <Typography>entries per page</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography>Search:</Typography>
            <TextField size="small" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} sx={{ width: 200 }} />
          </Box>
        </Box>

        {/* Table */}
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || "left"}
                  sx={{ fontWeight: "bold", cursor: column.sortable ? "pointer" : "default", userSelect: "none" }}
                  onClick={() => column.sortable && handleSort(column.id)}>
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
              <TableRow><TableCell colSpan={3} align="center">Loading...</TableCell></TableRow>
            ) : sortedStorages.length === 0 ? (
              <TableRow><TableCell colSpan={3} align="center">No data available</TableCell></TableRow>
            ) : (
              sortedStorages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((storage, index) => (
                <TableRow key={storage.idPenyimpanan} hover>
                  <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>{storage.namaPenyimpanan}</TableCell>
                  <TableCell align="center">
                    <Box display="flex" gap={0.5} justifyContent="center">
                      <IconButton size="small" onClick={() => handleEditClick(storage)}
                        sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 30, height: 30 }}>
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDeleteClick(storage)}
                        sx={{ backgroundColor: "#ef4444", color: "#fff", "&:hover": { backgroundColor: "#dc2626" }, width: 30, height: 30 }}>
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

      {/* Pagination inside Paper */}
      <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1.5}>
        <Typography>Showing {sortedStorages.length === 0 ? 0 : page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, sortedStorages.length)} of {sortedStorages.length} entries</Typography>
        <TablePagination rowsPerPageOptions={[10, 25, 50]} component="div" count={sortedStorages.length}
          rowsPerPage={rowsPerPage} page={page} onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }} />
      </Box>
    </Paper>

      {/* Add Modal */}
      <Dialog open={addModalOpen} onClose={(e, r) => r !== 'backdropClick' && handleAddClose()} maxWidth="sm" fullWidth disableEscapeKeyDown>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Add Storage</Typography>
          <IconButton onClick={handleAddClose} size="small"><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2} pt={1}>
            <Box>
              <Typography variant="body2" mb={0.5}>Storage Name <span style={{ color: "red" }}>*</span></Typography>
              <TextField placeholder="Storage Name" value={newStorage.namaPenyimpanan}
                onChange={(e) => setNewStorage({ ...newStorage, namaPenyimpanan: e.target.value })} fullWidth size="small" />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
          <Button onClick={handleAddSave} variant="contained"
            sx={{ backgroundColor: "#5b7cfa", "&:hover": { backgroundColor: "#4a6ae8" }, minWidth: 120, borderRadius: "25px", textTransform: "none", fontSize: "16px", py: 1.5 }}>Add</Button>
          <Button onClick={handleAddClose} variant="contained"
            sx={{ backgroundColor: "#e8e8e8", color: "#666", "&:hover": { backgroundColor: "#d8d8d8" }, minWidth: 120, borderRadius: "25px", textTransform: "none", fontSize: "16px", py: 1.5 }}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onClose={(e, r) => r !== 'backdropClick' && handleEditClose()} maxWidth="sm" fullWidth disableEscapeKeyDown>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Edit Storage</Typography>
          <IconButton onClick={handleEditClose} size="small"><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {editStorage && (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box>
                <Typography variant="body2" mb={0.5}>Storage Name <span style={{ color: "red" }}>*</span></Typography>
                <TextField value={editStorage.namaPenyimpanan || ""}
                  onChange={(e) => setEditStorage({ ...editStorage, namaPenyimpanan: e.target.value })} fullWidth size="small" />
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
          <Button onClick={handleEditSave} variant="contained"
            sx={{ backgroundColor: "#5b7cfa", "&:hover": { backgroundColor: "#4a6ae8" }, minWidth: 120, borderRadius: "25px", textTransform: "none", fontSize: "16px", py: 1.5 }}>Update</Button>
          <Button onClick={handleEditClose} variant="contained"
            sx={{ backgroundColor: "#e8e8e8", color: "#666", "&:hover": { backgroundColor: "#d8d8d8" }, minWidth: 120, borderRadius: "25px", textTransform: "none", fontSize: "16px", py: 1.5 }}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={deleteModalOpen} onClose={(e, r) => r !== 'backdropClick' && handleDeleteClose()} maxWidth="xs" fullWidth disableEscapeKeyDown>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Warning sx={{ fontSize: 80, color: "#ff9800", mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>Are you sure you want to delete data?</Typography>
          <Typography variant="body1" color="textSecondary">You can't return this!</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
          <Button onClick={handleDeleteConfirm} variant="contained" sx={{ backgroundColor: "#2196f3", "&:hover": { backgroundColor: "#1976d2" } }}>Yes, Delete</Button>
          <Button onClick={handleDeleteClose} variant="contained" sx={{ backgroundColor: "#f44336", "&:hover": { backgroundColor: "#d32f2f" } }}>Cancel</Button>
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

export default Storage;

