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
  Chip,
} from "@mui/material";
import { tokens } from "../../theme";
import { Close, Image as ImageIcon, Check, Clear, Description, PictureAsPdf } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const StockOpnameDetailKoorUPT = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const navigate = useNavigate();
  const basePath = "/dashboardKoorUPT";

  const [stockOpname, setStockOpname] = useState(null);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Master data
  const [penggunaList, setPenggunaList] = useState([]);
  const [ruanganList, setRuanganList] = useState([]);
  const [penyimpananList, setPenyimpananList] = useState([]);

  // Photo Modal
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Approve/Reject Modal
  const [approveModalOpen, setApproveModalOpen] = useState(false);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [rejectError, setRejectError] = useState(false);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchStockOpname();
    fetchDetails();
    fetchPengguna();
    fetchRuangan();
    fetchPenyimpanan();
  }, [id]);

  const fetchStockOpname = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/StockOpname/${id}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        setStockOpname(result.data || result);
      }
    } catch (error) {
      console.error("Error fetching stock opname:", error);
    }
  };

  const fetchDetails = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlStockOpname/byopname/${id}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setDetails(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPengguna = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Pengguna`, { headers: { "Accept": "application/json" } });
      if (response.ok) {
        const result = await response.json();
        setPenggunaList(result.data || result || []);
      }
    } catch (error) {
      console.error("Error fetching pengguna:", error);
    }
  };

  const fetchRuangan = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan`, { headers: { "Accept": "application/json" } });
      if (response.ok) {
        const result = await response.json();
        setRuanganList(result.data || result || []);
      }
    } catch (error) {
      console.error("Error fetching ruangan:", error);
    }
  };

  const fetchPenyimpanan = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Penyimpanan`, { headers: { "Accept": "application/json" } });
      if (response.ok) {
        const result = await response.json();
        setPenyimpananList(result.data || result || []);
      }
    } catch (error) {
      console.error("Error fetching penyimpanan:", error);
    }
  };

  const getPenggunaName = (idPengguna) => {
    const pengguna = penggunaList.find(p => p.idPengguna === idPengguna);
    return pengguna?.namaPengguna || idPengguna;
  };

  const getRuanganName = (idRuangan) => {
    const ruangan = ruanganList.find(r => r.idRuangan === idRuangan);
    return ruangan?.namaRuangan || idRuangan;
  };

  const getPenyimpananName = (idPenyimpanan) => {
    const penyimpanan = penyimpananList.find(p => p.idPenyimpanan === idPenyimpanan);
    return penyimpanan?.namaPenyimpanan || idPenyimpanan;
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  // Photo handlers
  const handlePhotoClick = (fotoBarang) => {
    if (fotoBarang) {
      setSelectedPhoto(`${API_BASE_URL}/uploads/${fotoBarang}`);
      setPhotoModalOpen(true);
    }
  };

  // Approve handler
  const handleApprove = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      let currentUserId = "";
      if (storedUser) {
        const currentUser = JSON.parse(storedUser);
        currentUserId = currentUser?.idPengguna || "";
      }

      const approveData = {
        soIdOpname: parseInt(id),
        soStatus: "Approved",
        modifiedBy: currentUserId,
      };
      const response = await fetch(`${API_BASE_URL}/api/StockOpname/approve`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(approveData),
      });
      if (response.ok) {
        setApproveModalOpen(false);
        showSuccess("Stock Opname approved successfully!");
        fetchStockOpname();
      } else {
        alert("Failed to approve stock opname");
      }
    } catch (error) {
      console.error("Error approving stock opname:", error);
      alert("Failed to approve stock opname");
    }
  };

  // Reject handler
  const handleReject = async () => {
    if (!rejectReason.trim()) {
      setRejectError(true);
      return;
    }
    try {
      const storedUser = localStorage.getItem("user");
      let currentUserId = "";
      if (storedUser) {
        const currentUser = JSON.parse(storedUser);
        currentUserId = currentUser?.idPengguna || "";
      }

      const rejectData = {
        soIdOpname: parseInt(id),
        soStatus: "Rejected",
        soRejectReason: rejectReason,
        modifiedBy: currentUserId,
      };
      const response = await fetch(`${API_BASE_URL}/api/StockOpname/approve`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(rejectData),
      });
       if (response.ok) {
        setRejectModalOpen(false);
        setRejectReason("");
        setRejectError(false);
        showSuccess("DUPAT rejected successfully!");
        fetchDupat();
      } else {
        const errorText = await response.text();
        console.error("Reject error:", errorText);
        alert("Failed to reject DUPAT");
      }
    } catch (error) {
      console.error("Error rejecting DUPAT:", error);
      alert("Failed to reject DUPAT");
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

  const filteredDetails = details.filter((detail) => {
    const search = searchTerm.trim().toLowerCase();
    return !search ||
      detail.namaBarang?.toLowerCase().includes(search) ||
      detail.nomorAktiva?.toLowerCase().includes(search);
  });

  const getConditionColor = (condition) => {
    switch (condition?.toLowerCase()) {
      case "good": return { bg: "#dcfce7", color: "#16a34a" }; // hijau muda, hijau (sama dengan inventory)
      case "not good": return { bg: "#fee2e2", color: "#dc2626" }; // merah muda, merah (sama dengan inventory)
      case "minor damaged": return { bg: "#ffedd5", color: "#ea580c" }; // orange muda, orange (sama dengan inventory)
      case "major damaged": return { bg: "#fee2e2", color: "#dc2626" }; // merah muda, merah (sama dengan inventory)
      default: return { bg: "#e5e7eb", color: "#374151" };
    }
  };

  const columns = [
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "namaBarang", label: "Item Name", sortable: true, align: "left" },
    { id: "idRuangan", label: "Lab", sortable: true, align: "center" },
    { id: "idPenyimpanan", label: "Storage", sortable: true, align: "center" },
    { id: "soQuantity", label: "Qty", sortable: true, align: "center" },
    { id: "kondisiBarang", label: "Condition", sortable: true, align: "center" },
    { id: "keteranganTambahan", label: "Description", sortable: true, align: "center" },
    { id: "fotoBarang", label: "Photo", sortable: false, align: "center" },
  ];

  const canApproveReject = stockOpname?.soStatus === "On Progress Koor UPT";  // UBAH INI!


  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Stock Opname Detail
        </Typography>
      </Box>

      {/* Stock Opname Info */}
      <Box backgroundColor={colors.primary[400]} p={3} borderRadius="8px" mb={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4" fontWeight="bold">Stock Opname Detail</Typography>
          <Box display="flex" gap={1}>
            {stockOpname?.soStatus === "Approved" && (
              <>
                <Button
                  variant="contained"
                  startIcon={<Description />}
                  onClick={() => {/* TODO: Add export Excel function */}}
                  sx={{
                    backgroundColor: "#10b981",
                    "&:hover": { backgroundColor: "#059669" },
                    textTransform: "none",
                  }}
                >
                  Export Excel
                </Button>
                <Button
                  variant="contained"
                  startIcon={<PictureAsPdf />}
                  onClick={() => {/* TODO: Add export PDF function */}}
                  sx={{
                    backgroundColor: "#ef4444",
                    "&:hover": { backgroundColor: "#dc2626" },
                    textTransform: "none",
                  }}
                >
                  Export PDF
                </Button>
              </>
            )}
            <Button
              variant="contained"
              onClick={() => navigate(`${basePath}/stock-opname`)}
              sx={{ backgroundColor: "#6b7280", "&:hover": { backgroundColor: "#4b5563" }, textTransform: "none" }}
            >
              Close
            </Button>
          </Box>
        </Box>
        <Box display="flex" gap={2} mb={2}>
          <Box flex={1}>
            <Typography variant="body2" color="textSecondary">No. Stock Opname</Typography>
            <TextField value={stockOpname?.soIdOpname || ""} fullWidth size="small" disabled sx={{ backgroundColor: "#e5e7eb" }} />
          </Box>
          <Box flex={1}>
            <Typography variant="body2" color="textSecondary">Start Date</Typography>
            <TextField value={formatDate(stockOpname?.soStartDate) || ""} fullWidth size="small" disabled sx={{ backgroundColor: "#fff" }} />
          </Box>
          <Box flex={1}>
            <Typography variant="body2" color="textSecondary">End Date</Typography>
            <TextField value={formatDate(stockOpname?.soEndDate) || ""} fullWidth size="small" disabled sx={{ backgroundColor: "#fff" }} />
          </Box>
          <Box flex={1}>
            <Typography variant="body2" color="textSecondary">PIC</Typography>
            <TextField value={getPenggunaName(stockOpname?.soPic) || ""} fullWidth size="small" disabled sx={{ backgroundColor: "#fff" }} />
          </Box>
          <Box flex={1}>
            <Typography variant="body2" color="textSecondary">Status</Typography>
            <TextField value={stockOpname?.soStatus || ""} fullWidth size="small" disabled sx={{ backgroundColor: "#fff" }} />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" color="textSecondary">Description</Typography>
          <TextField value={stockOpname?.soDeskripsi || ""} fullWidth size="small" disabled sx={{ backgroundColor: "#fff" }} />
        </Box>
        {stockOpname?.soRejectReason && (
          <Box mt={2}>
            <Typography variant="body2" color="error">Reject Reason</Typography>
            <TextField value={stockOpname?.soRejectReason || ""} fullWidth size="small" disabled sx={{ backgroundColor: "#fef2f2" }} />
          </Box>
        )}
      </Box>

      {/* Search and Entries */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            size="small"
            type="number"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            sx={{ width: 70 }}
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
      <Paper sx={{ backgroundColor: colors.primary[400], borderRadius: "8px", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || "left"}
                    sx={{ fontWeight: "bold", cursor: column.sortable ? "pointer" : "default" }}
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
              ) : filteredDetails.length === 0 ? (
                <TableRow><TableCell colSpan={8} align="center">No data available</TableCell></TableRow>
              ) : (
                filteredDetails
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((detail, index) => (
                    <TableRow key={detail.idDetail} hover>
                      <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1.5}>
                          {/* Gambar Inventory */}
                          <img
                            src={`/src/assets/Barang/${detail.nomorAktiva}.jpg`}
                            alt={detail.namaBarang}
                            style={{ width: 45, height: 45, objectFit: "cover", borderRadius: 4 }}
                            onError={(e) => {
                              const ext = e.target.src.split('.').pop();
                              if (ext === 'jpg') {
                                e.target.src = `/src/assets/Barang/${detail.nomorAktiva}.jpeg`;
                              } else if (ext === 'jpeg') {
                                e.target.src = `/src/assets/Barang/${detail.nomorAktiva}.png`;
                              } else {
                                e.target.style.display = 'none';
                              }
                            }}
                          />
                          <Box>
                            <Typography fontWeight="bold" sx={{ fontSize: "14px" }}>{detail.namaBarang}</Typography>
                            <Box display="flex" gap={0.5} mt={0.5}>
                              <Chip 
                                label={detail.kategoriBarang || "Asset"} 
                                size="small" 
                                sx={{ 
                                  backgroundColor: detail.kategoriBarang?.toLowerCase() === "asset" ? "#22c55e" : "#3b82f6", 
                                  color: "#fff", 
                                  fontSize: 10, 
                                  height: 20 
                                }} 
                              />
                              <Chip 
                                label={detail.tipeBarang || "Non Consumable"} 
                                size="small" 
                                sx={{ 
                                  backgroundColor: (detail.tipeBarang?.toLowerCase() === "consumable" || detail.tipeBarang?.toLowerCase() === "consummable") ? "#8b5cf6" : "#ec4899", 
                                  color: "#fff", 
                                  fontSize: 10, 
                                  height: 20 
                                }} 
                              />
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="center">{getRuanganName(detail.idRuangan)}</TableCell>
                      <TableCell align="center">{getPenyimpananName(detail.idPenyimpanan)}</TableCell>
                      <TableCell align="center">{detail.soQuantity}</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={detail.kondisiBarang}
                          size="small"
                          sx={{ backgroundColor: getConditionColor(detail.kondisiBarang).bg, color: getConditionColor(detail.kondisiBarang).color }}
                        />
                      </TableCell>
                      <TableCell align="center">{detail.keteranganTambahan || "-"}</TableCell>
                      <TableCell align="center">
                        {detail.fotoBarang ? (
                          <Box
                            onClick={() => handlePhotoClick(detail.fotoBarang)}
                            sx={{ 
                              cursor: "pointer",
                              display: "inline-block",
                              border: "2px solid #3b82f6",
                              borderRadius: "4px",
                              overflow: "hidden",
                              "&:hover": { 
                                border: "2px solid #2563eb",
                                transform: "scale(1.05)",
                                transition: "all 0.2s ease"
                              }
                            }}
                          >
                            <img 
                              src={`${API_BASE_URL}/uploads/${detail.fotoBarang}`}
                              alt="Stock Opname Photo"
                              style={{ 
                                width: 50, 
                                height: 50, 
                                objectFit: "cover",
                                display: "block"
                              }}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.innerHTML = `
                                  <div style="
                                    width: 50px; 
                                    height: 50px; 
                                    background-color: #f3f4f6; 
                                    display: flex; 
                                    align-items: center; 
                                    justify-content: center;
                                    color: #9ca3af;
                                    font-size: 12px;
                                  ">
                                    No Image
                                  </div>
                                `;
                              }}
                            />
                          </Box>
                        ) : (
                          <Box
                            sx={{ 
                              width: 50, 
                              height: 50, 
                              backgroundColor: "#f3f4f6", 
                              display: "inline-flex", 
                              alignItems: "center", 
                              justifyContent: "center",
                              borderRadius: "4px",
                              color: "#9ca3af",
                              fontSize: "12px"
                            }}
                          >
                            No Photo
                          </Box>
                        )}
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
            Showing {filteredDetails.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, filteredDetails.length)} of {filteredDetails.length} entries
          </Typography>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={filteredDetails.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
          />
        </Box>

        {/* Action Buttons */}
        {canApproveReject && (
          <Box display="flex" justifyContent="flex-end" gap={1} px={2} pb={2}>
            <Button
              variant="contained"
              onClick={() => setRejectModalOpen(true)}
              sx={{ 
                backgroundColor: "#ef4444", 
                "&:hover": { backgroundColor: "#dc2626" },
                textTransform: "none",
                px: 3,
                py: 1
              }}
            >
              REJECT
            </Button>
            <Button
              variant="contained"
              onClick={() => setApproveModalOpen(true)}
              sx={{ 
                backgroundColor: "#22c55e", 
                "&:hover": { backgroundColor: "#16a34a" },
                textTransform: "none",
                px: 3,
                py: 1
              }}
            >
              APPROVE
            </Button>
          </Box>
        )}
      </Paper>

      {/* Approve Modal */}
      <Dialog open={approveModalOpen} onClose={() => setApproveModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Box sx={{ fontSize: 60, color: "#22c55e", mb: 2 }}>✓</Box>
          <Typography variant="h5" fontWeight="bold" mb={1}>Approve Stock Opname?</Typography>
          <Typography color="textSecondary">Are you sure you want to approve this stock opname?</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
          <Button
            onClick={handleApprove}
            variant="contained"
            sx={{
              backgroundColor: "#22c55e",
              "&:hover": { backgroundColor: "#16a34a" },
              minWidth: 120,
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "16px",
              py: 1.5,
            }}
          >
            Yes, approve it!
          </Button>
          <Button
            onClick={() => setApproveModalOpen(false)}
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

      {/* Reject Modal */}
      <Dialog 
        open={rejectModalOpen} 
        onClose={() => {
          setRejectModalOpen(false);
          setRejectReason("");
          setRejectError(false);
        }} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "12px",
            p: 2
          }
        }}
      >
        <DialogContent sx={{ textAlign: "center", pt: 4, pb: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Reject
          </Typography>
          <Typography variant="h6" color="textSecondary" mb={3}>
            Are you sure you want to reject this stock opname?
          </Typography>
          
          <Box textAlign="left" mb={2}>
            <Typography variant="body1" fontWeight="500" mb={1}>
              Rejection Reason <span style={{ color: "#ef4444" }}>*</span>
            </Typography>
            <TextField
              value={rejectReason}
              onChange={(e) => {
                setRejectReason(e.target.value);
                if (e.target.value.trim()) {
                  setRejectError(false);
                }
              }}
              fullWidth
              multiline
              rows={4}
              placeholder="Enter the reason for rejection..."
              error={rejectError}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  ...(rejectError && {
                    "& fieldset": {
                      borderColor: "#ef4444",
                      borderWidth: "2px"
                    }
                  })
                }
              }}
            />
          </Box>

          {rejectError && (
            <Box 
              display="flex" 
              alignItems="center" 
              gap={1} 
              mb={2}
              sx={{
                backgroundColor: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "8px",
                p: 1.5
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "#ef4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "16px"
                }}
              >
                !
              </Box>
              <Typography color="#dc2626" fontWeight="500">
                Rejection reason is required!
              </Typography>
            </Box>
          )}
        </DialogContent>
        
        <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
          <Button
            onClick={handleReject}
            variant="contained"
            sx={{
              backgroundColor: "#ef4444",
              "&:hover": { backgroundColor: "#dc2626" },
              minWidth: 140,
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
              py: 1.5,
            }}
          >
            Reject
          </Button>
          <Button
            onClick={() => {
              setRejectModalOpen(false);
              setRejectReason("");
              setRejectError(false);
            }}
            variant="contained"
            sx={{
              backgroundColor: "#e5e7eb",
              color: "#374151",
              "&:hover": { backgroundColor: "#d1d5db" },
              minWidth: 140,
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
              py: 1.5,
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Photo Modal */}
      <Dialog 
        open={photoModalOpen} 
        onClose={() => setPhotoModalOpen(false)} 
        maxWidth="md" 
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">Photo Preview</Typography>
          <IconButton onClick={() => setPhotoModalOpen(false)} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", p: 3 }}>
          {selectedPhoto && (
            <img 
              src={selectedPhoto} 
              alt="Stock Opname Photo" 
              style={{ 
                maxWidth: "100%", 
                maxHeight: "500px", 
                objectFit: "contain",
                borderRadius: 8
              }}
              onError={(e) => {
                e.target.src = "/src/assets/images/no-image.png";
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <SuccessModal 
        open={successModalOpen} 
        onClose={() => setSuccessModalOpen(false)} 
        message={successMessage} 
      />
    </Box>
  );
};

export default StockOpnameDetailKoorUPT;
