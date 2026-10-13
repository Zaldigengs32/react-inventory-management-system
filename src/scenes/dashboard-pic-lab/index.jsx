import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Chip,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { tokens } from "../../theme";
import Footer from "../../components/Footer";

const API_BASE_URL = "https://localhost:7130";

function DashboardPICLab() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Get logged in user
  const [currentUser, setCurrentUser] = useState(null);

  // Stats data
  const [totalAssetLoaned, setTotalAssetLoaned] = useState(0);
  const [assetLoaned30Days, setAssetLoaned30Days] = useState(0);
  const [totalNonAssetLoaned, setTotalNonAssetLoaned] = useState(0);
  const [nonAssetLoaned30Days, setNonAssetLoaned30Days] = useState(0);

  // Table data
  const [topAssetLoaned, setTopAssetLoaned] = useState([]);
  const [topNonAssetLoaned, setTopNonAssetLoaned] = useState([]);
  const [topMostLoaned, setTopMostLoaned] = useState([]);

  // Pagination for Top Most Loaned table
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Get user from localStorage
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetchDashboardData();
    }
  }, [currentUser]);

  const fetchDashboardData = async () => {
    if (!currentUser) return;

    const userId = currentUser.idPengguna || currentUser.id_pengguna;

    try {
      // Fetch ruangan to get rooms where user is PIC
      const ruanganRes = await fetch(`${API_BASE_URL}/api/Ruangan`, {
        headers: { "Accept": "application/json" },
      });
      
      let userRoomIds = [];
      if (ruanganRes.ok) {
        const ruanganResult = await ruanganRes.json();
        const ruanganData = ruanganResult.data || ruanganResult || [];
        const userRooms = ruanganData.filter(r => r.picRuangan === userId);
        userRoomIds = userRooms.map(r => r.idRuangan);
      }

      // Fetch dtl_ruangan_penyimpanan to get storage details for user's rooms
      const dtlRes = await fetch(`${API_BASE_URL}/api/DtlRuanganPenyimpanan`, {
        headers: { "Accept": "application/json" },
      });

      let userDtlIds = [];
      if (dtlRes.ok) {
        const dtlResult = await dtlRes.json();
        const dtlData = dtlResult.data || dtlResult || [];
        const userDtlPenyimpanan = dtlData.filter(d => userRoomIds.includes(d.idRuangan));
        userDtlIds = userDtlPenyimpanan.map(d => d.idDtlPenyimpanan);
      }

      // Fetch barang for inventory in user's rooms
      const barangRes = await fetch(`${API_BASE_URL}/api/Barang`, {
        headers: { "Accept": "application/json" },
      });

      let userBarang = [];
      if (barangRes.ok) {
        const barangResult = await barangRes.json();
        const barangData = barangResult.data || barangResult || [];
        userBarang = barangData.filter(b => userDtlIds.includes(b.idDtlPenyimpanan));
      }

      const userBarangIds = userBarang.map(b => b.idBarang);

      // Process top most loaned with stock status (Table 5)
      const processedData = userBarang.map(item => {
        const stock = item.jumlahBarang || 0;
        const minimum = item.jumlahMinimum || 0;
        const optimum = item.jumlahOptimum || 0;

        let status = "Very Good Quantity";
        if (stock < minimum) {
          status = "Need Addition";
        } else if (stock < optimum) {
          status = "Suboptimal Amount";
        }

        return {
          idBarang: item.idBarang,
          namaBarang: item.namaBarang,
          jumlahBarang: stock,
          jumlahMinimum: minimum,
          jumlahOptimum: optimum,
          status: status,
          kategoriBarang: item.kategoriBarang,
        };
      });

      setTopMostLoaned(processedData);

      // Fetch peminjaman and detail peminjaman for loan data
      const peminjamanRes = await fetch(`${API_BASE_URL}/api/PeminjamanBarang`, {
        headers: { "Accept": "application/json" },
      });

      const dtlPeminjamanRes = await fetch(`${API_BASE_URL}/api/DtlPeminjamanBarang`, {
        headers: { "Accept": "application/json" },
      });

      if (peminjamanRes.ok && dtlPeminjamanRes.ok) {
        const peminjamanResult = await peminjamanRes.json();
        const peminjamanData = peminjamanResult.data || peminjamanResult || [];

        const dtlPeminjamanResult = await dtlPeminjamanRes.json();
        const dtlPeminjamanData = dtlPeminjamanResult.data || dtlPeminjamanResult || [];

        // Filter active loans (Approved, Borrowed, Waiting for Return)
        const activeStatuses = ["Approved", "Borrowed", "Waiting for Return"];
        const activeLoans = peminjamanData.filter(p => activeStatuses.includes(p.statusPeminjaman));
        const activeLoanIds = activeLoans.map(p => p.idPeminjaman);

        // Get detail peminjaman for active loans AND user's barang
        const userActiveDtl = dtlPeminjamanData.filter(d => 
          activeLoanIds.includes(d.idPeminjaman) && userBarangIds.includes(d.idBarang)
        );

        // Calculate Card 1 & 2: Total Asset/Non Asset Loaned
        let assetTotal = 0;
        let nonAssetTotal = 0;
        let asset30Days = 0;
        let nonAsset30Days = 0;

        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        userActiveDtl.forEach(dtl => {
          const barang = userBarang.find(b => b.idBarang === dtl.idBarang);
          const peminjaman = activeLoans.find(p => p.idPeminjaman === dtl.idPeminjaman);
          const qty = dtl.jumlahPeminjaman || 1;

          if (barang?.kategoriBarang === "Asset") {
            assetTotal += qty;
            if (peminjaman && new Date(peminjaman.tanggalPeminjaman) >= thirtyDaysAgo) {
              asset30Days += qty;
            }
          } else if (barang?.kategoriBarang === "Non Asset") {
            nonAssetTotal += qty;
            if (peminjaman && new Date(peminjaman.tanggalPeminjaman) >= thirtyDaysAgo) {
              nonAsset30Days += qty;
            }
          }
        });

        setTotalAssetLoaned(assetTotal);
        setAssetLoaned30Days(asset30Days);
        setTotalNonAssetLoaned(nonAssetTotal);
        setNonAssetLoaned30Days(nonAsset30Days);

        // Calculate Table 3 & 4: Top 10 Asset/Non Asset Most Loaned (count peminjaman)
        // Get ALL dtl_peminjaman for user's barang (not just active)
        const allUserDtl = dtlPeminjamanData.filter(d => userBarangIds.includes(d.idBarang));

        // Count loans per barang
        const loanCountMap = {};
        allUserDtl.forEach(dtl => {
          if (!loanCountMap[dtl.idBarang]) {
            loanCountMap[dtl.idBarang] = 0;
          }
          loanCountMap[dtl.idBarang] += dtl.jumlahPeminjaman || 1;
        });

        // Create sorted list for Asset
        const assetLoanList = userBarang
          .filter(b => b.kategoriBarang === "Asset")
          .map(b => ({
            namaBarang: b.namaBarang,
            jumlahBarang: loanCountMap[b.idBarang] || 0,
          }))
          .sort((a, b) => b.jumlahBarang - a.jumlahBarang)
          .slice(0, 10);

        setTopAssetLoaned(assetLoanList);

        // Create sorted list for Non Asset
        const nonAssetLoanList = userBarang
          .filter(b => b.kategoriBarang === "Non Asset")
          .map(b => ({
            namaBarang: b.namaBarang,
            jumlahBarang: loanCountMap[b.idBarang] || 0,
          }))
          .sort((a, b) => b.jumlahBarang - a.jumlahBarang)
          .slice(0, 10);

        setTopNonAssetLoaned(nonAssetLoanList);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Need Addition": return "#ef4444";
      case "Suboptimal Amount": return "#f59e0b";
      case "Very Good Quantity": return "#22c55e";
      default: return "#9e9e9e";
    }
  };

  const filteredData = topMostLoaned.filter(item =>
    item.namaBarang?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h1" fontWeight="bold" color={colors.gray[100]}>
          Dashboard
        </Typography>
      </Box>

      {/* Row 1 - Top Cards */}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3} mb={3}>
        {/* Total Asset Loaned */}
        <Paper sx={{ p: 3, borderRadius: 2, borderLeft: "4px solid #3b82f6", backgroundColor: colors.primary[400] }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="body2" color={colors.gray[300]}>Total Asset Loaned</Typography>
              <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>{totalAssetLoaned}</Typography>
              <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                <Typography variant="body2" color={colors.gray[300]}>{assetLoaned30Days} From 30 days</Typography>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#3b82f6", borderRadius: 2, p: 1.5 }}>
              <ShoppingCart sx={{ color: "#fff", fontSize: 28 }} />
            </Box>
          </Box>
        </Paper>

        {/* Total Non Asset Loaned */}
        <Paper sx={{ p: 3, borderRadius: 2, borderLeft: "4px solid #3b82f6", backgroundColor: colors.primary[400] }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="body2" color={colors.gray[300]}>Total Non Asset Loaned</Typography>
              <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>{totalNonAssetLoaned}</Typography>
              <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                <Typography variant="body2" color={colors.gray[300]}>{nonAssetLoaned30Days} From 30 days</Typography>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#3b82f6", borderRadius: 2, p: 1.5 }}>
              <ShoppingCart sx={{ color: "#fff", fontSize: 28 }} />
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Row 2 - Top 10 Tables */}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3} mb={3}>
        {/* Top 10 Asset Most Loaned */}
        <Paper sx={{ p: 3, borderRadius: 2, backgroundColor: colors.primary[400] }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>Top 10 Asset Most Loaned</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>No.</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Inventory Name</TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>Qty</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topAssetLoaned.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center">No data</TableCell>
                  </TableRow>
                ) : (
                  topAssetLoaned.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.namaBarang}</TableCell>
                      <TableCell align="right">{item.jumlahBarang}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Top 10 Non Asset Most Loaned */}
        <Paper sx={{ p: 3, borderRadius: 2, backgroundColor: colors.primary[400] }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>Top 10 Non Asset Most Loaned</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>No.</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Inventory Name</TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>Qty</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topNonAssetLoaned.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center">No data</TableCell>
                  </TableRow>
                ) : (
                  topNonAssetLoaned.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.namaBarang}</TableCell>
                      <TableCell align="right">{item.jumlahBarang}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* Row 3 - Top 10 Most Loaned with Status */}
      <Paper sx={{ p: 3, borderRadius: 2, backgroundColor: colors.primary[400] }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>Top 10 Most Loaned</Typography>

        {/* Entries and Search */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
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

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>No↕</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Inventory Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Inventory Stock</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Qty Minimum</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Qty Optimum</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">No data available</TableCell>
                </TableRow>
              ) : (
                filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
                    <TableRow key={index} hover>
                      <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>{item.namaBarang}</TableCell>
                      <TableCell align="center">{item.jumlahBarang}</TableCell>
                      <TableCell align="center">{item.jumlahMinimum}</TableCell>
                      <TableCell align="center">{item.jumlahOptimum}</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={item.status}
                          size="small"
                          sx={{
                            backgroundColor: getStatusColor(item.status),
                            color: "#fff",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography>
            Showing {filteredData.length === 0 ? 0 : page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, filteredData.length)} of {filteredData.length} entries
          </Typography>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
          />
        </Box>
      </Paper>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default DashboardPICLab;
