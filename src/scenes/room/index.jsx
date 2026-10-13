import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";
import { 
  Add, 
  Visibility, 
  Edit, 
  Delete, 
  Close,
  ViewList,
  Warning,
} from "@mui/icons-material";

const API_BASE_URL = "https://localhost:7130";

const Room = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [storages, setStorages] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [dtlRuanganPenyimpanan, setDtlRuanganPenyimpanan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Add Modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newRoom, setNewRoom] = useState({
    namaRuangan: "",
    picRuangan: "",
    statusRuangan: "Aktif",
  });

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editRoom, setEditRoom] = useState(null);

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteRoom, setDeleteRoom] = useState(null);

  // View Modal (Detail Storage)
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [viewRoom, setViewRoom] = useState(null);
  const [detailStorageData, setDetailStorageData] = useState([]);
  const [detailPage, setDetailPage] = useState(0);
  const [detailRowsPerPage, setDetailRowsPerPage] = useState(10);
  const [detailSearchTerm, setDetailSearchTerm] = useState("");

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  useEffect(() => {
    fetchRooms();
    fetchUsers();
    fetchStorages();
    fetchInventory();
    fetchDtlRuanganPenyimpanan();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setRooms(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setLoading(false);
    }
  };

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

  const fetchInventory = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Barang`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setInventory(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
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
    }
  };

  // Get PIC name from idPengguna
  const getPicName = (picRuangan) => {
    const user = users.find(u => String(u.idPengguna) === String(picRuangan));
    return user?.namaPengguna || "-";
  };

  // Get Storage name from idPenyimpanan
  const getStorageName = (idPenyimpanan) => {
    const storage = storages.find(s => s.idPenyimpanan === idPenyimpanan);
    return storage?.namaPenyimpanan || "-";
  };

  // Get Inventory name from idBarang
  const getInventoryName = (idBarang) => {
    const item = inventory.find(i => i.idBarang === idBarang);
    return item?.namaBarang || "-";
  };

  // Get Inventory total from idBarang
  const getInventoryTotal = (idBarang) => {
    const item = inventory.find(i => i.idBarang === idBarang);
    if (item) {
      return `${item.jumlahBarang} ${item.satuanBarang || "Pcs"}`;
    }
    return "-";
  };

  // Add handlers
  const handleAddClick = () => {
    setNewRoom({
      namaRuangan: "",
      picRuangan: "",
      statusRuangan: "Aktif",
    });
    setAddModalOpen(true);
  };

  const handleAddClose = () => {
    setAddModalOpen(false);
  };

  const handleAddChange = (field, value) => {
    setNewRoom(prev => ({ ...prev, [field]: value }));
  };

  const handleAddSave = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify(newRoom),
      });
      if (response.ok) {
        fetchRooms();
        handleAddClose();
        showSuccess("Room added successfully!");
      } else {
        alert("Failed to add room");
      }
    } catch (error) {
      console.error("Error adding room:", error);
      alert("Failed to add room");
    }
  };

  // Edit handlers
  const handleEditClick = (room) => {
    setEditRoom({ ...room });
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setTimeout(() => {
      setEditRoom(null);
    }, 300);
  };

  const handleEditChange = (field, value) => {
    setEditRoom(prev => ({ ...prev, [field]: value }));
  };

  const handleEditSave = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify(editRoom),
      });
      if (response.ok) {
        fetchRooms();
        handleEditClose();
        showSuccess("Room updated successfully!");
      } else {
        alert("Failed to update room");
      }
    } catch (error) {
      console.error("Error updating room:", error);
      alert("Failed to update room");
    }
  };

  // Delete handlers
  const handleDeleteClick = (room) => {
    setDeleteRoom(room);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setTimeout(() => {
      setDeleteRoom(null);
    }, 300);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan/${deleteRoom.idRuangan}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchRooms();
        handleDeleteClose();
        showSuccess("Room deleted successfully!");
      } else {
        alert("Failed to delete room");
      }
    } catch (error) {
      console.error("Error deleting room:", error);
      alert("Failed to delete room");
    }
  };

  // View handlers (Detail Storage)
  const handleViewClick = (room) => {
    setViewRoom(room);
    setDetailPage(0);
    setDetailSearchTerm("");
    
    // Get detail storage data for this room
    const roomDtl = dtlRuanganPenyimpanan.filter(d => d.idRuangan === room.idRuangan);
    
    // Group by storage and get inventory items
    const storageMap = new Map();
    roomDtl.forEach(dtl => {
      const storageName = getStorageName(dtl.idPenyimpanan);
      
      // Find inventory items that belong to this dtlPenyimpanan
      const items = inventory.filter(inv => inv.idDtlPenyimpanan === dtl.idDtlPenyimpanan);
      
      items.forEach(item => {
        storageMap.set(`${dtl.idPenyimpanan}-${item.idBarang}`, {
          idPenyimpanan: dtl.idPenyimpanan,
          storageName,
          inventoryName: item.namaBarang,
          totalItem: `${item.jumlahBarang} ${item.satuanBarang || "Pcs"}`,
        });
      });
      
      // If no items, still show the storage
      if (items.length === 0) {
        if (!storageMap.has(`${dtl.idPenyimpanan}-empty`)) {
          storageMap.set(`${dtl.idPenyimpanan}-empty`, {
            idPenyimpanan: dtl.idPenyimpanan,
            storageName,
            inventoryName: "-",
            totalItem: "-",
          });
        }
      }
    });
    
    setDetailStorageData(Array.from(storageMap.values()));
    setViewModalOpen(true);
  };

  const handleViewClose = () => {
    setViewModalOpen(false);
    setTimeout(() => {
      setViewRoom(null);
      setDetailStorageData([]);
    }, 300);
  };

  // Room's Storage handler (icon biru) - navigate to page
  const handleRoomStorageClick = (room) => {
    navigate(`/room-storage/${room.idRuangan}`);
  };

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(columnId);
      setOrder("asc");
    }
  };

  const filteredRooms = rooms.filter((room) => {
    const search = searchTerm.trim().toLowerCase();
    const picName = getPicName(room.picRuangan).toLowerCase();
    return !search || 
           room.namaRuangan?.toLowerCase().includes(search) ||
           picName.includes(search);
  });

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (!orderBy) return 0;
    
    let aVal = a[orderBy] ?? "";
    let bVal = b[orderBy] ?? "";
    
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    
    if (order === "asc") {
      return aVal.localeCompare(bVal);
    } else {
      return bVal.localeCompare(aVal);
    }
  });

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columns = [
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "namaRuangan", label: "Room Name", sortable: true, align: "left" },
    { id: "picRuangan", label: "Room's PIC", sortable: true, align: "left" },
    { id: "action", label: "Action", sortable: false, align: "center" },
  ];

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Room
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddClick}
          sx={{
            backgroundColor: "#3b82f6",
            "&:hover": { backgroundColor: "#2563eb" },
          }}
        >
          Add Room
        </Button>
      </Box>

      {/* Table with Entries, Search and Pagination in same Paper */}
      <Paper sx={{ backgroundColor: colors.primary[400], borderRadius: "8px", overflow: "hidden" }}>
        {/* Entries and Search */}
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
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
                  <TableCell colSpan={4} align="center">Loading...</TableCell>
                </TableRow>
              ) : sortedRooms.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">No data available</TableCell>
                </TableRow>
              ) : (
                sortedRooms
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((room, index) => (
                    <TableRow key={room.idRuangan} hover>
                      <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>{room.namaRuangan}</TableCell>
                      <TableCell>{getPicName(room.picRuangan)}</TableCell>
                      <TableCell align="center">
                        <Box display="flex" gap={0.5} justifyContent="center">
                          <IconButton 
                            size="small" 
                            sx={{ backgroundColor: "#22c55e", color: "#fff", "&:hover": { backgroundColor: "#16a34a" }, width: 30, height: 30 }}
                            onClick={() => handleViewClick(room)}
                          >
                            <Visibility fontSize="small" />
                          </IconButton>
                          <IconButton 
                            size="small" 
                            sx={{ backgroundColor: "#3b82f6", color: "#fff", "&:hover": { backgroundColor: "#2563eb" }, width: 30, height: 30 }}
                            onClick={() => handleRoomStorageClick(room)}
                          >
                            <ViewList fontSize="small" />
                          </IconButton>
                          <IconButton 
                            size="small" 
                            sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 30, height: 30 }}
                            onClick={() => handleEditClick(room)}
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton 
                            size="small" 
                            sx={{ backgroundColor: "#ef4444", color: "#fff", "&:hover": { backgroundColor: "#dc2626" }, width: 30, height: 30 }}
                            onClick={() => handleDeleteClick(room)}
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

        {/* Pagination inside Paper */}
        <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1.5}>
          <Typography>
            Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, sortedRooms.length)} of {sortedRooms.length} entries
          </Typography>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={sortedRooms.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Paper>

      {/* Add Modal */}
      <Dialog 
        open={addModalOpen} 
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleAddClose();
          }
        }} 
        maxWidth="sm" 
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Add Room</Typography>
          <IconButton onClick={handleAddClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2} pt={1}>
            <Box>
              <Typography variant="body2" mb={0.5}>Room Name <span style={{ color: "red" }}>*</span></Typography>
              <TextField
                placeholder="Room Name"
                value={newRoom.namaRuangan}
                onChange={(e) => handleAddChange("namaRuangan", e.target.value)}
                fullWidth
                size="small"
              />
            </Box>
            <Box>
              <Typography variant="body2" mb={0.5}>Room's PIC <span style={{ color: "red" }}>*</span></Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={newRoom.picRuangan}
                  onChange={(e) => handleAddChange("picRuangan", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">--Select PIC--</MenuItem>
                  {users.map((user) => (
                    <MenuItem key={user.idPengguna} value={String(user.idPengguna)}>
                      {user.namaPengguna}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "center", gap: 2 }}>
          <Button 
            onClick={handleAddSave} 
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
              py: 1.5
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog 
        open={editModalOpen} 
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleEditClose();
          }
        }} 
        maxWidth="sm" 
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Edit Room</Typography>
          <IconButton onClick={handleEditClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {editRoom && (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box>
                <Typography variant="body2" mb={0.5}>Room Name <span style={{ color: "red" }}>*</span></Typography>
                <TextField
                  value={editRoom.namaRuangan || ""}
                  onChange={(e) => handleEditChange("namaRuangan", e.target.value)}
                  fullWidth
                  size="small"
                />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Room's PIC <span style={{ color: "red" }}>*</span></Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={editRoom.picRuangan || ""}
                    onChange={(e) => handleEditChange("picRuangan", e.target.value)}
                  >
                    {users.map((user) => (
                      <MenuItem key={user.idPengguna} value={String(user.idPengguna)}>
                        {user.namaPengguna}
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
            onClick={handleEditSave} 
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
              py: 1.5
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Modal - Detail Storage */}
      <Dialog 
        open={viewModalOpen} 
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleViewClose();
          }
        }} 
        maxWidth="md" 
        fullWidth
        disableEscapeKeyDown
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Detail Storage</Typography>
          <IconButton onClick={handleViewClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {/* Entries and Search */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <TextField
                size="small"
                type="number"
                value={detailRowsPerPage}
                onChange={(e) => setDetailRowsPerPage(Number(e.target.value))}
                sx={{ width: 60 }}
              />
              <Typography>entries per page</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography>Search:</Typography>
              <TextField
                size="small"
                value={detailSearchTerm}
                onChange={(e) => setDetailSearchTerm(e.target.value)}
                sx={{ width: 200 }}
              />
            </Box>
          </Box>

          {/* Detail Storage Table */}
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>No</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Storage</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Inventory</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>Total Item</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detailStorageData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center">No data available</TableCell>
                  </TableRow>
                ) : (
                  detailStorageData
                    .filter(item => 
                      !detailSearchTerm || 
                      item.storageName?.toLowerCase().includes(detailSearchTerm.toLowerCase()) ||
                      item.inventoryName?.toLowerCase().includes(detailSearchTerm.toLowerCase())
                    )
                    .slice(detailPage * detailRowsPerPage, detailPage * detailRowsPerPage + detailRowsPerPage)
                    .map((item, index) => (
                      <TableRow key={index} hover>
                        <TableCell align="center">{detailPage * detailRowsPerPage + index + 1}</TableCell>
                        <TableCell>{item.storageName}</TableCell>
                        <TableCell>{item.inventoryName}</TableCell>
                        <TableCell align="center">{item.totalItem}</TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination Info */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Typography variant="body2">
              Showing {detailPage * detailRowsPerPage + 1} to {Math.min((detailPage + 1) * detailRowsPerPage, detailStorageData.length)} of {detailStorageData.length} entries
            </Typography>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={detailStorageData.length}
              rowsPerPage={detailRowsPerPage}
              page={detailPage}
              onPageChange={(_, newPage) => setDetailPage(newPage)}
              onRowsPerPageChange={(e) => {
                setDetailRowsPerPage(parseInt(e.target.value, 10));
                setDetailPage(0);
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "center" }}>
          <Button 
            onClick={handleViewClose} 
            variant="contained" 
            sx={{ 
              backgroundColor: "#6b7280", 
              "&:hover": { backgroundColor: "#4b5563" },
              minWidth: 100,
              textTransform: "none",
            }}
          >
            Close
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
            Are you sure you want to delete this room?
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

export default Room;

