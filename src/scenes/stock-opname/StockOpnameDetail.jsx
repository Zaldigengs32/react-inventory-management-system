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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { tokens } from "../../theme";
import { Edit, Delete, Close, Image as ImageIcon, Description, PictureAsPdf } from "@mui/icons-material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const StockOpnameDetail = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const getBasePath = () => {
    if (location.pathname.startsWith("/dashboardPIClab")) return "/dashboardPIClab";
    if (location.pathname.startsWith("/dashboardPICnonasset")) return "/dashboardPICnonasset";
    if (location.pathname.startsWith("/dashboardKoorUPT")) return "/dashboardKoorUPT";
    return "/dashboardPICasset";
  };
  const basePath = getBasePath();

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

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editDetail, setEditDetail] = useState(null);
  const [editErrors, setEditErrors] = useState({});

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteDetail, setDeleteDetail] = useState(null);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Photo Modal
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Photo upload state
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  
  // Track failed images
  const [failedImages, setFailedImages] = useState(new Set());
  
  // Track if edit modal photo failed to load
  const [editPhotoFailed, setEditPhotoFailed] = useState(false);

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
        headers: { 
          "Accept": "application/json",
          "Cache-Control": "no-cache" // Prevent caching
        },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        console.log("Fetched details:", data); // Debug log
        setDetails(Array.isArray(data) ? data : []);
      } else {
        console.error("Failed to fetch details:", response.status);
        setDetails([]);
      }
    } catch (error) {
      console.error("Error fetching details:", error);
      setDetails([]);
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

  // Edit handlers
  const handleEditClick = (detail) => {
    setEditDetail({ ...detail });
    setEditErrors({});
    setPhotoPreview(null);
    setPhotoFile(null);
    setEditPhotoFailed(false);
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setEditErrors({});
    setPhotoPreview(null);
    setPhotoFile(null);
    setEditPhotoFailed(false);
    setTimeout(() => setEditDetail(null), 300);
  };

  // Photo handlers
  const handlePhotoClick = (fotoBarang) => {
    if (fotoBarang) {
      setSelectedPhoto(`${API_BASE_URL}/uploads/${fotoBarang}`);
      setPhotoModalOpen(true);
    }
  };

  const handleImageError = (detailId) => {
    setFailedImages(prev => new Set([...prev, detailId]));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid image file (JPG, JPEG, PNG)');
        return;
      }

      // Validate file size (2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        return;
      }

      setPhotoFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadPhoto = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type);
      
      // Try the main upload endpoint first
      let response = await fetch(`${API_BASE_URL}/api/Upload`, {
        method: 'POST',
        body: formData,
      });

      console.log('Upload response status:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('Upload result:', result);
        return result.fileName;
      } else {
        // Try the simple endpoint as fallback
        console.log('Trying simple upload endpoint...');
        response = await fetch(`${API_BASE_URL}/api/Upload/simple`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Simple upload result:', result);
          return result.fileName;
        } else {
          const errorText = await response.text();
          console.error('Upload failed:', response.status, errorText);
          throw new Error(`Upload failed: ${response.status} - ${errorText}`);
        }
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
      throw error;
    }
  };

  const handleEditSave = async () => {
    try {
      // Validasi input
      if (!editDetail.idRuangan || !editDetail.idPenyimpanan || editDetail.soQuantity === null || editDetail.soQuantity === undefined || editDetail.soQuantity < 0) {
        alert("Please fill all required fields with valid values");
        return;
      }

      let fotoBarangName = editDetail.fotoBarang;

      // Upload photo if new file selected
      if (photoFile) {
        try {
          fotoBarangName = await uploadPhoto(photoFile);
        } catch (error) {
          alert('Failed to upload photo. Please try again.');
          return;
        }
      }

      const updateData = {
        idDetail: editDetail.idDetail,
        idRuangan: parseInt(editDetail.idRuangan), // Pastikan integer
        idPenyimpanan: parseInt(editDetail.idPenyimpanan), // Pastikan integer
        soQuantity: parseInt(editDetail.soQuantity), // Pastikan integer
        kondisiBarang: editDetail.kondisiBarang,
        keteranganTambahan: editDetail.keteranganTambahan || null,
        fotoBarang: fotoBarangName || null,
        modifiedBy: stockOpname?.soPic || "SYSTEM",
      };
      
      console.log("Sending update data:", updateData);
      
      const response = await fetch(`${API_BASE_URL}/api/DtlStockOpname`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json", 
          "Accept": "application/json",
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(updateData),
      });
      
      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      
      if (response.ok) {
        // Refresh data dari server
        await fetchDetails();
        handleEditClose();
        showSuccess("Item updated successfully!");
      } else {
        // Baca error response
        let errorMessage = "Unknown error occurred";
        try {
          const errorData = await response.json();
          console.error("Update failed:", errorData);
          errorMessage = errorData.message || errorData.error || `Server error (${response.status})`;
        } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
          errorMessage = `Server error (${response.status}): ${response.statusText}`;
        }
        
        // Refresh data untuk melihat apakah update berhasil meski ada error response
        await fetchDetails();
        alert(`Failed to update item: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error updating item:", error);
      
      // Network error - refresh data untuk melihat status terkini
      try {
        await fetchDetails();
        alert(`Network error: ${error.message}. Please check if the update was successful and try again.`);
      } catch (refreshError) {
        console.error("Failed to refresh data:", refreshError);
        alert(`Failed to update item: ${error.message}. Please refresh the page and try again.`);
      }
    }
  };

  // Delete handlers
  const handleDeleteClick = (detail) => {
    setDeleteDetail(detail);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setLoading(false); // Reset loading state
    setTimeout(() => {
      setDeleteDetail(null);
    }, 300);
  };

  const handleDeleteConfirm = async () => {
    try {
      setLoading(true);
      
      // Cek apakah item masih ada di state sebelum delete
      const itemExists = details.find(detail => detail.idDetail === deleteDetail.idDetail);
      if (!itemExists) {
        // Item sudah tidak ada, langsung tutup modal
        handleDeleteClose();
        showSuccess("Item already removed!");
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/DtlStockOpname/${deleteDetail.idDetail}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      
      if (response.ok) {
        // Update state secara manual (optimistic update)
        setDetails(prevDetails => 
          prevDetails.filter(detail => detail.idDetail !== deleteDetail.idDetail)
        );
        
        // Refresh dari server untuk memastikan
        await fetchDetails();
        await fetchStockOpname();
        
        handleDeleteClose();
        showSuccess("Item deleted successfully!");
      } else {
        const errorData = await response.json().catch(() => ({ message: "Unknown error" }));
        console.error("Delete failed:", response.status, errorData);
        
        // Jika 404, berarti item sudah tidak ada
        if (response.status === 404) {
          // Update state untuk remove item yang sudah tidak ada
          setDetails(prevDetails => 
            prevDetails.filter(detail => detail.idDetail !== deleteDetail.idDetail)
          );
          handleDeleteClose();
          showSuccess("Item already removed!");
        } else {
          handleDeleteClose();
          alert(`Failed to delete item: ${errorData.message || 'Unknown error'}`);
        }
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      handleDeleteClose();
      alert(`Failed to delete item: ${error.message}`);
    } finally {
      setLoading(false);
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
    switch (condition) {
      case "Good": return { bg: "#dcfce7", color: "#16a34a" }; // hijau muda, hijau (sama dengan inventory)
      case "Not Good": return { bg: "#fee2e2", color: "#dc2626" }; // merah muda, merah (sama dengan inventory)
      case "Minor Damaged": return { bg: "#ffedd5", color: "#ea580c" }; // orange muda, orange (sama dengan inventory)
      case "Major Damaged": return { bg: "#fee2e2", color: "#dc2626" }; // merah muda, merah (sama dengan inventory)
      default: return { bg: "#dcfce7", color: "#16a34a" };
    }
  };

  const isDraft = stockOpname?.soStatus === "Draft";

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

  // Only add Action column if status is Draft
  if (isDraft) {
    columns.push({ id: "action", label: "Action", sortable: false, align: "center" });
  }


  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Stock Opname Detail
        </Typography>
      </Box>

      {/* Main Content Paper */}
      <Paper sx={{ p: 3, borderRadius: "12px", backgroundColor: colors.primary[400] }}>
        {/* Header with buttons */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Stock Opname Detail
          </Typography>
          <Box display="flex" gap={1}>
            {isDraft && (
              <Button
                variant="contained"
                onClick={() => navigate(`${basePath}/stock-opname/${id}/add-item`)}
                sx={{
                  backgroundColor: "#3b82f6",
                  "&:hover": { backgroundColor: "#2563eb" },
                  textTransform: "none",
                }}
              >
                Add Item
              </Button>
            )}
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
              sx={{
                backgroundColor: "#6b7280",
                "&:hover": { backgroundColor: "#4b5563" },
                textTransform: "none",
              }}
            >
              Close
            </Button>
          </Box>
        </Box>

        {/* Stock Opname Info */}
        {stockOpname && (
          <Box mb={3}>
          <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
            {/* Row 1: 4 columns */}
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                No. Stock Opname
              </Typography>
              <TextField
                value={stockOpname?.soIdOpname || ""}
                fullWidth
                size="small"
                disabled
                sx={{ 
                  backgroundColor: "#f3f4f6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#e5e7eb" },
                  },
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                    color: "#000000",
                  }
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                Start Date
              </Typography>
              <TextField
                value={formatDate(stockOpname?.soStartDate) || ""}
                fullWidth
                size="small"
                disabled
                sx={{ 
                  backgroundColor: "#f3f4f6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#e5e7eb" },
                  },
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                    color: "#000000",
                  }
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                End Date
              </Typography>
              <TextField
                value={formatDate(stockOpname?.soEndDate) || ""}
                fullWidth
                size="small"
                disabled
                sx={{ 
                  backgroundColor: "#f3f4f6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#e5e7eb" },
                  },
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                    color: "#000000",
                  }
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                PIC
              </Typography>
              <TextField
                value={getPenggunaName(stockOpname?.soPic) || ""}
                fullWidth
                size="small"
                disabled
                sx={{ 
                  backgroundColor: "#f3f4f6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#e5e7eb" },
                  },
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                    color: "#000000",
                  }
                }}
              />
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="3fr 1fr" gap={2}>
            {/* Row 2: Description and Status */}
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                Description
              </Typography>
              <TextField
                value={stockOpname?.soDeskripsi || ""}
                fullWidth
                size="small"
                disabled
                sx={{ 
                  backgroundColor: "#f3f4f6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#e5e7eb" },
                  },
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                    color: "#000000",
                  }
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                Status
              </Typography>
              <TextField
                value={stockOpname?.soStatus || ""}
                fullWidth
                size="small"
                disabled
                sx={{ 
                  backgroundColor: "#f3f4f6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#e5e7eb" },
                  },
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                    color: "#000000",
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      )}

      {/* Search and Entries */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            size="small"
            type="number"
            value={rowsPerPage}
            onChange={(e) => { setRowsPerPage(Number(e.target.value)); setPage(0); }}
            sx={{ width: 70 }}
            inputProps={{ min: 1 }}
          />
          <Typography variant="body2">entries per page</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">Search:</Typography>
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
            <TableRow sx={{ borderBottom: "2px solid #e5e7eb" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  sx={{
                    fontWeight: "bold",
                    cursor: column.sortable ? "pointer" : "default",
                    userSelect: "none",
                    py: 1.5,
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
                <TableRow><TableCell colSpan={9} align="center">Loading...</TableCell></TableRow>
              ) : filteredDetails.length === 0 ? (
                <TableRow><TableCell colSpan={9} align="center">No data available</TableCell></TableRow>
              ) : (
                filteredDetails
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((detail, index) => (
                    <TableRow key={detail.idDetail} sx={{ borderBottom: "1px solid #f3f4f6" }}>
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
                                label={detail.kategoriBarang === "Asset" ? "Asset" : "Non Asset"} 
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
                        {detail.fotoBarang && !failedImages.has(detail.idDtlStockOpname) ? (
                          <Box
                            onClick={() => handlePhotoClick(detail.fotoBarang)}
                            sx={{ 
                              cursor: "pointer",
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: "4px",
                              overflow: "hidden"
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
                              onError={() => handleImageError(detail.idDtlStockOpname)}
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
                      {isDraft && (
                        <TableCell align="center">
                          <Box display="flex" gap={0.5} justifyContent="center">
                            {isDraft && (
                              <>
                                <IconButton
                                  size="small"
                                  onClick={() => handleEditClick(detail)}
                                  sx={{ backgroundColor: "#f59e0b", color: "#fff", "&:hover": { backgroundColor: "#d97706" }, width: 28, height: 28 }}
                                >
                                  <Edit fontSize="small" />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  onClick={() => handleDeleteClick(detail)}
                                  sx={{ backgroundColor: "#ef4444", color: "#fff", "&:hover": { backgroundColor: "#dc2626" }, width: 28, height: 28 }}
                                >
                                  <Delete fontSize="small" />
                                </IconButton>
                              </>
                            )}
                          </Box>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} pt={2} borderTop="1px solid #e5e7eb">
          <Typography variant="body2" color="textSecondary">
            Showing {filteredDetails.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, filteredDetails.length)} of {filteredDetails.length} entries
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <IconButton
              size="small"
              disabled={page === 0}
              onClick={() => setPage(0)}
              sx={{ fontSize: 12 }}
            >
              «
            </IconButton>
            <IconButton
              size="small"
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              sx={{ fontSize: 12 }}
            >
              ‹
            </IconButton>
            {Array.from({ length: Math.min(5, Math.ceil(filteredDetails.length / rowsPerPage)) }, (_, i) => {
              const totalPages = Math.ceil(filteredDetails.length / rowsPerPage);
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i;
              } else if (page < 3) {
                pageNum = i;
              } else if (page > totalPages - 4) {
                pageNum = totalPages - 5 + i;
              } else {
                pageNum = page - 2 + i;
              }
              return (
                <Button
                  key={pageNum}
                  size="small"
                  variant={page === pageNum ? "contained" : "text"}
                  onClick={() => setPage(pageNum)}
                  sx={{
                    minWidth: 32,
                    height: 32,
                    backgroundColor: page === pageNum ? "#3b82f6" : "transparent",
                    color: page === pageNum ? "#fff" : "#6b7280",
                    "&:hover": {
                      backgroundColor: page === pageNum ? "#2563eb" : "#f3f4f6",
                    },
                  }}
                >
                  {pageNum + 1}
                </Button>
              );
            })}
            <IconButton
              size="small"
              disabled={page >= Math.ceil(filteredDetails.length / rowsPerPage) - 1}
              onClick={() => setPage(page + 1)}
              sx={{ fontSize: 12 }}
            >
              ›
            </IconButton>
            <IconButton
              size="small"
              disabled={page >= Math.ceil(filteredDetails.length / rowsPerPage) - 1}
              onClick={() => setPage(Math.ceil(filteredDetails.length / rowsPerPage) - 1)}
              sx={{ fontSize: 12 }}
            >
              »
            </IconButton>
          </Box>
        </Box>
      </Paper>


      {/* Edit Modal */}
      <Dialog open={editModalOpen} onClose={(e, r) => r !== "backdropClick" && handleEditClose()} maxWidth="sm" fullWidth disableEscapeKeyDown>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight="bold">Edit Item</Typography>
          <IconButton onClick={handleEditClose} size="small"><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {editDetail && (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box>
                <Typography variant="body2" mb={0.5}>Item Name <span style={{ color: "red" }}>*</span></Typography>
                <TextField value={editDetail.namaBarang || ""} fullWidth size="small" disabled sx={{ backgroundColor: "#f5f5f5" }} />
              </Box>
              <Box display="flex" gap={2}>
                <Box flex={1}>
                  <Typography variant="body2" mb={0.5}>Lab <span style={{ color: "red" }}>*</span></Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={editDetail.idRuangan || ""}
                      onChange={(e) => setEditDetail({ ...editDetail, idRuangan: e.target.value })}
                    >
                      {ruanganList.map((r) => (
                        <MenuItem key={r.idRuangan} value={r.idRuangan}>{r.namaRuangan}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box flex={1}>
                  <Typography variant="body2" mb={0.5}>Storage <span style={{ color: "red" }}>*</span></Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={editDetail.idPenyimpanan || ""}
                      onChange={(e) => setEditDetail({ ...editDetail, idPenyimpanan: e.target.value })}
                    >
                      {penyimpananList.map((p) => (
                        <MenuItem key={p.idPenyimpanan} value={p.idPenyimpanan}>{p.namaPenyimpanan}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <Box flex={1}>
                  <Typography variant="body2" mb={0.5}>Quantity <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    type="number"
                    value={editDetail.soQuantity || 0}
                    onChange={(e) => setEditDetail({ ...editDetail, soQuantity: parseInt(e.target.value) || 0 })}
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box flex={1}>
                  <Typography variant="body2" mb={0.5}>Condition <span style={{ color: "red" }}>*</span></Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={editDetail.kondisiBarang || "Good"}
                      onChange={(e) => setEditDetail({ ...editDetail, kondisiBarang: e.target.value })}
                    >
                      <MenuItem value="Good">Good</MenuItem>
                      <MenuItem value="Not Good">Not Good</MenuItem>
                      <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
                      <MenuItem value="Major Damaged">Major Damaged</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Description (optional)</Typography>
                <TextField
                  value={editDetail.keteranganTambahan || ""}
                  onChange={(e) => setEditDetail({ ...editDetail, keteranganTambahan: e.target.value })}
                  fullWidth
                  size="small"
                  multiline
                  rows={2}
                  placeholder="Enter description"
                />
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Upload Photo (optional)</Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Button variant="outlined" component="label">
                    Choose File
                    <input 
                      type="file" 
                      hidden 
                      accept="image/*" 
                      onChange={handlePhotoUpload}
                    />
                  </Button>
                  {photoPreview ? (
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                      <img 
                        src={photoPreview} 
                        alt="Preview" 
                        style={{ 
                          width: 60, 
                          height: 60, 
                          objectFit: "cover", 
                          borderRadius: 4,
                          border: "1px solid #ddd"
                        }} 
                      />
                      <IconButton
                        size="small"
                        onClick={() => {
                          setPhotoPreview(null);
                          setPhotoFile(null);
                        }}
                        sx={{
                          position: "absolute",
                          top: -8,
                          right: -8,
                          backgroundColor: "#ef4444",
                          color: "#ffffff",
                          width: 20,
                          height: 20,
                          "&:hover": { backgroundColor: "#dc2626" },
                          padding: 0,
                        }}
                      >
                        <Close sx={{ fontSize: 14 }} />
                      </IconButton>
                    </Box>
                  ) : editDetail?.fotoBarang && !editPhotoFailed ? (
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                      <img 
                        src={`${API_BASE_URL}/uploads/${editDetail.fotoBarang}`} 
                        alt="Current" 
                        style={{ 
                          width: 60, 
                          height: 60, 
                          objectFit: "cover", 
                          borderRadius: 4,
                          border: "1px solid #ddd"
                        }}
                        onError={() => setEditPhotoFailed(true)}
                      />
                      <IconButton
                        size="small"
                        onClick={() => {
                          setEditDetail({ ...editDetail, fotoBarang: null });
                        }}
                        sx={{
                          position: "absolute",
                          top: -8,
                          right: -8,
                          backgroundColor: "#ef4444",
                          color: "#ffffff",
                          width: 20,
                          height: 20,
                          "&:hover": { backgroundColor: "#dc2626" },
                          padding: 0,
                        }}
                      >
                        <Close sx={{ fontSize: 14 }} />
                      </IconButton>
                    </Box>
                  ) : (
                    <Box
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        backgroundColor: "#f3f4f6", 
                        display: "inline-flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        color: "#9ca3af",
                        fontSize: "11px"
                      }}
                    >
                      No Photo
                    </Box>
                  )}
                </Box>
                <Typography variant="caption" display="block" color="textSecondary" mt={0.5}>
                  Allowed: JPG, JPEG, PNG. Max size: 2MB.
                </Typography>
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
      <Dialog open={deleteModalOpen} onClose={!loading ? handleDeleteClose : undefined} maxWidth="xs" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Box sx={{ fontSize: 60, color: "#ef4444", mb: 2 }}>!</Box>
          <Typography variant="h6" fontWeight="bold" mb={1}>Are you sure?</Typography>
          <Typography color="textSecondary">You won't be able to revert this!</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
          <Button
            onClick={handleDeleteConfirm}
            disabled={loading}
            variant="contained"
            sx={{
              backgroundColor: "#ef4444",
              "&:hover": { backgroundColor: "#dc2626" },
              "&:disabled": { backgroundColor: "#9ca3af" },
              minWidth: 120,
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "16px",
              py: 1.5,
            }}
          >
            {loading ? "Deleting..." : "Yes, delete it!"}
          </Button>
          <Button
            onClick={handleDeleteClose}
            disabled={loading}
            variant="contained"
            sx={{
              backgroundColor: "#e8e8e8",
              color: "#666",
              "&:hover": { backgroundColor: "#d8d8d8" },
              "&:disabled": { backgroundColor: "#f3f4f6", color: "#9ca3af" },
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

      {/* Photo Modal */}
      <Dialog 
        open={photoModalOpen} 
        onClose={() => setPhotoModalOpen(false)} 
        maxWidth="md" 
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight="bold">Photo Preview</Typography>
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
    

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default StockOpnameDetail;
