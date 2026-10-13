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
  FormControl,
  Select,
  MenuItem,
  Avatar,
} from "@mui/material";
import { tokens } from "../../theme";
import { Add, Edit, Delete, Close, Warning } from "@mui/icons-material";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const User = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Add Modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    idPengguna: "",
    namaPengguna: "",
    emailPengguna: "",
    usernamePengguna: "",
    passwordPengguna: "",
    rolePengguna: "",
    mainJob: "",
    otherJob: "",
    foto: "",
    statusPengguna: "Aktif",
  });
  const [addFile, setAddFile] = useState(null);
  const [addFilePreview, setAddFilePreview] = useState(null);

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [editFile, setEditFile] = useState(null);
  const [editFilePreview, setEditFilePreview] = useState(null);

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteUser, setDeleteUser] = useState(null);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Pengguna`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setUsers(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get user photo URL
  const getUserPhoto = (foto, idPengguna) => {
    if (foto) {
      return `/src/assets/User/${foto}`;
    }
    return `/src/assets/User/${idPengguna}.png`;
  };

  // Add handlers
  const handleAddClick = () => {
    setNewUser({
      idPengguna: "",
      namaPengguna: "",
      emailPengguna: "",
      usernamePengguna: "",
      passwordPengguna: "",
      rolePengguna: "",
      mainJob: "",
      otherJob: "",
      foto: "",
      statusPengguna: "Aktif",
    });
    setAddFile(null);
    setAddFilePreview(null);
    setAddModalOpen(true);
  };

  const handleAddClose = () => {
    setAddModalOpen(false);
    setTimeout(() => {
      setAddFile(null);
      setAddFilePreview(null);
    }, 300);
  };

  const handleAddFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAddFile(file);
      setNewUser({ ...newUser, foto: file.name });
      const reader = new FileReader();
      reader.onloadend = () => setAddFilePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddSave = async () => {
    if (!newUser.idPengguna || !newUser.namaPengguna || !newUser.emailPengguna) {
      alert("NPK, Name, and Email are required");
      return;
    }
    try {
      const createData = {
        idPengguna: newUser.idPengguna,
        namaPengguna: newUser.namaPengguna,
        emailPengguna: newUser.emailPengguna,
        usernamePengguna: newUser.usernamePengguna || newUser.emailPengguna,
        passwordPengguna: newUser.passwordPengguna || "password123",
        rolePengguna: newUser.rolePengguna,
        mainJob: newUser.mainJob,
        otherJob: newUser.otherJob,
        foto: newUser.foto,
        statusPengguna: newUser.statusPengguna || "Aktif",
        createdBy: "1",
      };
      const response = await fetch(`${API_BASE_URL}/api/Pengguna`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(createData),
      });
      if (response.ok) {
        fetchUsers();
        handleAddClose();
        showSuccess("User added successfully!");
      } else {
        alert("Failed to add user");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user");
    }
  };

  // Edit handlers
  const handleEditClick = (user) => {
    setEditUser({ ...user });
    setEditFile(null);
    setEditFilePreview(null);
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setTimeout(() => {
      setEditUser(null);
      setEditFile(null);
      setEditFilePreview(null);
    }, 300);
  };

  const handleEditFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditFile(file);
      setEditUser({ ...editUser, foto: file.name });
      const reader = new FileReader();
      reader.onloadend = () => setEditFilePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleEditSave = async () => {
    if (!editUser.namaPengguna || !editUser.emailPengguna) {
      alert("Name and Email are required");
      return;
    }
    try {
      const updateData = {
        idPengguna: editUser.idPengguna,
        namaPengguna: editUser.namaPengguna,
        emailPengguna: editUser.emailPengguna,
        usernamePengguna: editUser.usernamePengguna,
        rolePengguna: editUser.rolePengguna,
        mainJob: editUser.mainJob,
        otherJob: editUser.otherJob,
        foto: editUser.foto,
        statusPengguna: editUser.statusPengguna,
        modifiedBy: "1",
      };
      const response = await fetch(`${API_BASE_URL}/api/Pengguna`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(updateData),
      });
      if (response.ok) {
        fetchUsers();
        handleEditClose();
        showSuccess("User updated successfully!");
      } else {
        alert("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    }
  };

  // Delete handlers
  const handleDeleteClick = (user) => {
    setDeleteUser(user);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setTimeout(() => setDeleteUser(null), 300);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Pengguna/${deleteUser.idPengguna}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchUsers();
        handleDeleteClose();
        showSuccess("User deleted successfully!");
      } else {
        alert("Failed to delete user");
        handleDeleteClose();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
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

  const filteredUsers = users.filter((user) => {
    const search = searchTerm.trim().toLowerCase();
    return !search ||
      user.namaPengguna?.toLowerCase().includes(search) ||
      user.idPengguna?.toLowerCase().includes(search) ||
      user.emailPengguna?.toLowerCase().includes(search);
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!orderBy) return 0;
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  const columns = [
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "idPengguna", label: "NPK", sortable: true, align: "center" },
    { id: "namaPengguna", label: "Name", sortable: true, align: "left" },
    { id: "emailPengguna", label: "Email", sortable: true, align: "left" },
    { id: "rolePengguna", label: "Role", sortable: true, align: "center" },
    { id: "mainJob", label: "Main Job", sortable: true, align: "left" },
    { id: "otherJob", label: "Other Job", sortable: true, align: "left" },
    { id: "action", label: "Action", sortable: false, align: "center" },
  ];

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>User</Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAddClick}
          sx={{ backgroundColor: "#3b82f6", "&:hover": { backgroundColor: "#2563eb" } }}>
          Add User
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
                <TableRow><TableCell colSpan={8} align="center">Loading...</TableCell></TableRow>
              ) : sortedUsers.length === 0 ? (
                <TableRow><TableCell colSpan={8} align="center">No data available</TableCell></TableRow>
              ) : (
                sortedUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                  <TableRow key={user.idPengguna} hover>
                    <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell align="center">{user.idPengguna}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar
                          src={getUserPhoto(user.foto, user.idPengguna)}
                          alt={user.namaPengguna}
                          sx={{ width: 35, height: 35 }}
                          onError={(e) => { e.target.src = "/src/assets/images/avatar.png"; }}
                        />
                        {user.namaPengguna}
                      </Box>
                    </TableCell>
                    <TableCell>{user.emailPengguna}</TableCell>
                    <TableCell align="center">{user.rolePengguna}</TableCell>
                    <TableCell>{user.mainJob}</TableCell>
                    <TableCell>{user.otherJob}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" gap={0.5} justifyContent="center">
                        <IconButton size="small" onClick={() => handleEditClick(user)}
                          sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 30, height: 30 }}>
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleDeleteClick(user)}
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
          <Typography>Showing {sortedUsers.length === 0 ? 0 : page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, sortedUsers.length)} of {sortedUsers.length} entries</Typography>
          <TablePagination rowsPerPageOptions={[10, 25, 50]} component="div" count={sortedUsers.length}
            rowsPerPage={rowsPerPage} page={page} onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }} />
        </Box>
      </Paper>

      {/* Add Modal */}
      <Dialog open={addModalOpen} onClose={(e, r) => r !== 'backdropClick' && handleAddClose()} maxWidth="sm" fullWidth disableEscapeKeyDown>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Add User</Typography>
          <IconButton onClick={handleAddClose} size="small"><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2} pt={1}>
            <Box>
              <Typography variant="body2" mb={0.5}>NPK <span style={{ color: "red" }}>*</span></Typography>
              <TextField placeholder="NPK" value={newUser.idPengguna}
                onChange={(e) => setNewUser({ ...newUser, idPengguna: e.target.value })} fullWidth size="small" />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Name <span style={{ color: "red" }}>*</span></Typography>
              <TextField placeholder="Name" value={newUser.namaPengguna}
                onChange={(e) => setNewUser({ ...newUser, namaPengguna: e.target.value })} fullWidth size="small" />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Email <span style={{ color: "red" }}>*</span></Typography>
              <TextField placeholder="Email" value={newUser.emailPengguna}
                onChange={(e) => setNewUser({ ...newUser, emailPengguna: e.target.value })} fullWidth size="small" />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Role <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select value={newUser.rolePengguna} onChange={(e) => setNewUser({ ...newUser, rolePengguna: e.target.value })} displayEmpty>
                  <MenuItem value="">--Role--</MenuItem>
                  <MenuItem value="Koordinator UPT">Koordinator UPT</MenuItem>
                  <MenuItem value="PIC LAB">PIC LAB</MenuItem>
                  <MenuItem value="PIC Asset & Non Asset">PIC Asset & Non Asset</MenuItem>
                  <MenuItem value="PIC Non Asset">PIC Non Asset</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Main Job <span style={{ color: "red" }}>*</span></Typography>
              <TextField placeholder="Main Job" value={newUser.mainJob}
                onChange={(e) => setNewUser({ ...newUser, mainJob: e.target.value })} fullWidth size="small" />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Other Job <span style={{ color: "red" }}>*</span></Typography>
              <TextField placeholder="Other Job" value={newUser.otherJob}
                onChange={(e) => setNewUser({ ...newUser, otherJob: e.target.value })} fullWidth size="small" />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>User Photos <span style={{ color: "red" }}>*</span></Typography>
              <Box sx={{ display: "flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.23)", borderRadius: 1, overflow: "hidden" }}>
                <Button variant="contained" component="label" size="small"
                  sx={{ borderRadius: 0, backgroundColor: "#e0e0e0", color: "#333", "&:hover": { backgroundColor: "#d0d0d0" } }}>
                  Choose File
                  <input type="file" hidden accept="image/*" onChange={handleAddFileChange} />
                </Button>
                <Typography variant="body2" sx={{ ml: 2, color: "rgba(255,255,255,0.5)" }}>
                  {addFile ? addFile.name : "No file chosen"}
                </Typography>
              </Box>
              {addFilePreview && (
                <Box mt={2}><img src={addFilePreview} alt="Preview" style={{ maxWidth: "100%", maxHeight: 150, objectFit: "contain", borderRadius: 4 }} /></Box>
              )}
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
          <Typography variant="h5" fontWeight="bold">Edit User</Typography>
          <IconButton onClick={handleEditClose} size="small"><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {editUser && (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box>
                <Typography variant="body2" mb={0.5}>Name <span style={{ color: "red" }}>*</span></Typography>
                <TextField value={editUser.namaPengguna || ""}
                  onChange={(e) => setEditUser({ ...editUser, namaPengguna: e.target.value })} fullWidth size="small" />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Email <span style={{ color: "red" }}>*</span></Typography>
                <TextField value={editUser.emailPengguna || ""}
                  onChange={(e) => setEditUser({ ...editUser, emailPengguna: e.target.value })} fullWidth size="small" />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Role <span style={{ color: "red" }}>*</span></Typography>
                <TextField value={editUser.rolePengguna || ""}
                  onChange={(e) => setEditUser({ ...editUser, rolePengguna: e.target.value })} fullWidth size="small" />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Main Job <span style={{ color: "red" }}>*</span></Typography>
                <TextField value={editUser.mainJob || ""}
                  onChange={(e) => setEditUser({ ...editUser, mainJob: e.target.value })} fullWidth size="small" />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Other Job <span style={{ color: "red" }}>*</span></Typography>
                <TextField value={editUser.otherJob || ""}
                  onChange={(e) => setEditUser({ ...editUser, otherJob: e.target.value })} fullWidth size="small" />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>User Photos</Typography>
                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.23)", borderRadius: 1, overflow: "hidden" }}>
                  <Button variant="contained" component="label" size="small"
                    sx={{ borderRadius: 0, backgroundColor: "#e0e0e0", color: "#333", "&:hover": { backgroundColor: "#d0d0d0" } }}>
                    Choose File
                    <input type="file" hidden accept="image/*" onChange={handleEditFileChange} />
                  </Button>
                  <Typography variant="body2" sx={{ ml: 2, color: "rgba(255,255,255,0.5)" }}>
                    {editFile ? editFile.name : "No file chosen"}
                  </Typography>
                </Box>
                {editFilePreview ? (
                  <Box mt={2}><img src={editFilePreview} alt="Preview" style={{ maxWidth: "100%", maxHeight: 150, objectFit: "contain", borderRadius: 4 }} /></Box>
                ) : editUser.foto && (
                  <Box mt={2}>
                    <img src={getUserPhoto(editUser.foto, editUser.idPengguna)} alt="Current"
                      style={{ maxWidth: "100%", maxHeight: 150, objectFit: "contain", borderRadius: 4 }}
                      onError={(e) => { e.target.style.display = 'none'; }} />
                  </Box>
                )}
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

export default User;

