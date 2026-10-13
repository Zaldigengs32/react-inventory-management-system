import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
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
  TextField,
  Grid,
  Alert,
  AlertTitle,
} from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack, FileDownload, PictureAsPdf, Cancel } from "@mui/icons-material";
import dayjs from "dayjs";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import logoAstratech from "../../assets/images/LogoAstratech.png";
import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

const API_BASE_URL = "https://localhost:7130";

const StockOpnameKoorUPTDetail = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { id } = useParams();
  const basePath = "/dashboardKoorUPT";

  const [stockOpname, setStockOpname] = useState(null);
  const [items, setItems] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  
  // Pagination and search
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Master data
  const [ruanganList, setRuanganList] = useState([]);
  const [penyimpananList, setPenyimpananList] = useState([]);

  // Modal states
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [rejectError, setRejectError] = useState("");

  // User info
  const [currentUser, setCurrentUser] = useState(null);
  const [koorUptName, setKoorUptName] = useState("");

  useEffect(() => {
    fetchStockOpnameDetail();
    fetchCurrentUser();
    fetchRuangan();
    fetchPenyimpanan();
  }, [id]);

  // Debug: Log status untuk melihat nilai sebenarnya
  useEffect(() => {
    if (stockOpname) {
      console.log("Stock Opname Status:", stockOpname.soStatus);
      console.log("Should show buttons:", 
        stockOpname.soStatus === "On Progress Approval Koor UPT" || 
        stockOpname.soStatus === "On Progress Koor UPT" ||
        (stockOpname.soStatus?.toLowerCase().includes("on progress") && 
         stockOpname.soStatus?.toLowerCase().includes("koor upt"))
      );
    }
  }, [stockOpname]);

  const fetchCurrentUser = async () => {
    try {
      // Get current user from localStorage or session
      const storedUser = localStorage.getItem("user");
      
      if (storedUser) {
        const user = JSON.parse(storedUser);
        
        // Try different possible property names for role
        const role = user.rolePengguna || user.role || user.Role || user.userRole || 
                     user.UserRole || user.roleUser || user.RoleUser;
        const name = user.namaPengguna || user.userName || user.UserName || 
                     user.name || user.Name;
        
        setCurrentUser({ role: role, name: name });
      } else {
        // Fallback to individual items
        const userRole = localStorage.getItem("userRole");
        const userName = localStorage.getItem("userName");
        setCurrentUser({ role: userRole, name: userName });
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  const fetchRuangan = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Ruangan`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
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
      const response = await fetch(`${API_BASE_URL}/api/Penyimpanan`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        setPenyimpananList(result.data || result || []);
      }
    } catch (error) {
      console.error("Error fetching penyimpanan:", error);
    }
  };

  const getRuanganName = (idRuangan) => {
    const ruangan = ruanganList.find(r => r.idRuangan === idRuangan);
    return ruangan?.namaRuangan || "-";
  };

  const getPenyimpananName = (idPenyimpanan) => {
    const penyimpanan = penyimpananList.find(p => p.idPenyimpanan === idPenyimpanan);
    return penyimpanan?.namaPenyimpanan || "-";
  };

  const fetchStockOpnameDetail = async () => {
    try {
      // Fetch stock opname header
      const soResponse = await fetch(`${API_BASE_URL}/api/StockOpname/${id}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });

      if (soResponse.ok) {
        const soResult = await soResponse.json();
        const soData = soResult.data || soResult;
        setStockOpname(soData);

        // Fetch detail items
        const itemsResponse = await fetch(`${API_BASE_URL}/api/DtlStockOpname/byopname/${id}`, {
          method: "GET",
          headers: { "Accept": "application/json" },
        });

        if (itemsResponse.ok) {
          const itemsResult = await itemsResponse.json();
          const itemsData = itemsResult.data || itemsResult || [];
          setItems(Array.isArray(itemsData) ? itemsData : []);
        }

        // Fetch contributors (if available)
        // This would need an API endpoint for contributors
        // For now, we'll use mock data
        setContributors([]);

        // Fetch Koor UPT name
        const penggunaResponse = await fetch(`${API_BASE_URL}/api/Pengguna`, {
          method: "GET",
          headers: { "Accept": "application/json" },
        });

        if (penggunaResponse.ok) {
          const penggunaResult = await penggunaResponse.json();
          const penggunaData = penggunaResult.data || penggunaResult || [];
          const koorUpt = penggunaData.find(p => p.role === "Koor UPT");
          if (koorUpt) {
            setKoorUptName(koorUpt.namaPengguna);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching stock opname detail:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/StockOpname/${id}/approve`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setSuccessMessage("Stock opname approved successfully!");
        setSuccessModalOpen(true);
        setTimeout(() => {
          navigate(`${basePath}/stock-opname`);
        }, 2000);
      } else {
        alert("Failed to approve stock opname");
      }
    } catch (error) {
      console.error("Error approving stock opname:", error);
      alert("Error approving stock opname");
    }
  };

  const handleReject = async () => {
    if (!rejectReason.trim()) {
      setRejectError("Rejection reason is required!");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/StockOpname/${id}/reject`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ rejectReason: rejectReason }),
      });

      if (response.ok) {
        setRejectModalOpen(false);
        setSuccessMessage("Stock opname has been rejected.");
        setSuccessModalOpen(true);
        setTimeout(() => {
          navigate(`${basePath}/stock-opname`);
        }, 2000);
      } else {
        alert("Failed to reject stock opname");
      }
    } catch (error) {
      console.error("Error rejecting stock opname:", error);
      alert("Error rejecting stock opname");
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  const formatDateIndonesia = (dateString) => {
    if (!dateString) return "-";
    const bulanIndo = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = bulanIndo[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const getConditionColor = (condition) => {
    switch (condition?.toLowerCase()) {
      case "good":
        return { bg: "#dcfce7", color: "#16a34a" };
      case "not good":
        return { bg: "#fef9c3", color: "#ca8a04" };
      case "minor damaged":
        return { bg: "#fed7aa", color: "#ea580c" };
      case "major damaged":
        return { bg: "#fecaca", color: "#dc2626" };
      default:
        return { bg: "#e5e7eb", color: "#6b7280" };
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return { bg: "#dbeafe", color: "#1d4ed8" };
      case "rejected":
        return { bg: "#fecaca", color: "#dc2626" };
      case "on progress approval koor upt":
        return { bg: "#ddd6fe", color: "#7c3aed" };
      default:
        return { bg: "#e5e7eb", color: "#6b7280" };
    }
  };

  const exportToPDF = () => {
    if (!stockOpname) return;

    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Logo
    const logoImg = new Image();
    logoImg.src = logoAstratech;
    
    logoImg.onload = function () {
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);

      // Logo - di kiri atas, ukuran diperkecil
      const logoHeight = 12;
      const logoWidth = (logoImg.width / logoImg.height) * logoHeight;
      doc.addImage(logoImg, 'PNG', margin, 12, logoWidth, logoHeight);

      // Title dengan underline
      let yPos = 40;
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      
      // Judul dengan deskripsi di samping
      const title1 = 'STOCK OPNAME ASSET';
      const title2 = stockOpname.soDeskripsi ? stockOpname.soDeskripsi.toUpperCase() : '';
      const fullTitle = title2 ? `${title1} - ${title2}` : `${title1} - -`;
      doc.text(fullTitle, pageWidth / 2, yPos, { align: 'center' });
      const fullTitleWidth = doc.getTextWidth(fullTitle);
      doc.setLineWidth(0.5);
      doc.line((pageWidth - fullTitleWidth) / 2, yPos + 1, (pageWidth + fullTitleWidth) / 2, yPos + 1);

      // Nomor dokumen
      yPos += 6;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const docNumber = `SO-${stockOpname.soIdOpname}`;
      doc.text(`No: ${docNumber}`, pageWidth / 2, yPos, { align: 'center' });

      // Paragraf pembuka - dengan "di UPT Informatika"
      yPos += 10;
      const startDate = formatDateIndonesia(stockOpname.soStartDate);
      const endDate = stockOpname.soEndDate ? formatDateIndonesia(stockOpname.soEndDate) : '-';
      doc.setFontSize(11);
      const paragraf = `Pada tanggal ${startDate} hingga ${endDate} telah dilakukan Stock Opname Asset di UPT Informatika, dengan rincian sebagai berikut:`;
      const splitParagraf = doc.splitTextToSize(paragraf, contentWidth);
      doc.text(splitParagraf, margin, yPos);
      yPos += splitParagraf.length * 5 + 5;

      // Tim Stock Opname
      doc.setFont('helvetica', 'bold');
      doc.text('Tim Stock Opname:', margin, yPos);
      doc.setFont('helvetica', 'normal');

      // Kontributor list - 2 kolom layout
      const col1X = margin + 8;  // Kolom untuk nomor & label
      const col2X = margin + 55; // Kolom untuk nama

      // 1. PIC Stock Opname (fixed: Roni Prasetyo)
      yPos += 8;
      doc.text('1.', col1X, yPos);
      doc.text('PIC Stock Opname', col1X + 5, yPos);
      doc.text(': Roni Prasetyo', col2X, yPos);

      // 2. Anggota - semua dalam satu nomor dengan multiple baris
      if (contributors && contributors.length > 0) {
        yPos += 8;
        doc.text('2.', col1X, yPos);
        doc.text('Anggota', col1X + 5, yPos);
        
        // Loop untuk semua anggota
        contributors.forEach((contributor, idx) => {
          if (idx === 0) {
            // Anggota pertama di baris yang sama dengan label "Anggota"
            doc.text(`: ${contributor.namaPengguna || contributor.name || contributor.userName}`, col2X, yPos);
          } else {
            // Anggota berikutnya di baris baru dengan spacing 6px
            yPos += 6;
            doc.text(`: ${contributor.namaPengguna || contributor.name || contributor.userName}`, col2X, yPos);
          }
        });
      }

      // Data Stock Opname
      yPos += 10;
      doc.setFont('helvetica', 'bold');
      doc.text('Data Stock Opname:', margin, yPos);
      doc.setFont('helvetica', 'normal');
      yPos += 7;
      doc.text('1.', col1X, yPos);
      const lampiranText = `Lampiran 1 Data ${stockOpname.soDeskripsi || ''}`;
      doc.text(lampiranText, col1X + 5, yPos);

      // Catatan dengan border box - Summary dari item
      yPos += 10;
      doc.setFont('helvetica', 'bold');
      doc.text('Catatan:', margin, yPos);
      doc.setFont('helvetica', 'normal');

      // Generate summary dari items
      const qtyZero = items.filter(item => item.soQuantity === 0).length;
      const kondisiGood = items.filter(item => item.kondisiBarang === 'Good').length;
      const kondisiNotGood = items.filter(item => item.kondisiBarang === 'Not Good').length;
      const kondisiMinor = items.filter(item => item.kondisiBarang === 'Minor Damaged').length;
      const kondisiMajor = items.filter(item => item.kondisiBarang === 'Major Damaged').length;
      const totalItems = items.length;

      // Draw box untuk catatan
      yPos += 3;
      const boxStartY = yPos;
      const boxPadding = 4;
      let catatanY = yPos + boxPadding + 3;

      // Summary catatan tanpa nama item
      if (totalItems === 0) {
        doc.text('- Tidak ada item', margin + boxPadding + 5, catatanY);
        catatanY += 5;
      } else {
        if (qtyZero > 0) {
          doc.text(`- ${qtyZero} Item 0 Kuantitasnya`, margin + boxPadding + 5, catatanY);
          catatanY += 5;
        }
        if (kondisiGood > 0) {
          doc.text(`- ${kondisiGood} Item Good`, margin + boxPadding + 5, catatanY);
          catatanY += 5;
        }
        if (kondisiNotGood > 0) {
          doc.text(`- ${kondisiNotGood} Item Not Good`, margin + boxPadding + 5, catatanY);
          catatanY += 5;
        }
        if (kondisiMinor > 0) {
          doc.text(`- ${kondisiMinor} Item Minor Damaged`, margin + boxPadding + 5, catatanY);
          catatanY += 5;
        }
        if (kondisiMajor > 0) {
          doc.text(`- ${kondisiMajor} Item Major Damaged`, margin + boxPadding + 5, catatanY);
          catatanY += 5;
        }
      }

      const boxHeight = catatanY - boxStartY + boxPadding;

      // Draw border box
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(margin + 3, boxStartY, contentWidth - 6, boxHeight);

      yPos = boxStartY + boxHeight + 10;

      // Check page break
      if (yPos > pageHeight - 85) {
        doc.addPage();
        doc.addImage(logoImg, 'PNG', margin, 12, logoWidth, logoHeight);
        yPos = 40;
      }

      // Closing text
      const closingText = 'Demikian Dokumen Stock Opname ini dibuat, untuk kemudian dapat diproses sebagaimana mestinya.';
      const splitClosing = doc.splitTextToSize(closingText, contentWidth);
      doc.text(splitClosing, margin, yPos);
      yPos += splitClosing.length * 5 + 15;

      // Check page break for signatures
      if (yPos + 60 > pageHeight - 10) {
        doc.addPage();
        doc.addImage(logoImg, 'PNG', margin, 12, logoWidth, logoHeight);
        yPos = 40;
      }

      // Signatures - 2 kolom
      const leftX = pageWidth / 4;
      const rightX = (pageWidth / 4) * 3;

      doc.setFont('helvetica', 'bold');
      doc.text('Yang Menyerahkan', leftX, yPos, { align: 'center' });
      doc.text('Yang Menerima', rightX, yPos, { align: 'center' });

      doc.setFont('helvetica', 'normal');
      doc.text('Pihak Pertama', leftX, yPos + 7, { align: 'center' });
      doc.text('Pihak Kedua', rightX, yPos + 7, { align: 'center' });

      // Garis tanda tangan
      yPos += 35;
      doc.text('(........................................)', leftX, yPos, { align: 'center' });
      doc.text('(........................................)', rightX, yPos, { align: 'center' });

      // Nama dan jabatan
      doc.setFont('helvetica', 'bold');
      doc.text(stockOpname.soPic || 'PIC Name', leftX, yPos + 6, { align: 'center' });
      doc.text(koorUptName || 'Koor UPT Name', rightX, yPos + 6, { align: 'center' });

      doc.setFont('helvetica', 'normal');
      doc.text('PIC Asset UPT Informatika', leftX, yPos + 12, { align: 'center' });
      doc.text('Kepala UPT Informatika', rightX, yPos + 12, { align: 'center' });

      // ========== PAGE 2: Table Data ==========
      doc.addPage();

      // Header for page 2 - logo di kiri
      doc.addImage(logoImg, 'PNG', margin, 12, logoWidth, logoHeight);

      // Lampiran header
      let tableYPos = 40;
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');

      // LAMPIRAN 1 - centered with underline
      const lampiran1Text = 'LAMPIRAN 1';
      doc.text(lampiran1Text, pageWidth / 2, tableYPos, { align: 'center' });
      const lampiran1Width = doc.getTextWidth(lampiran1Text);
      doc.setLineWidth(0.5);
      doc.line((pageWidth - lampiran1Width) / 2, tableYPos + 1, (pageWidth + lampiran1Width) / 2, tableYPos + 1);

      // DATA + deskripsi session - centered with underline
      tableYPos += 7;
      const lampiran2Text = `DATA ${stockOpname.soDeskripsi ? stockOpname.soDeskripsi.toUpperCase() : ''}`;
      doc.text(lampiran2Text, pageWidth / 2, tableYPos, { align: 'center' });
      const lampiran2Width = doc.getTextWidth(lampiran2Text);
      doc.line((pageWidth - lampiran2Width) / 2, tableYPos + 1, (pageWidth + lampiran2Width) / 2, tableYPos + 1);

      tableYPos += 10;

      // Table data
      const tableData = items.map((item, index) => [
        (index + 1).toString(),
        item.namaBarang || "-",
        item.nomorAktiva || "-",
        `${getRuanganName(item.idRuangan)} - ${getPenyimpananName(item.idPenyimpanan)}`,
        item.soQuantity?.toString() || "0",
        item.kondisiBarang || "-",
        item.keteranganTambahan || "-",
      ]);

      autoTable(doc, {
        startY: tableYPos,
        head: [["No", "Nama Barang", "Nomor Asset", "Ruangan", "Qty", "Kondisi", "Keterangan"]],
        body: tableData,
        theme: 'grid',
        headStyles: { 
          fillColor: [255, 255, 255], 
          textColor: [0, 0, 0], 
          fontStyle: 'bold', 
          halign: 'center',
          fontSize: 9
        },
        bodyStyles: { 
          textColor: [0, 0, 0], 
          fontSize: 8,
          halign: 'center',
          overflow: 'linebreak'
        },
        columnStyles: {
          0: { cellWidth: 10, halign: 'center' },
          1: { cellWidth: 50, halign: 'left' },
          2: { cellWidth: 22, halign: 'center' },
          3: { cellWidth: 28, halign: 'center' },
          4: { cellWidth: 15, halign: 'center' },
          5: { cellWidth: 20, halign: 'center' },
          6: { cellWidth: 40, halign: 'left', overflow: 'linebreak' }
        },
        margin: { left: (pageWidth - 185) / 2, right: (pageWidth - 185) / 2, top: 30 },
        styles: { 
          cellPadding: 2,
          overflow: 'linebreak',
          cellWidth: 'wrap',
          lineColor: [0, 0, 0],
          lineWidth: 0.3
        },
        didDrawPage: function(data) {
          // Add logo di kiri on each new page (skip first table page since we already added it)
          if (data.pageNumber > 1) {
            doc.addImage(logoImg, 'PNG', margin, 12, logoWidth, logoHeight);
          }
        }
      });

      // Footer
      const footerY = pageHeight - 15;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(100, 100, 100);
      doc.text('Dokumen ini dicetak secara otomatis oleh Sistem Manajemen Asset', pageWidth / 2, footerY, { align: 'center' });
      doc.text(`UPT Informatika - Politeknik Astra © ${new Date().getFullYear()}`, pageWidth / 2, footerY + 5, { align: 'center' });

      doc.save(`StockOpname_${stockOpname.soIdOpname}.pdf`);
    };

    logoImg.onerror = function () {
      alert("Failed to load logo image");
    };
  };

  const exportToExcel = () => {
    if (!stockOpname) return;

    // Create workbook
    const wb = XLSX.utils.book_new();

    // Prepare header data
    const title1 = "STOCK OPNAME ASSET";
    const title2 = stockOpname.soDeskripsi ? stockOpname.soDeskripsi.toUpperCase() : "";
    const fullTitle = title2 ? `${title1} - ${title2}` : `${title1} - -`;
    const docNumber = `SO-${stockOpname.soIdOpname}`;

    const headerData = [[fullTitle], [`No: ${docNumber}`], [], []];

    // Prepare table data with headers
    const tableData = [["No", "Nama Barang", "Nomor Asset", "Ruangan", "Qty", "Kondisi", "Keterangan"]];

    items.forEach((item, index) => {
      tableData.push([
        index + 1,
        item.namaBarang || "-",
        item.nomorAktiva || "-",
        `${getRuanganName(item.idRuangan)} - ${getPenyimpananName(item.idPenyimpanan)}`,
        item.soQuantity || 0,
        item.kondisiBarang || "-",
        item.keteranganTambahan || "-",
      ]);
    });

    // Combine header and table data
    const allData = headerData.concat(tableData);
    const ws = XLSX.utils.aoa_to_sheet(allData);

    // Set column widths
    ws["!cols"] = [
      { wch: 5 },   // No
      { wch: 47 },  // Nama Barang
      { wch: 13 },  // Nomor Asset
      { wch: 23 },  // Ruangan
      { wch: 8 },   // Qty
      { wch: 15 },  // Kondisi
      { wch: 30 },  // Keterangan
    ];

    // Merge cells for title rows
    ws["!merges"] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }, // Title 1
      { s: { r: 1, c: 0 }, e: { r: 1, c: 6 } }, // Title 2
      { s: { r: 2, c: 0 }, e: { r: 2, c: 6 } }, // Empty row
    ];

    // Apply AutoFilter to table
    const dataRange = XLSX.utils.decode_range(ws["!ref"]);
    ws["!autofilter"] = {
      ref: XLSX.utils.encode_range({
        s: { r: 4, c: 0 },
        e: { r: dataRange.e.r, c: 6 },
      }),
    };

    XLSX.utils.book_append_sheet(wb, ws, "Stock Opname");

    // Generate filename
    const filename = `StockOpname_${stockOpname.soIdOpname}.xlsx`;

    // Save file
    XLSX.writeFile(wb, filename);
  };

  if (loading) {
    return (
      <Box m="20px" display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (!stockOpname) {
    return (
      <Box m="20px">
        <Typography>Stock Opname not found</Typography>
      </Box>
    );
  }

  // Check if user can export (only Koor UPT and PIC Asset)
  const canExport = stockOpname.soStatus === "Approved" && 
    currentUser && 
    (currentUser.role === "Koor UPT" || 
     currentUser.role === "Koordinator UPT" ||
     currentUser.role === "PIC Asset" || 
     currentUser.role === "PIC Lab" ||
     currentUser.role === "Koor_UPT" || 
     currentUser.role === "PIC_Asset");

  // Filter items based on search
  const filteredItems = items.filter((item) => {
    const search = searchTerm.trim().toLowerCase();
    return !search ||
      item.namaBarang?.toLowerCase().includes(search) ||
      item.nomorAktiva?.toLowerCase().includes(search) ||
      item.kondisiBarang?.toLowerCase().includes(search);
  });

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>
          Stock Opname Detail
        </Typography>
        <Box display="flex" gap={1}>
          {canExport && (
            <>
              <Button
                variant="contained"
                onClick={exportToExcel}
                sx={{
                  backgroundColor: "#22c55e",
                  "&:hover": { backgroundColor: "#16a34a" },
                  textTransform: "none",
                }}
              >
                Export Excel
              </Button>
              <Button
                variant="contained"
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
            onClick={() => navigate(`${basePath}/stock-opname`)}
            sx={{
              backgroundColor: "#6b7280",
              "&:hover": { backgroundColor: "#4b5563" },
              textTransform: "none",
            }}
          >
            BACK
          </Button>
        </Box>
      </Box>

      {/* Detail Card */}
      <Paper sx={{ backgroundColor: colors.primary[400], p: 3, borderRadius: "12px", mb: 3 }}>
        {/* Card Header */}
        <Box mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Stock Opname Detail
          </Typography>
        </Box>

        {/* Stock Opname Info - 4 columns */}
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mb={2}>
          <Box>
            <Typography variant="body2" color="textSecondary" mb={0.5}>
              No. Stock Opname
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={stockOpname.soIdOpname || ""}
              InputProps={{ readOnly: true }}
              sx={{ 
                backgroundColor: "#f3f4f6",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#e5e7eb" },
                },
                "& .MuiInputBase-input": {
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
              fullWidth
              size="small"
              value={formatDate(stockOpname.soStartDate)}
              InputProps={{ readOnly: true }}
              sx={{ 
                backgroundColor: "#f3f4f6",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#e5e7eb" },
                },
                "& .MuiInputBase-input": {
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
              fullWidth
              size="small"
              value={stockOpname.soPic || ""}
              InputProps={{ readOnly: true }}
              sx={{ 
                backgroundColor: "#f3f4f6",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#e5e7eb" },
                },
                "& .MuiInputBase-input": {
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
              fullWidth
              size="small"
              value={stockOpname.soStatus || ""}
              InputProps={{ readOnly: true }}
              sx={{ 
                backgroundColor: "#f3f4f6",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#e5e7eb" },
                },
                "& .MuiInputBase-input": {
                  color: "#000000",
                }
              }}
            />
          </Box>
        </Box>

        {/* Description - full width */}
        <Box>
          <Typography variant="body2" color="textSecondary" mb={0.5}>
            Description
          </Typography>
          <TextField
            fullWidth
            size="small"
            value={stockOpname.soDeskripsi || "-"}
            InputProps={{ readOnly: true }}
            sx={{ 
              backgroundColor: "#f3f4f6",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#e5e7eb" },
              },
              "& .MuiInputBase-input": {
                color: "#000000",
              }
            }}
          />
        </Box>

        {/* Rejection Reason Alert */}
        {stockOpname.soStatus === "Rejected" && stockOpname.soRejectReason && (
          <Box mt={2}>
            <Alert severity="error">
              <AlertTitle>Rejection Reason:</AlertTitle>
              {stockOpname.soRejectReason}
            </Alert>
          </Box>
        )}

        {/* Entries and Search */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} mb={2}>
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
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ borderBottom: "2px solid #e5e7eb" }}>
                <TableCell align="center" sx={{ fontWeight: "bold", py: 1.5 }}>No</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", py: 1.5 }}>Item Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", py: 1.5 }}>Lab</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", py: 1.5 }}>Storage</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", py: 1.5 }}>Qty</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", py: 1.5 }}>Condition</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", py: 1.5 }}>Description</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", py: 1.5 }}>Photo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    No items available
                  </TableCell>
                </TableRow>
              ) : (
                filteredItems
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
                  <TableRow key={item.soIdDetail || index} hover sx={{ borderBottom: "1px solid #f3f4f6" }}>
                    <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            minWidth: 48,
                            backgroundColor: colors.gray[700],
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={`/src/assets/Barang/${item.nomorAktiva}.jpg`}
                            alt={item.namaBarang}
                            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
                            onError={(e) => {
                              const ext = e.target.src.split('.').pop();
                              if (ext === 'jpg') {
                                e.target.src = `/src/assets/Barang/${item.nomorAktiva}.jpeg`;
                              } else if (ext === 'jpeg') {
                                e.target.src = `/src/assets/Barang/${item.nomorAktiva}.png`;
                              } else {
                                e.target.parentElement.innerHTML = '<span style="color: #9ca3af; font-size: 10px;">No Image</span>';
                              }
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography fontWeight="medium">{item.namaBarang || "-"}</Typography>
                          <Typography variant="caption" color={colors.gray[300]}>
                            {item.nomorAktiva || "-"}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{getRuanganName(item.idRuangan)}</TableCell>
                    <TableCell align="center">{getPenyimpananName(item.idPenyimpanan)}</TableCell>
                    <TableCell align="center">{item.soQuantity || 0}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={item.kondisiBarang || "-"}
                        size="small"
                        sx={{
                          backgroundColor: getConditionColor(item.kondisiBarang).bg,
                          color: getConditionColor(item.kondisiBarang).color,
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">{item.keteranganTambahan || "-"}</TableCell>
                    <TableCell align="center">
                      {item.fotoBarang ? (
                        <Box
                          onClick={() => {
                            setSelectedImage(`${API_BASE_URL}/uploads/${item.fotoBarang}`);
                            setImageModalOpen(true);
                          }}
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
                            alt="Stock Opname Photo"
                            style={{ 
                              width: 50, 
                              height: 50, 
                              objectFit: "cover",
                              display: "block"
                            }}
                            onError={(e) => {
                              e.target.parentElement.parentElement.innerHTML = `
                                <div style="
                                  width: 50px; 
                                  height: 50px; 
                                  background-color: #f3f4f6; 
                                  display: inline-flex; 
                                  align-items: center; 
                                  justify-content: center;
                                  border-radius: 4px;
                                  color: #9ca3af;
                                  font-size: 12px;
                                ">
                                  No Photo
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

        {/* Approval/Rejection Buttons */}
        {(stockOpname.soStatus === "On Progress Approval Koor UPT" || 
          stockOpname.soStatus === "On Progress Koor UPT" ||
          stockOpname.soStatus?.toLowerCase().includes("on progress") && 
          stockOpname.soStatus?.toLowerCase().includes("koor upt")) && (
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
              onClick={handleApprove}
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

      {/* Image Modal */}
      <Dialog
        open={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, textAlign: "center" }}>
          <img
            src={selectedImage}
            alt="Zoomed"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <SuccessModal 
        open={successModalOpen} 
        onClose={() => setSuccessModalOpen(false)} 
        message={successMessage} 
      />

      {/* Reject Modal */}
      <Dialog open={rejectModalOpen} onClose={() => setRejectModalOpen(false)} maxWidth="sm" fullWidth>
        <DialogContent sx={{ py: 4 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Reject Stock Opname
          </Typography>
          <Typography color="textSecondary" mb={3}>
            Are you sure you want to reject this stock opname?
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Rejection Reason *"
            value={rejectReason}
            onChange={(e) => {
              setRejectReason(e.target.value);
              setRejectError("");
            }}
            error={!!rejectError}
            helperText={rejectError}
            placeholder="Enter the reason for rejection..."
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            onClick={() => {
              setRejectModalOpen(false);
              setRejectReason("");
              setRejectError("");
            }}
            sx={{ color: colors.gray[300] }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleReject}
            variant="contained"
            sx={{
              backgroundColor: "#ef4444",
              "&:hover": { backgroundColor: "#dc2626" },
            }}
          >
            Reject
          </Button>
        </DialogActions>
      </Dialog>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default StockOpnameKoorUPTDetail;
