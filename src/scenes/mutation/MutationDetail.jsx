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
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Edit, Delete, Warning, Close, PictureAsPdf, Description } from "@mui/icons-material";
import { tokens } from "../../theme";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import logoAstratech from "../../assets/images/LogoAstratech.png";

import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const MutationDetail = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const location = useLocation();
  const { id: mutationId } = useParams();

  // Determine base path from current URL
  const getBasePath = () => {
    if (location.pathname.startsWith("/dashboardPIClab")) return "/dashboardPIClab";
    if (location.pathname.startsWith("/dashboardPICnonasset")) return "/dashboardPICnonasset";
    return "/dashboardPICasset";
  };
  const basePath = getBasePath();

  const [mutation, setMutation] = useState(null);
  const [detailItems, setDetailItems] = useState([]);
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

  useEffect(() => {
    fetchMutation();
    fetchDetailItems();
    fetchInventory();
  }, [mutationId]);

  const fetchMutation = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/${mutationId}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Mutation API response:", result);
        const mutationData = result.data || result;
        console.log("Mutation data:", mutationData);
        setMutation(mutationData);
      }
    } catch (error) {
      console.error("Error fetching mutation:", error);
    }
  };

  const fetchDetailItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/${mutationId}/detail`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        const data = result.data || result || [];
        setDetailItems(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching detail items:", error);
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

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(columnId);
      setOrder("asc");
    }
  };

  const handleDeleteClick = (item) => {
    setDeleteItem(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/detail/${deleteItem.idDtlMutasi}`, {
        method: "DELETE",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        fetchDetailItems();
        setDeleteModalOpen(false);
        setSuccessMessage("Item removed from mutation successfully!");
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
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setTimeout(() => setEditItem(null), 300);
  };

  const handleEditSave = async () => {
    try {
      // Call API to update detail mutasi
      const response = await fetch(`${API_BASE_URL}/api/Mutasi/detail`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idDtlMutasi: editItem.idDtlMutasi,
          kuantitas: editItem.kuantitas,
          kondisiBarang: editItem.kondisiBarang,
          catatan: editItem.catatan || null,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update item");
      }

      // Update local state after successful API call
      const updatedItems = detailItems.map(item => 
        item.idDtlMutasi === editItem.idDtlMutasi 
          ? { ...item, kuantitas: editItem.kuantitas, kondisiBarang: editItem.kondisiBarang, catatan: editItem.catatan }
          : item
      );
      setDetailItems(updatedItems);
      handleEditClose();
      setSuccessMessage("Item updated successfully!");
      setSuccessModalOpen(true);
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item. Please try again.");
    }
  };

  const filteredItems = detailItems.filter((item) => {
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

  const isApproved = mutation?.statusMutasi === "Approved";
  const isRejected = mutation?.statusMutasi === "Rejected";

  // Export Excel function
  const handleExportExcel = () => {
    // Prepare header data
    const title1 = "PERSETUJUAN MUTASI AKTIVA TETAP";
    const docNumber = `MUTASI-${mutation?.idMutasi || mutationId}`;

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
    sortedItems.forEach((item, index) => {
      const barang = getBarangInfo(item.idBarang);
      tableData.push([
        index + 1,
        barang.nomorAktiva || '-',
        barang.namaBarang || '-',
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
    XLSX.writeFile(wb, `Mutasi_${mutation?.idMutasi || mutationId}.xlsx`);
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
    const tableData = sortedItems.map((item, index) => {
      const barang = getBarangInfo(item.idBarang);
      return [
        index + 1,
        barang.nomorAktiva || '-',
        barang.namaBarang || '-',
        mutation?.lokasiAsal || '-',
        mutation?.lokasiTujuan || '-',
        item.kondisiBarang || 'Good'
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

    doc.save(`Mutasi_${mutation?.idMutasi || mutationId}.pdf`);
  };

  // Pagination
  const totalPages = Math.ceil(sortedItems.length / rowsPerPage);
  const paginatedItems = sortedItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Define columns based on mutation status
  const columns = [
    { id: "no", label: "No", sortable: true, align: "center" },
    { id: "namaBarang", label: "Inventory", sortable: true, align: "left" },
    { id: "nomorAktiva", label: "Asset Number", sortable: true, align: "center" },
    { id: "kuantitas", label: "Quantity", sortable: true, align: "center" },
    { id: "kondisiBarang", label: "Condition", sortable: true, align: "center" },
    { id: "catatan", label: "Description", sortable: true, align: "center" },
  ];

  // Only add Action column if status is Draft
  if (mutation?.statusMutasi === "Draft") {
    columns.push({ id: "action", label: "Action", sortable: false, align: "center" });
  }

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
            {mutation?.statusMutasi === "Draft" && (
              <Button
                variant="contained"
                onClick={() => navigate(`${basePath}/mutation/${mutationId}/add-item`)}
                sx={{
                  backgroundColor: "#3b82f6",
                  "&:hover": { backgroundColor: "#2563eb" },
                  textTransform: "none",
                }}
              >
                Add Item
              </Button>
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
              Close
            </Button>
          </Box>
        </Box>

        {/* Mutation Info */}
        <Box display="flex" flexDirection="column" gap={2} mb={3}>
          {/* Row 1: Origin Location, Destination Location, Mutation Date */}
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                Origin Location
              </Typography>
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
                  }
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                Destination Location
              </Typography>
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
                  }
                }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" mb={0.5}>
                Mutation Date
              </Typography>
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
                  }
                }}
              />
            </Box>
          </Box>
          
          {/* Row 2: Reason (full width) */}
          <Box>
            <Typography variant="body2" color="textSecondary" mb={0.5}>
              Mutation Reason
            </Typography>
            <TextField
              value={mutation?.alasanMutasi || "-"}
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
                }
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
                  <TableCell colSpan={columns.length} align="center" sx={{ py: 4 }}>No items in this mutation</TableCell>
                </TableRow>
              ) : (
                paginatedItems.map((item, index) => {
                  const barang = getBarangInfo(item.idBarang);
                  return (
                    <TableRow key={item.idDtlMutasi} sx={{ borderBottom: "1px solid #f3f4f6" }}>
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
                      <TableCell align="center">{item.kuantitas}</TableCell>
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
                      <TableCell align="center">{item.catatan || "-"}</TableCell>
                      {mutation?.statusMutasi === "Draft" && (
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
              <Box>
                <Typography variant="body2" mb={0.5}>Item Name <span style={{ color: "red" }}>*</span></Typography>
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
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <Box>
                  <Typography variant="body2" mb={0.5}>Asset Number <span style={{ color: "red" }}>*</span></Typography>
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
                <Box>
                  <Typography variant="body2" mb={0.5}>Quantity <span style={{ color: "red" }}>*</span></Typography>
                  <TextField
                    type="number"
                    value={editItem.kuantitas}
                    onChange={(e) => setEditItem({ ...editItem, kuantitas: parseInt(e.target.value) || 1 })}
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
                <Box>
                  <Typography variant="body2" mb={0.5}>Description</Typography>
                  <TextField
                    placeholder="Enter description (optional)"
                    value={editItem.catatan || ""}
                    onChange={(e) => setEditItem({ ...editItem, catatan: e.target.value })}
                    fullWidth
                    size="small"
                  />
                </Box>
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
            This item will be removed from the mutation.
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

export default MutationDetail;

