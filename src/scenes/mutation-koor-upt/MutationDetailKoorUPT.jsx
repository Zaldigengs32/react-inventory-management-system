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
  Dialog,
  DialogContent,
  DialogActions,
  Chip,
} from "@mui/material";
import { tokens } from "../../theme";
import { Warning, CheckCircle, PictureAsPdf, Description } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import logoAstratech from "../../assets/images/LogoAstratech.png";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const MutationDetailKoorUPT = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const navigate = useNavigate();
  const basePath = "/dashboardKoorUPT";

  const [mutation, setMutation] = useState(null);
  const [detailItems, setDetailItems] = useState([]);
  const [barangList, setBarangList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Approve Modal
  const [approveModalOpen, setApproveModalOpen] = useState(false);
  
  // Reject Modal
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [rejectError, setRejectError] = useState(false);

  // Success Modal
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchBarang();
    fetchMutationDetail();
  }, [id]);

  const fetchBarang = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Barang`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setBarangList(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching barang:", error);
    }
  };

  const getBarangInfo = (idBarang) => {
    return barangList.find(b => b.idBarang === idBarang) || {};
  };


  const fetchMutationDetail = async () => {
    try {
      // Fetch mutation info
      const mutationRes = await fetch(`${API_BASE_URL}/api/Mutasi/${id}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (mutationRes.ok) {
        const result = await mutationRes.json();
        const mutationData = result.data || result;
        console.log("Mutation data:", mutationData); // Debug
        setMutation(mutationData);
      }

      // Fetch detail items
      const detailRes = await fetch(`${API_BASE_URL}/api/Mutasi/${id}/detail`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (detailRes.ok) {
        const result = await detailRes.json();
        const data = result.data || result || [];
        setDetailItems(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching mutation detail:", error);
    } finally {
      setLoading(false);
    }
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setSuccessModalOpen(true);
  };

  const handleApprove = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      let currentUser = null;
      if (storedUser) {
        currentUser = JSON.parse(storedUser);
      }

      const approveData = {
        idMutasi: parseInt(id),
        statusMutasi: "Approved",
        disetujuiOleh: currentUser?.namaPengguna || "Koor UPT",
        modifiedBy: currentUser?.idPengguna || "1",
      };

      const response = await fetch(`${API_BASE_URL}/api/Mutasi/approve`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(approveData),
      });

      if (response.ok) {
        setApproveModalOpen(false);
        showSuccess("Mutation approved successfully!");
        fetchMutationDetail();
      } else {
        alert("Failed to approve mutation");
      }
    } catch (error) {
      console.error("Error approving mutation:", error);
      alert("Failed to approve mutation");
    }
  };

  const handleReject = async () => {
    if (!rejectReason.trim()) {
      setRejectError(true);
      return;
    }

    try {
      const storedUser = localStorage.getItem("user");
      let currentUser = null;
      if (storedUser) {
        currentUser = JSON.parse(storedUser);
      }

      const rejectData = {
        idMutasi: parseInt(id),
        statusMutasi: "Rejected",
        alasanPenolakan: rejectReason,
        disetujuiOleh: currentUser?.namaPengguna || "Koor UPT",
        modifiedBy: currentUser?.idPengguna || "1",
      };

      const response = await fetch(`${API_BASE_URL}/api/Mutasi/approve`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(rejectData),
      });

      if (response.ok) {
        setRejectModalOpen(false);
        setRejectReason("");
        showSuccess("Mutation rejected successfully!");
        fetchMutationDetail();
      } else {
        alert("Failed to reject mutation");
      }
    } catch (error) {
      console.error("Error rejecting mutation:", error);
      alert("Failed to reject mutation");
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  const filteredItems = detailItems.filter((item) => {
    const barang = getBarangInfo(item.idBarang);
    const search = searchTerm.trim().toLowerCase();
    return !search || 
      barang.namaBarang?.toLowerCase().includes(search) ||
      barang.nomorAktiva?.toLowerCase().includes(search) ||
      item.namaBarang?.toLowerCase().includes(search) ||
      item.nomorAktiva?.toLowerCase().includes(search);
  });

  const canApproveReject = mutation?.statusMutasi === "On Progress Koor UPT";
  const isApproved = mutation?.statusMutasi === "Approved";
  const isRejected = mutation?.statusMutasi === "Rejected";

  // Export Excel function
  const handleExportExcel = () => {
    // Prepare header data
    const title1 = "PERSETUJUAN MUTASI AKTIVA TETAP";
    const docNumber = `MUTASI-${mutation?.idMutasi || id}`;

    const headerData = [
      [title1],
      [`No: ${docNumber}`],
      [],
      []
    ];

    // Prepare table data with headers
    const tableData = [
      ['No', 'Nomor Aktiva Tetap', 'Nama Aktiva Tetap', 'Dari Ruang', 'Ke Ruang', 'Kondisi', 'Keterangan']
    ];

    // Add data rows
    filteredItems.forEach((item, index) => {
      const barang = getBarangInfo(item.idBarang);
      tableData.push([
        index + 1,
        barang.nomorAktiva || item.nomorAktiva || '-',
        barang.namaBarang || item.namaBarang || '-',
        mutation?.lokasiAsal || '-',
        mutation?.lokasiTujuan || '-',
        item.kondisiBarang || 'Good',
        item.catatan || '-'
      ]);
    });

    // Combine header and table data
    const allData = headerData.concat(tableData);
    const ws = XLSX.utils.aoa_to_sheet(allData);

    // Set column widths
    ws['!cols'] = [
      { wch: 5 },   // No
      { wch: 20 },  // Nomor Aktiva
      { wch: 47 },  // Nama Aktiva
      { wch: 25 },  // Dari Ruang
      { wch: 25 },  // Ke Ruang
      { wch: 15 },  // Kondisi
      { wch: 30 }   // Keterangan
    ];

    // Merge cells for title rows
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }, // Title
      { s: { r: 1, c: 0 }, e: { r: 1, c: 6 } }, // Doc Number
      { s: { r: 2, c: 0 }, e: { r: 2, c: 6 } }, // Empty row
    ];

    // Apply AutoFilter to table
    const dataRange = XLSX.utils.decode_range(ws['!ref']);
    ws['!autofilter'] = {
      ref: XLSX.utils.encode_range({
        s: { r: 4, c: 0 },
        e: { r: dataRange.e.r, c: 6 },
      }),
    };

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Mutasi');
    XLSX.writeFile(wb, `Mutasi_${mutation?.idMutasi || id}.xlsx`);
  };

  // Export PDF function
  const handleExportPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Alignments
    const alignmentWidth = 188;
    const alignmentMargin = (pageWidth - alignmentWidth) / 2;

    // Logo (kiri atas)
    const logoHeight = 18;
    const logoWidth = 45; // Adjust based on logo aspect ratio
    doc.addImage(logoAstratech, 'PNG', alignmentMargin, 15, logoWidth, logoHeight);

    // Nomor & Tanggal (kanan atas, sejajar logo)
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const labelX = alignmentMargin + alignmentWidth - 55;
    const colonX = labelX + 18;
    const endX = alignmentMargin + alignmentWidth;

    doc.text('Nomor', labelX, 18);
    doc.text(':', colonX, 18);
    const dotCount = Math.floor((endX - (colonX + 3)) / 1.2);
    doc.text('.'.repeat(dotCount), colonX + 3, 18);

    // Tanggal otomatis hari ini
    const today = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const todayFormatted = today.toLocaleDateString('id-ID', options);
    doc.text('Tanggal', labelX, 25);
    doc.text(': ' + todayFormatted, colonX, 25);

    // Title (di bawah logo)
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('PERSETUJUAN MUTASI AKTIVA TETAP', pageWidth / 2, 45, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Mohon agar Aktiva Tetap dengan data sebagai berikut dimutasikan :', alignmentMargin, 60);

    // Section DARI
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.setFillColor(0, 0, 0);
    doc.rect(alignmentMargin, 65, alignmentWidth, 7, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('DARI', pageWidth / 2, 70, { align: 'center' });

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.rect(alignmentMargin, 72, alignmentWidth, 8, 'S');
    doc.text('UPT/DIR/Dept', alignmentMargin + 3, 77);
    doc.text(': ' + (mutation?.lokasiAsal || '-'), alignmentMargin + 33, 77);

    // Section KE
    doc.setFillColor(0, 0, 0);
    doc.rect(alignmentMargin, 80, alignmentWidth, 7, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('KE', pageWidth / 2, 85, { align: 'center' });

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.rect(alignmentMargin, 87, alignmentWidth, 8, 'S');
    doc.text('UPT/DIR/Dept', alignmentMargin + 3, 92);
    doc.text(': ' + (mutation?.lokasiTujuan || '-'), alignmentMargin + 33, 92);

    // Table data
    const tableData = filteredItems.map((item, index) => {
      const barang = getBarangInfo(item.idBarang);
      return [
        index + 1,
        barang.nomorAktiva || item.nomorAktiva || '-',
        barang.namaBarang || item.namaBarang || '-',
        mutation?.lokasiAsal || '-',
        mutation?.lokasiTujuan || '-',
        item.kondisiBarang || barang.kondisiBarang || 'Good'
      ];
    });

    autoTable(doc, {
      startY: 99,
      head: [['NO', 'ASSET NO.', 'NAMA ASSET', 'Dari Ruang', 'Ke Ruang', 'KETERANGAN']],
      body: tableData,
      theme: 'grid',
      headStyles: { 
        fillColor: [255, 255, 255], 
        textColor: [0, 0, 0], 
        fontStyle: 'bold', 
        halign: 'center', 
        lineWidth: 0.5, 
        lineColor: [0, 0, 0], 
        fontSize: 10 
      },
      bodyStyles: { 
        textColor: [0, 0, 0], 
        lineWidth: 0.5, 
        lineColor: [0, 0, 0], 
        halign: 'center' 
      },
      columnStyles: { 
        0: { cellWidth: 12 }, 
        1: { cellWidth: 26 }, 
        2: { cellWidth: 55 }, 
        3: { cellWidth: 35 }, 
        4: { cellWidth: 35 }, 
        5: { cellWidth: 25 } 
      },
      margin: { left: alignmentMargin },
      styles: { fontSize: 10, cellPadding: 3 }
    });

    // --- TANDA TANGAN (SIGNATURE) - 3 KOLOM ---
    const signatureY = (doc.lastAutoTable?.finalY || 150) + 30;
    const pageCenterX = pageWidth / 2;
    const colWidth = alignmentWidth / 3;
    const leftSignX = alignmentMargin + (colWidth / 2);
    const centerSignX = pageCenterX;
    const rightSignX = alignmentMargin + alignmentWidth - (colWidth / 2);

    // Posisi kiri sejajar dengan kurung tanda tangan
    const leftColTextX = leftSignX - 30;
    const centerColTextX = centerSignX - 30;
    const rightColTextX = rightSignX - 30;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Kolom Kiri - Pengirim
    doc.text('Pengirim', leftSignX, signatureY, { align: 'center' });
    doc.text('(........................................)', leftSignX, signatureY + 30, { align: 'center' });
    doc.text('Nama :', leftColTextX, signatureY + 37);
    doc.text('Tanggal :', leftColTextX, signatureY + 44);

    // Kolom Tengah - Penerima
    doc.text('Penerima', centerSignX, signatureY, { align: 'center' });
    doc.text('(........................................)', centerSignX, signatureY + 30, { align: 'center' });
    doc.text('Nama :', centerColTextX, signatureY + 37);
    doc.text('Tanggal :', centerColTextX, signatureY + 44);

    // Kolom Kanan - General Affair
    doc.text('General Affair', rightSignX, signatureY, { align: 'center' });
    doc.text('(........................................)', rightSignX, signatureY + 30, { align: 'center' });
    doc.text('Nama :', rightColTextX, signatureY + 37);
    doc.text('Tanggal :', rightColTextX, signatureY + 44);

    doc.setFontSize(8);
    doc.text('*) nomor diisi oleh GA', rightSignX, signatureY + 52, { align: 'center' });

    // Kalimat Dicopi 2x
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const copyText = 'Dicopi 2x, Distribusi: lembar asli --> GA, copy 1 --> Penerima Aktiva, copy 2 --> Pengirim Aktiva';
    doc.text(copyText, alignmentMargin, signatureY + 60);

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 25;
    doc.setDrawColor(180, 180, 180);
    doc.line(20, footerY, pageWidth - 20, footerY);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('Dokumen ini dicetak secara otomatis oleh Sistem Manajemen Asset', pageCenterX, footerY + 7, { align: 'center' });
    doc.text(`UPT Informatika - Politeknik Astra © ${new Date().getFullYear()}`, pageCenterX, footerY + 12, { align: 'center' });

    doc.save(`Mutasi_${mutation?.idMutasi || id}.pdf`);
  };


  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Mutation Detail
        </Typography>
      </Box>

      {/* Main Content Paper */}
      <Paper sx={{ p: 3, borderRadius: "12px", backgroundColor: colors.primary[400] }}>
        {/* Header with buttons */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Mutation Detail
          </Typography>
          <Box display="flex" gap={1}>
            {isApproved && (
              <>
                <Button
                  variant="contained"
                  startIcon={<Description />}
                  onClick={handleExportExcel}
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
                  onClick={handleExportPDF}
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
              onClick={() => navigate(`${basePath}/mutation`)}
              sx={{
                backgroundColor: "#6b7280",
                "&:hover": { backgroundColor: "#4b5563" },
                textTransform: "none",
              }}
            >
              Back
            </Button>
          </Box>
        </Box>

        {/* Mutation Info */}
        <Box display="flex" flexDirection="column" gap={2} mb={3}>
          {/* Row 1: Origin Location, Destination Location, Mutation Date */}
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>Origin Location</Typography>
              <TextField
                value={mutation?.lokasiAsal || ""}
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
                  },
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>Destination Location</Typography>
              <TextField
                value={mutation?.lokasiTujuan || ""}
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
                  },
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>Mutation Date</Typography>
              <TextField
                value={formatDate(mutation?.tanggalMutasi)}
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
                  },
                }}
              />
            </Box>
          </Box>
          
          {/* Row 2: Mutation Reason (full width) */}
          <Box>
            <Typography variant="body2" color="textSecondary" mb={0.5}>Mutation Reason</Typography>
            <TextField
              value={mutation?.alasanMutasi || ""}
              fullWidth
              size="small"
              disabled
              multiline
              rows={2}
              sx={{ 
                backgroundColor: "#f3f4f6",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#e5e7eb" },
                },
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                  color: "#000000",
                },
              }}
            />
          </Box>
        </Box>

        {/* Rejection Reason - Show only when rejected */}
        {isRejected && (
          <Box sx={{ p: 2, mb: 3, backgroundColor: "#fef2f2", borderRadius: "8px", border: "1px solid #fecaca" }}>
            <Typography variant="subtitle1" fontWeight="bold" color="#991b1b">
              Rejection Reason:
            </Typography>
            <Typography color="#991b1b">
              {mutation?.alasanPenolakan || mutation?.rejectionReason || mutation?.alasan_penolakan || mutation?.keteranganPenolakan || "No reason provided"}
            </Typography>
          </Box>
        )}

        {/* Entries and Search */}
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

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>No</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Inventory</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Asset/Non Asset Number</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Condition</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">Loading...</TableCell>
                </TableRow>
              ) : filteredItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">No data available</TableCell>
                </TableRow>
              ) : (
                filteredItems
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => {
                    const barang = getBarangInfo(item.idBarang);
                    const namaBarang = barang.namaBarang || item.namaBarang || "-";
                    const nomorAktiva = barang.nomorAktiva || item.nomorAktiva || "-";
                    const kategoriBarang = barang.kategoriBarang || item.kategoriBarang || "Asset";
                    const tipeBarang = barang.tipeBarang || item.tipeBarang || "Non Consumable";
                    // Use condition from detail mutasi (item), not from master barang
                    const kondisiBarang = item.kondisiBarang || barang.kondisiBarang || "Good";
                    
                    return (
                      <TableRow key={item.idDtlMutasi || index} hover>
                        <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={1}>
                            <img
                              src={`/src/assets/Barang/${nomorAktiva}.jpg`}
                              alt={namaBarang}
                              style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4 }}
                              onError={(e) => { 
                                const ext = e.target.src.split('.').pop();
                                if (ext === 'jpg') {
                                  e.target.src = `/src/assets/Barang/${nomorAktiva}.jpeg`;
                                } else if (ext === 'jpeg') {
                                  e.target.src = `/src/assets/Barang/${nomorAktiva}.png`;
                                } else {
                                  e.target.style.display = 'none';
                                }
                              }}
                            />
                            <Box>
                              <Typography fontWeight="bold">{namaBarang}</Typography>
                              <Box display="flex" gap={0.5} mt={0.5}>
                                <Chip
                                  label={kategoriBarang}
                                  size="small"
                                  sx={{ 
                                    fontSize: "10px", 
                                    height: 20,
                                    backgroundColor: kategoriBarang?.toLowerCase() === "asset" ? "#4caf50" : "#90caf9",
                                    color: "#fff",
                                  }}
                                />
                                <Chip
                                  label={tipeBarang}
                                  size="small"
                                  sx={{ 
                                    fontSize: "10px", 
                                    height: 20,
                                    backgroundColor: (tipeBarang?.toLowerCase() === "consumable" || tipeBarang?.toLowerCase() === "consummable") ? "#8b5cf6" : "#ec4899",
                                    color: "#fff",
                                  }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="center">{nomorAktiva}</TableCell>
                        <TableCell align="center">{item.kuantitas || 1}</TableCell>
                        <TableCell align="center">
                          <Chip
                            label={kondisiBarang}
                            size="small"
                            sx={{
                              backgroundColor: kondisiBarang?.toLowerCase() === "good" ? "#dcfce7" : "#fee2e2",
                              color: kondisiBarang?.toLowerCase() === "good" ? "#16a34a" : "#dc2626",
                              fontWeight: 500,
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">{item.catatan || "-"}</TableCell>
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
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
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
          <Typography variant="h5" fontWeight="bold" mb={1}>Approve MUTASI?</Typography>
          <Typography color="textSecondary">Are you sure you want to approve this MUTASI?</Typography>
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
            Are you sure you want to reject this MUTASI?
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

export default MutationDetailKoorUPT;
