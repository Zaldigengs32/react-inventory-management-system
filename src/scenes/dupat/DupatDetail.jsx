import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { tokens } from "../../theme";
import { Edit, Delete, Warning, CheckCircle, Close, Description, PictureAsPdf } from "@mui/icons-material";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import logoAstratech from "../../assets/images/LogoAstratech.png";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const DupatDetail = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  
  const getBasePath = () => {
    if (location.pathname.startsWith("/dashboardPIClab")) return "/dashboardPIClab";
    if (location.pathname.startsWith("/dashboardPICnonasset")) return "/dashboardPICnonasset";
    return "/dashboardPICasset";
  };
  const basePath = getBasePath();

  const [dupatDetail, setDupatDetail] = useState(null);
  const [items, setItems] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  // Delete Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Edit Modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // Photo upload state
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  // Photo Modal
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  // Track failed images
  const [failedImages, setFailedImages] = useState(new Set());
  
  // Track if edit modal photo failed to load
  const [editPhotoFailed, setEditPhotoFailed] = useState(false);

  useEffect(() => {
    fetchDupatDetail();
    fetchItems();
    fetchInventory();
  }, [id]);

  const fetchDupatDetail = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Dupat/${id}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        setDupatDetail(result.data || result);
      }
    } catch (error) {
      console.error("Error fetching dupat detail:", error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlDupat/bydupat/${id}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setItems(Array.isArray(data) ? data : []);
      } else {
        console.error("Error fetching items:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
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

  const getBarangInfo = (idBarang) => {
    return inventory.find(item => item.idBarang === idBarang) || {};
  };

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(columnId);
      setOrder("asc");
    }
  };

  // Photo handlers
  const handlePhotoClick = (fotoBarang) => {
    if (fotoBarang) {
      setSelectedPhoto(`${API_BASE_URL}/uploads/${fotoBarang}`);
      setPhotoModalOpen(true);
    }
  };

  const handleImageError = (itemId) => {
    setFailedImages(prev => new Set([...prev, itemId]));
  };

  const handleDeleteClick = (item) => {
    setDeleteItem(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/DtlDupat/${deleteItem.idDtlDupat}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchItems();
        setDeleteModalOpen(false);
        setSuccessMessage("Item removed from dupat successfully!");
        setSuccessModalOpen(true);
      } else {
        alert("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item");
    }
  };

  // Edit handlers
  const handleEditClick = (item) => {
    const barang = getBarangInfo(item.idBarang);
    setEditItem({
      ...item,
      namaBarang: barang.namaBarang || "",
      nomorAktiva: barang.nomorAktiva || "",
    });
    setPhotoPreview(null);
    setPhotoFile(null);
    setEditPhotoFailed(false);
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setPhotoPreview(null);
    setPhotoFile(null);
    setEditPhotoFailed(false);
    setTimeout(() => setEditItem(null), 300);
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
      const response = await fetch(`${API_BASE_URL}/api/Upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      return result.data || result.fileName;
    } catch (error) {
      console.error('Error uploading photo:', error);
      throw error;
    }
  };

  const handleEditSave = async () => {
    try {
      let fotoBarangName = editItem.fotoBarang;

      // Upload photo if new file selected
      if (photoFile) {
        try {
          fotoBarangName = await uploadPhoto(photoFile);
        } catch (error) {
          alert('Failed to upload photo. Please try again.');
          return;
        }
      }

      const response = await fetch(`${API_BASE_URL}/api/DtlDupat`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idDtlDupat: editItem.idDtlDupat,
          idPenyimpanan: editItem.idPenyimpanan,
          keterangan: editItem.keterangan || null,
          kondisiBarang: editItem.kondisiBarang,
          usulanPengeluaran: editItem.usulanPengeluaran,
          fotoBarang: fotoBarangName || null,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update item");
      }

      const updatedItems = items.map(item => 
        item.idDtlDupat === editItem.idDtlDupat 
          ? { ...item, keterangan: editItem.keterangan, kondisiBarang: editItem.kondisiBarang, usulanPengeluaran: editItem.usulanPengeluaran, fotoBarang: fotoBarangName }
          : item
      );
      setItems(updatedItems);
      handleEditClose();
      setSuccessMessage("Item updated successfully!");
      setSuccessModalOpen(true);
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item. Please try again.");
    }
  };

  const filteredItems = items.filter((item) => {
    const barang = getBarangInfo(item.idBarang);
    const search = searchTerm.trim().toLowerCase();
    return !search ||
      barang.namaBarang?.toLowerCase().includes(search) ||
      barang.nomorAktiva?.toLowerCase().includes(search);
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (!orderBy) return 0;
    const barangA = getBarangInfo(a.idBarang);
    const barangB = getBarangInfo(b.idBarang);
    let aVal = orderBy === "namaBarang" ? barangA.namaBarang : a[orderBy] ?? "";
    let bVal = orderBy === "namaBarang" ? barangB.namaBarang : b[orderBy] ?? "";
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();
    return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  // Pagination
  const totalPages = Math.ceil(sortedItems.length / rowsPerPage);
  const paginatedItems = sortedItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Define columns based on dupat status
  const columns = [
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "namaBarang", label: "Inventory", sortable: true, align: "left" },
    { id: "nomorAktiva", label: "Asset / Non Asset Number", sortable: true, align: "center" },
    { id: "jumlah", label: "Quantity", sortable: true, align: "center" },
    { id: "kondisiBarang", label: "Condition", sortable: true, align: "center" },
    { id: "usulanPengeluaran", label: "Proposal", sortable: true, align: "center" },
    { id: "keterangan", label: "Description", sortable: true, align: "center" },
    { id: "fotoBarang", label: "Condition Photo", sortable: false, align: "center" },
  ];

  // Only add Action column if status is Draft
  if (dupatDetail?.statusDupat === "Draft") {
    columns.push({ id: "action", label: "Action", sortable: false, align: "center" });
  }

  // Export to Excel function
  const exportToExcel = () => {
    // Prepare header data
    const title1 = "DAFTAR USULAN PENGELUARAN AKTIVA TETAP (DUPAT)";
    const docNumber = `DUPAT-${dupatDetail.idDupat}`;

    const headerData = [
      [title1],
      [`No: ${docNumber}`],
      [],
      []
    ];

    // Prepare table data with headers
    const tableData = [
      ['No', 'Deskripsi Aktiva Tetap', 'Nomor Aktiva Tetap', 'Kondisi', 'Usulan Pengeluaran', 'Alasan']
    ];

    // Translate proposal values to Indonesian
    const translateProposal = (value) => {
      const translations = {
        'Sold': 'Dijual kpd pihak ketiga',
        'Auction': 'Lelang',
        'Deleted': 'Dihapus',
        'Donated': 'Hibah'
      };
      return translations[value] || value;
    };

    // Add data rows
    items.forEach((item, index) => {
      const barang = getBarangInfo(item.idBarang);
      tableData.push([
        index + 1,
        barang.namaBarang || '',
        barang.nomorAktiva || '',
        item.kondisiBarang || 'Good',
        translateProposal(item.usulanPengeluaran || 'Deleted'),
        item.keterangan || '-'
      ]);
    });

    // Combine header and table data
    const allData = headerData.concat(tableData);
    const ws = XLSX.utils.aoa_to_sheet(allData);

    // Set column widths
    ws['!cols'] = [
      { wch: 5 },   // No
      { wch: 47 },  // Deskripsi
      { wch: 20 },  // Nomor Aktiva
      { wch: 15 },  // Kondisi
      { wch: 25 },  // Usulan
      { wch: 30 }   // Alasan
    ];

    // Merge cells for title rows
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }, // Title
      { s: { r: 1, c: 0 }, e: { r: 1, c: 5 } }, // Doc Number
      { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, // Empty row
    ];

    // Apply AutoFilter to table
    const dataRange = XLSX.utils.decode_range(ws['!ref']);
    ws['!autofilter'] = {
      ref: XLSX.utils.encode_range({
        s: { r: 4, c: 0 },
        e: { r: dataRange.e.r, c: 5 },
      }),
    };

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Dupat');
    XLSX.writeFile(wb, `Dupat_${dupatDetail.idDupat}.xlsx`);
  };

  // Export to PDF function
  const exportToPDF = () => {
    // Dynamically import jsPDF and autoTable
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    }); // Landscape
    const pageWidth = doc.internal.pageSize.getWidth();

    // Translate proposal values to Indonesian
    const translateProposal = (value) => {
      const translations = {
        'Sold': 'Dijual kpd pihak ketiga',
        'Dijual': 'Dijual kpd pihak ketiga',
        'Dijual kpd pihak ketiga': 'Dijual kpd pihak ketiga',
        'Auction': 'Lelang',
        'Lelang': 'Lelang',
        'Deleted': 'Dihapus',
        'Dihapus': 'Dihapus',
        'Donated': 'Hibah',
        'Hibah': 'Hibah'
      };
      return translations[value] || value;
    };

    const alignmentWidth = 277;
    const alignmentMargin = (pageWidth - alignmentWidth) / 2;

    // Logo (kiri atas)
    const logoHeight = 20;
    const logoWidth = 50;
    doc.addImage(logoAstratech, 'PNG', alignmentMargin, 13, logoWidth, logoHeight);

    // Nomor & Tanggal (kanan atas, sejajar logo)
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const labelX = alignmentMargin + alignmentWidth - 50;
    const colonX = labelX + 15;
    const endX = alignmentMargin + alignmentWidth;
    
    doc.text('Nomor:', labelX, 18);
    const dotCount = Math.floor((endX - colonX) / 1.2);
    doc.text('.'.repeat(dotCount), colonX, 18);

    // Tanggal otomatis hari ini
    const today = new Date();
    const todayFormatted = today.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    doc.text('Tanggal:', labelX, 25);
    doc.text(todayFormatted, colonX, 25);

    // Title (center)
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('DAFTAR USULAN PENGELUARAN AKTIVA TETAP (DUPAT)', pageWidth / 2, 45, { align: 'center' });

    // Prepare table data
    const tableData = items.map((item, index) => {
      const barang = getBarangInfo(item.idBarang);
      return [
        (index + 1).toString(),
        barang.namaBarang || '',
        barang.nomorAktiva || '',
        item.kondisiBarang || 'Good',
        translateProposal(item.usulanPengeluaran || 'Deleted'),
        item.keterangan || '-'
      ];
    });

    autoTable(doc, {
      startY: 55,
      head: [['No', 'Deskripsi Aktiva Tetap', 'Nomor Aktiva Tetap', 'Kondisi', 'Usulan Pengeluaran', 'Alasan']],
      body: tableData,
      theme: 'grid',
      headStyles: { 
        fillColor: [255, 255, 255], 
        textColor: [0, 0, 0], 
        fontStyle: 'bold', 
        halign: 'center', 
        lineWidth: 0.3, 
        lineColor: [0, 0, 0], 
        fontSize: 9 
      },
      bodyStyles: { 
        textColor: [0, 0, 0], 
        lineWidth: 0.3, 
        lineColor: [0, 0, 0], 
        halign: 'center' 
      },
      columnStyles: {
        0: { cellWidth: 15 },
        1: { cellWidth: 110 },
        2: { cellWidth: 40 },
        3: { cellWidth: 25 },
        4: { cellWidth: 45 },
        5: { cellWidth: 41 }
      },
      margin: { left: alignmentMargin, right: alignmentMargin },
      tableWidth: 276,
      styles: { fontSize: 8, cellPadding: 3 }
    });

    // Signature Table
    const signatureY = doc.lastAutoTable.finalY + 10;
    const picName = dupatDetail?.namaPengguna || '';
    const picDate = dupatDetail?.tanggalDupat ? new Date(dupatDetail.tanggalDupat).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

    autoTable(doc, {
      startY: signatureY,
      head: [[
        { content: 'Diajukan oleh UPT/Dept/Dir asal Aktiva,', colSpan: 2 },
        { content: 'Disetujui oleh,', colSpan: 3 },
        { content: 'Disetujui oleh,', colSpan: 1 }
      ]],
      body: [
        ['PIC', 'Ka.Dept', 'WADIR', 'Ka.Dept DAKAP', 'Ka.Dept DPUSDM', 'Direktur'],
        [
          { content: `\n\n\n\n\nNama: ${picName}\nTanggal: ${picDate}`, styles: { halign: 'left', valign: 'bottom' } },
          { content: '\n\n\n\n\nNama:\nTanggal:', styles: { halign: 'left', valign: 'bottom' } },
          { content: '\n\n\n\n\nNama:\nTanggal:', styles: { halign: 'left', valign: 'bottom' } },
          { content: '\n\n\n\n\nNama:\nTanggal:', styles: { halign: 'left', valign: 'bottom' } },
          { content: '\n\n\n\n\nNama:\nTanggal:', styles: { halign: 'left', valign: 'bottom' } },
          { content: '\n\n\n\n\nNama:\nTanggal:', styles: { halign: 'left', valign: 'bottom' } }
        ]
      ],
      theme: 'grid',
      headStyles: { 
        fillColor: [240, 240, 240], 
        textColor: [0, 0, 0], 
        fontStyle: 'bold', 
        halign: 'center', 
        lineWidth: 0.3, 
        lineColor: [0, 0, 0], 
        fontSize: 10 
      },
      bodyStyles: { 
        textColor: [0, 0, 0], 
        lineWidth: 0.3, 
        lineColor: [0, 0, 0], 
        halign: 'center', 
        fontSize: 10, 
        minCellHeight: 25 
      },
      columnStyles: {
        0: { cellWidth: 46 },
        1: { cellWidth: 46 },
        2: { cellWidth: 46 },
        3: { cellWidth: 46 },
        4: { cellWidth: 46 },
        5: { cellWidth: 46 }
      },
      margin: { left: alignmentMargin, right: alignmentMargin },
      styles: { fontSize: 10, cellPadding: 2 }
    });

    // Catatan
    const catatanY = doc.lastAutoTable.finalY + 5;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('Catatan:', alignmentMargin, catatanY);
    doc.setFont('helvetica', 'normal');
    doc.text('2. *) Keterangan untuk kolom Usulan :', alignmentMargin, catatanY + 4);
    doc.text('A. Dijual kpd pihak ketiga          B. Lelang          C. Dihapus          D. Hibah', alignmentMargin + 10, catatanY + 8);

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 15;
    doc.setDrawColor(180, 180, 180);
    doc.line(20, footerY, pageWidth - 20, footerY);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('Dokumen ini dicetak secara otomatis oleh Sistem Manajemen Asset', pageWidth / 2, footerY + 5, { align: 'center' });
    doc.text(`UPT Informatika - Politeknik Astra © ${new Date().getFullYear()}`, pageWidth / 2, footerY + 9, { align: 'center' });

    doc.save(`Dupat_${dupatDetail.idDupat}.pdf`);
  };

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Dupat Detail
        </Typography>
      </Box>

      {/* Main Content Paper */}
      <Paper sx={{ p: 3, borderRadius: "12px", backgroundColor: colors.primary[400] }}>
        {/* Header with buttons */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Dupat Detail
          </Typography>
          <Box display="flex" gap={1}>
            {dupatDetail?.statusDupat === "Draft" && (
              <Button
                variant="contained"
                onClick={() => navigate(`${basePath}/dupat/${id}/add-item`)}
                sx={{
                  backgroundColor: "#3b82f6",
                  "&:hover": { backgroundColor: "#2563eb" },
                  textTransform: "none",
                }}
              >
                Add Item
              </Button>
            )}
            {dupatDetail?.statusDupat === "Approved" && (
              <>
                <Button
                  variant="contained"
                  startIcon={<Description />}
                  onClick={exportToExcel}
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
                  onClick={exportToPDF}
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
              onClick={() => navigate(`${basePath}/dupat`)}
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

        {/* Dupat Info */}
        {dupatDetail && (
          <Box display="flex" flexDirection="column" gap={2} mb={3}>
            {/* Row 1: No. DUPAT, Date, PIC, Status */}
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
              <Box>
                <Typography variant="body2" color="textSecondary" mb={0.5}>
                  No. DUPAT
                </Typography>
                <TextField
                  value={dupatDetail.idDupat || ""}
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
                  Date
                </Typography>
                <TextField
                  value={dupatDetail.tanggalDupat ? new Date(dupatDetail.tanggalDupat).toLocaleDateString('id-ID') : "-"}
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
                  value={dupatDetail.namaPengguna || "-"}
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
                  value={dupatDetail.statusDupat || ""}
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
            
            {/* Row 2: Description (full width) */}
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                Description
              </Typography>
              <TextField
                value={dupatDetail.keteranganDupat || ""}
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
        )}

        {/* Entries and Search */}
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
                <TableRow>
                  <TableCell colSpan={columns.length} align="center" sx={{ py: 4 }}>Loading...</TableCell>
                </TableRow>
              ) : paginatedItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center" sx={{ py: 4 }}>No items in this dupat</TableCell>
                </TableRow>
              ) : (
                paginatedItems.map((item, index) => {
                  const barang = getBarangInfo(item.idBarang);
                  return (
                    <TableRow key={item.idDtlDupat} sx={{ borderBottom: "1px solid #f3f4f6" }}>
                      <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1.5}>
                          <img
                            src={`/src/assets/Barang/${barang.nomorAktiva}.jpg`}
                            alt={barang.namaBarang}
                            style={{ width: 45, height: 45, objectFit: "cover", borderRadius: 4 }}
                            onError={(e) => {
                              const ext = e.target.src.split('.').pop();
                              if (ext === 'jpg') {
                                e.target.src = `/src/assets/Barang/${barang.nomorAktiva}.jpeg`;
                              } else if (ext === 'jpeg') {
                                e.target.src = `/src/assets/Barang/${barang.nomorAktiva}.png`;
                              } else {
                                e.target.style.display = 'none';
                              }
                            }}
                          />
                          <Box>
                            <Typography fontWeight="500" fontSize="14px">
                              {barang.namaBarang || `Item #${item.idBarang}`}
                            </Typography>
                            <Box display="flex" gap={0.5} mt={0.5}>
                              <Chip
                                label={barang.kategoriBarang || "Asset"}
                                size="small"
                                sx={{
                                  fontSize: "10px",
                                  height: 20,
                                  backgroundColor: barang.kategoriBarang?.toLowerCase() === "asset" ? "#22c55e" : "#3b82f6",
                                  color: "#fff",
                                }}
                              />
                              <Chip
                                label={barang.tipeBarang || "Non Consumable"}
                                size="small"
                                sx={{
                                  fontSize: "10px",
                                  height: 20,
                                  backgroundColor: (barang.tipeBarang?.toLowerCase() === "consumable" || barang.tipeBarang?.toLowerCase() === "consummable") ? "#8b5cf6" : "#ec4899",
                                  color: "#fff",
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="center">{barang.nomorAktiva || "-"}</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={item.kondisiBarang || "Good"}
                          size="small"
                          sx={{
                            backgroundColor: 
                              item.kondisiBarang?.toLowerCase() === "good" ? "#dcfce7" :
                              item.kondisiBarang?.toLowerCase() === "not good" ? "#fee2e2" :
                              item.kondisiBarang?.toLowerCase() === "minor damaged" ? "#ffedd5" :
                              item.kondisiBarang?.toLowerCase() === "major damaged" ? "#fee2e2" : "#dcfce7",
                            color: 
                              item.kondisiBarang?.toLowerCase() === "good" ? "#16a34a" :
                              item.kondisiBarang?.toLowerCase() === "not good" ? "#dc2626" :
                              item.kondisiBarang?.toLowerCase() === "minor damaged" ? "#ea580c" :
                              item.kondisiBarang?.toLowerCase() === "major damaged" ? "#dc2626" : "#16a34a",
                            fontWeight: 500,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={item.usulanPengeluaran || "Deleted"}
                          size="small"
                          sx={{
                            backgroundColor: 
                              item.usulanPengeluaran?.toLowerCase() === "deleted" ? "#fee2e2" :
                              item.usulanPengeluaran?.toLowerCase() === "sold" ? "#dbeafe" :
                              item.usulanPengeluaran?.toLowerCase() === "auction" ? "#fef3c7" :
                              item.usulanPengeluaran?.toLowerCase() === "donated" ? "#dcfce7" : "#fee2e2",
                            color:
                              item.usulanPengeluaran?.toLowerCase() === "deleted" ? "#dc2626" :
                              item.usulanPengeluaran?.toLowerCase() === "sold" ? "#2563eb" :
                              item.usulanPengeluaran?.toLowerCase() === "auction" ? "#d97706" :
                              item.usulanPengeluaran?.toLowerCase() === "donated" ? "#16a34a" : "#dc2626",
                            fontWeight: 500,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">{item.keterangan || "-"}</TableCell>
                      <TableCell align="center">
                        {item.fotoBarang && !failedImages.has(item.idDtlDupat) ? (
                          <Box
                            onClick={() => handlePhotoClick(item.fotoBarang)}
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
                              src={`${API_BASE_URL}/uploads/${item.fotoBarang}`}
                              alt="DUPAT Photo"
                              style={{ 
                                width: 50, 
                                height: 50, 
                                objectFit: "cover",
                                display: "block"
                              }}
                              onError={() => handleImageError(item.idDtlDupat)}
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
                      {dupatDetail?.statusDupat === "Draft" && (
                        <TableCell align="center">
                          <Box display="flex" gap={0.5} justifyContent="center">
                            <IconButton
                              size="small"
                              onClick={() => handleEditClick(item)}
                              sx={{
                                backgroundColor: "#f5a623",
                                color: "#ffffff",
                                "&:hover": { backgroundColor: "#e09000" },
                                width: 30,
                                height: 30,
                              }}
                            >
                              <Edit fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() => handleDeleteClick(item)}
                              sx={{
                                backgroundColor: "#ef4444",
                                color: "#ffffff",
                                "&:hover": { backgroundColor: "#dc2626" },
                                width: 30,
                                height: 30,
                              }}
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </Box>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} pt={2} borderTop="1px solid #e5e7eb">
          <Typography variant="body2" color="textSecondary">
            Showing {sortedItems.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, sortedItems.length)} of {sortedItems.length} entries
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
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
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
              disabled={page >= totalPages - 1}
              onClick={() => setPage(page + 1)}
              sx={{ fontSize: 12 }}
            >
              ›
            </IconButton>
            <IconButton
              size="small"
              disabled={page >= totalPages - 1}
              onClick={() => setPage(totalPages - 1)}
              sx={{ fontSize: 12 }}
            >
              »
            </IconButton>
          </Box>
        </Box>
      </Paper>

      {/* Edit Item Modal */}
      <Dialog
        open={editModalOpen}
        onClose={handleEditClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 1 }}>
          <Typography variant="h5" fontWeight="bold">Edit Item</Typography>
          <IconButton onClick={handleEditClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {editItem && (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <Box>
                  <Typography variant="body2" mb={0.5}>Inventory <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={editItem.namaBarang}
                    fullWidth
                    size="small"
                    disabled
                    sx={{ 
                      backgroundColor: "#f3f4f6",
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                        color: "#000000",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Asset / Non Asset Number <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    value={editItem.nomorAktiva}
                    fullWidth
                    size="small"
                    disabled
                    sx={{ 
                      backgroundColor: "#f3f4f6",
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                        color: "#000000",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <Box>
                  <Typography variant="body2" mb={0.5}>Quantity <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    type="number"
                    value={1}
                    fullWidth
                    size="small"
                    disabled
                    sx={{ 
                      backgroundColor: "#f3f4f6",
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000000",
                        color: "#000000",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Condition <span style={{ color: "red" }}>*</span></Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={editItem.kondisiBarang || "Good"}
                      onChange={(e) => setEditItem({ ...editItem, kondisiBarang: e.target.value })}
                    >
                      <MenuItem value="Good">Good</MenuItem>
                      <MenuItem value="Not Good">Not Good</MenuItem>
                      <MenuItem value="Minor Damaged">Minor Damaged</MenuItem>
                      <MenuItem value="Major Damaged">Major Damaged</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <Box>
                  <Typography variant="body2" mb={0.5}>Proposal <span style={{ color: "red" }}>*</span></Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={editItem.usulanPengeluaran || "Deleted"}
                      onChange={(e) => setEditItem({ ...editItem, usulanPengeluaran: e.target.value })}
                    >
                      <MenuItem value="Deleted">Deleted</MenuItem>
                      <MenuItem value="Sold">Sold</MenuItem>
                      <MenuItem value="Auction">Auction</MenuItem>
                      <MenuItem value="Donated">Donated</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <Typography variant="body2" mb={0.5}>Description (optional)</Typography>
                  <TextField
                    placeholder="Enter description"
                    value={editItem.keterangan || ""}
                    onChange={(e) => setEditItem({ ...editItem, keterangan: e.target.value })}
                    fullWidth
                    size="small"
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" mb={0.5}>Upload Photo (optional)</Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Button 
                    variant="outlined" 
                    component="label"
                    sx={{
                      textTransform: "none",
                      borderColor: "#d1d5db",
                      color: "#6b7280",
                    }}
                  >
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
                  ) : editItem?.fotoBarang && !editPhotoFailed ? (
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                      <img 
                        src={`${API_BASE_URL}/uploads/${editItem.fotoBarang}`} 
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
                          setEditItem({ ...editItem, fotoBarang: null });
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
                        display: "flex", 
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

      {/* Delete Confirmation Modal */}
      <Dialog
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Warning sx={{ fontSize: 80, color: "#ff9800", mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Are you sure you want to remove this item?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            This item will be removed from the dupat.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            sx={{ backgroundColor: "#2196f3", "&:hover": { backgroundColor: "#1976d2" } }}
          >
            Yes, Remove
          </Button>
          <Button
            onClick={() => setDeleteModalOpen(false)}
            variant="contained"
            sx={{ backgroundColor: "#f44336", "&:hover": { backgroundColor: "#d32f2f" } }}
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
          Photo Preview
          <IconButton onClick={() => setPhotoModalOpen(false)} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", p: 3 }}>
          {selectedPhoto && (
            <img 
              src={selectedPhoto} 
              alt="DUPAT Photo" 
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

export default DupatDetail;
