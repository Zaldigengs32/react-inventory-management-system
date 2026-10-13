import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { tokens } from "../../theme";
import { Close, CheckCircle, Warning, Description, PictureAsPdf } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import logoAstratech from "../../assets/images/LogoAstratech.png";
import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const DupatDetailKoorUPT = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const navigate = useNavigate();

  const [dupat, setDupat] = useState(null);
  const [items, setItems] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

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

  // Track failed images
  const [failedImages, setFailedImages] = useState(new Set());

  useEffect(() => {
    fetchDupat();
    fetchItems();
    fetchInventory();
  }, [id]);

  const fetchDupat = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Dupat/${id}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        setDupat(result.data || result);
      }
    } catch (error) {
      console.error("Error fetching dupat:", error);
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

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return dayjs(dateString).format("DD/MM/YYYY");
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
        idDupat: parseInt(id),
        statusDupat: "Approved",
        disetujuiOleh: currentUserId,
        modifiedBy: currentUserId,
      };

      const response = await fetch(`${API_BASE_URL}/api/Dupat/approve`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(approveData),
      });

      if (response.ok) {
        setApproveModalOpen(false);
        showSuccess("DUPAT approved successfully!");
        fetchDupat();
      } else {
        const errorText = await response.text();
        console.error("Approve error:", errorText);
        alert("Failed to approve DUPAT");
      }
    } catch (error) {
      console.error("Error approving DUPAT:", error);
      alert("Failed to approve DUPAT");
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
        idDupat: parseInt(id),
        statusDupat: "Rejected",
        disetujuiOleh: currentUserId,
        alasanPenolakan: rejectReason,
        modifiedBy: currentUserId,
      };

      const response = await fetch(`${API_BASE_URL}/api/Dupat/approve`, {
        method: "PUT",
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

  const filteredItems = items.filter((item) => {
    const barang = getBarangInfo(item.idBarang);
    const search = searchTerm.trim().toLowerCase();
    return !search ||
      barang.namaBarang?.toLowerCase().includes(search) ||
      barang.nomorAktiva?.toLowerCase().includes(search);
  });

  const columns = [
    { id: "no", label: "No", align: "center" },
    { id: "namaBarang", label: "Inventory", align: "left" },
    { id: "nomorAktiva", label: "Asset / Non Asset Number", align: "center" },
    { id: "jumlah", label: "Quantity", align: "center" },
    { id: "kondisiBarang", label: "Condition", align: "center" },
    { id: "usulanPengeluaran", label: "Proposal", align: "center" },
    { id: "keterangan", label: "Description", align: "center" },
    { id: "fotoBarang", label: "Condition Photo", align: "center" },
  ];

  const canApproveReject = dupat?.statusDupat === "On Progress Koor UPT";

  // Export to Excel function
  const exportToExcel = () => {
    // Prepare header data
    const title1 = "DAFTAR USULAN PENGELUARAN AKTIVA TETAP (DUPAT)";
    const docNumber = `DUPAT-${dupat.idDupat}`;

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
    XLSX.writeFile(wb, `Dupat_${dupat.idDupat}.xlsx`);
  };

  // Export to PDF function
  const exportToPDF = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });
    const pageWidth = doc.internal.pageSize.getWidth();

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

    const today = new Date();
    const todayFormatted = today.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    doc.text('Tanggal:', labelX, 25);
    doc.text(todayFormatted, colonX, 25);

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('DAFTAR USULAN PENGELUARAN AKTIVA TETAP (DUPAT)', pageWidth / 2, 45, { align: 'center' });

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

    const signatureY = doc.lastAutoTable.finalY + 10;
    const picName = dupat?.namaPengguna || '';
    const picDate = dupat?.tanggalDupat ? new Date(dupat.tanggalDupat).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

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

    const catatanY = doc.lastAutoTable.finalY + 5;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('Catatan:', alignmentMargin, catatanY);
    doc.setFont('helvetica', 'normal');
    doc.text('2. *) Keterangan untuk kolom Usulan :', alignmentMargin, catatanY + 4);
    doc.text('A. Dijual kpd pihak ketiga          B. Lelang          C. Dihapus          D. Hibah', alignmentMargin + 10, catatanY + 8);

    const footerY = doc.internal.pageSize.getHeight() - 15;
    doc.setDrawColor(180, 180, 180);
    doc.line(20, footerY, pageWidth - 20, footerY);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('Dokumen ini dicetak secara otomatis oleh Sistem Manajemen Asset', pageWidth / 2, footerY + 5, { align: 'center' });
    doc.text(`UPT Informatika - Politeknik Astra © ${new Date().getFullYear()}`, pageWidth / 2, footerY + 9, { align: 'center' });

    doc.save(`Dupat_${dupat.idDupat}.pdf`);
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
            {dupat?.statusDupat === "Approved" && (
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
              onClick={() => navigate("/dashboardKoorUPT/dupat")}
              sx={{ backgroundColor: "#6b7280", "&:hover": { backgroundColor: "#4b5563" }, textTransform: "none" }}
            >
              Close
            </Button>
          </Box>
        </Box>

        {/* DUPAT Info */}
        {dupat && (
          <Box mb={3}>
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
              <Box>
                <Typography variant="body2" color="textSecondary" mb={0.5}>
                  No. DUPAT
                </Typography>
                <TextField
                  value={dupat.idDupat || ""}
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
                  value={formatDate(dupat.tanggalDupat)}
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
                  value={dupat.namaPengguna || "-"}
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
                  value={dupat.statusDupat || ""}
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
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                Description
              </Typography>
              <TextField
                value={dupat.keteranganDupat || ""}
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
                    align={column.align}
                    sx={{ fontWeight: "bold", py: 1.5 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">Loading...</TableCell>
                </TableRow>
              ) : filteredItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">No items in this dupat</TableCell>
                </TableRow>
              ) : (
                filteredItems
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => {
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
                      </TableRow>
                    );
                  })
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1.5}>
          <Typography>
            Showing {filteredItems.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, filteredItems.length)} of {filteredItems.length} entries
          </Typography>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={filteredItems.length}
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
          <Typography variant="h5" fontWeight="bold" mb={1}>Approve DUPAT?</Typography>
          <Typography color="textSecondary">Are you sure you want to approve this DUPAT?</Typography>
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
            Are you sure you want to reject this DUPAT?
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

export default DupatDetailKoorUPT;
