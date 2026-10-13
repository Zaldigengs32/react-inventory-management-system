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
import {
  ShoppingCart,
  Inventory,
  Assignment,
  Description,
  CheckCircle,
  DashboardOutlined,
} from "@mui/icons-material";
import { tokens } from "../../theme";
import logo from "../../assets/images/logo.png";
import Footer from "../../components/Footer";

const API_BASE_URL = "https://localhost:7130";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Stats data
  const [totalAssetLoaned, setTotalAssetLoaned] = useState(0);
  const [assetLoaned30Days, setAssetLoaned30Days] = useState(0);
  const [totalNonAssetLoaned, setTotalNonAssetLoaned] = useState(0);
  const [nonAssetLoaned30Days, setNonAssetLoaned30Days] = useState(0);
  const [loanNeedsApproval, setLoanNeedsApproval] = useState(0);
  const [loanApproval30Days, setLoanApproval30Days] = useState(0);
  const [mutationDraft, setMutationDraft] = useState(0);
  const [mutationDraft30Days, setMutationDraft30Days] = useState(0);
  const [mutationApproved, setMutationApproved] = useState(0);

  // Table data
  const [topAssetLoaned, setTopAssetLoaned] = useState([]);
  const [topNonAssetLoaned, setTopNonAssetLoaned] = useState([]);
  const [topMostLoaned, setTopMostLoaned] = useState([]);

  // Pagination for Top Most Loaned table
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch mutations for draft and approved counts
      const mutasiRes = await fetch(`${API_BASE_URL}/api/Mutasi`, {
        headers: { "Accept": "application/json" },
      });
      if (mutasiRes.ok) {
        const mutasiResult = await mutasiRes.json();
        const mutasiData = mutasiResult.data || mutasiResult || [];
        
        const drafts = mutasiData.filter(m => m.statusMutasi === "Draft");
        const approved = mutasiData.filter(m => m.statusMutasi === "Approved");
        
        setMutationDraft(drafts.length);
        setMutationApproved(approved.length);
        
        // Filter 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const drafts30 = drafts.filter(m => new Date(m.tanggalMutasi) >= thirtyDaysAgo);
        setMutationDraft30Days(drafts30.length);
      }

      // Fetch barang for inventory data
      const barangRes = await fetch(`${API_BASE_URL}/api/Barang`, {
        headers: { "Accept": "application/json" },
      });
      if (barangRes.ok) {
        const barangResult = await barangRes.json();
        const barangData = barangResult.data || barangResult || [];
        
        // Process top most loaned with stock status
        const processedData = barangData.map(item => {
          const stock = item.jumlahBarang || 0;
          const minimum = item.jumlahMinimum || 0;
          const optimum = item.jumlahOptimum || 0;
          
          let status = "Very Good Quantity";
          if (stock < minimum) {
            status = "Need Addition";
          } else if (stock < optimum) {
            status = "Suboptimal";
          }
          
          return {
            namaBarang: item.namaBarang,
            jumlahBarang: stock,
            jumlahMinimum: minimum,
            jumlahOptimum: optimum,
            status: status,
            kategoriBarang: item.kategoriBarang,
          };
        });
        
        setTopMostLoaned(processedData);
        
        // Top 10 Asset
        const assetItems = processedData
          .filter(item => item.kategoriBarang === "Asset")
          .slice(0, 10);
        setTopAssetLoaned(assetItems);
        
        // Top 10 Non Asset
        const nonAssetItems = processedData
          .filter(item => item.kategoriBarang === "Non Asset")
          .slice(0, 10);
        setTopNonAssetLoaned(nonAssetItems);
      }

      // Fetch peminjaman data
      const peminjamanRes = await fetch(`${API_BASE_URL}/api/PeminjamanBarang`, {
        headers: { "Accept": "application/json" },
      });
      if (peminjamanRes.ok) {
        const peminjamanResult = await peminjamanRes.json();
        const peminjamanData = peminjamanResult.data || peminjamanResult || [];
        
        // Count loans needing approval
        const needsApproval = peminjamanData.filter(p => 
          p.statusPeminjaman === "On Progress Approval PIC Asset"
        );
        setLoanNeedsApproval(needsApproval.length);
        
        // 30 days filter
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const approval30 = needsApproval.filter(p => 
          new Date(p.tanggalPeminjaman) >= thirtyDaysAgo
        );
        setLoanApproval30Days(approval30.length);

        // Count asset and non-asset loaned
        const activeStatuses = ["Approved", "Borrowed", "Waiting for Return"];
        const activeLoans = peminjamanData.filter(p => 
          activeStatuses.includes(p.statusPeminjaman)
        );
        
        // For now, set placeholder values - these would need detail data
        setTotalAssetLoaned(activeLoans.length > 0 ? 2 : 0);
        setTotalNonAssetLoaned(activeLoans.length > 0 ? 2 : 0);
        setAssetLoaned30Days(0);
        setNonAssetLoaned30Days(0);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Need Addition": return "#ef4444";
      case "Suboptimal": return "#f59e0b";
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
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={3} mb={3}>
        {/* Total Asset Loaned */}
        <Paper sx={{ p: 3, borderRadius: 2, borderLeft: "4px solid #f59e0b", backgroundColor: colors.primary[400] }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="body2" color={colors.gray[300]}>Total Asset Loaned</Typography>
              <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>{totalAssetLoaned}</Typography>
              <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22c55e" }} />
                <Typography variant="body2" color={colors.gray[300]}>{assetLoaned30Days} From 30 days</Typography>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#fbbf24", borderRadius: 2, p: 1.5 }}>
              <ShoppingCart sx={{ color: "#fff", fontSize: 28 }} />
            </Box>
          </Box>
        </Paper>

        {/* Total Non Asset Loaned */}
        <Paper sx={{ p: 3, borderRadius: 2, borderLeft: "4px solid #f59e0b", backgroundColor: colors.primary[400] }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="body2" color={colors.gray[300]}>Total Non Asset Loaned</Typography>
              <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>{totalNonAssetLoaned}</Typography>
              <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22c55e" }} />
                <Typography variant="body2" color={colors.gray[300]}>{nonAssetLoaned30Days} From 30 days</Typography>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#fbbf24", borderRadius: 2, p: 1.5 }}>
              <ShoppingCart sx={{ color: "#fff", fontSize: 28 }} />
            </Box>
          </Box>
        </Paper>

        {/* Amount of Loan that needs Approval */}
        <Paper sx={{ p: 3, borderRadius: 2, borderLeft: "4px solid #22c55e", backgroundColor: colors.primary[400] }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="body2" color={colors.gray[300]}>Amount of Loan that needs Approval</Typography>
              <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>{loanNeedsApproval}</Typography>
              <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                <Typography variant="body2" color={colors.gray[300]}>{loanApproval30Days} From 30 days</Typography>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#22c55e", borderRadius: 2, p: 1.5 }}>
              <Inventory sx={{ color: "#fff", fontSize: 28 }} />
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Row 2 - Mutation Cards */}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3} mb={3}>
        {/* Mutation Draft */}
        <Paper sx={{ p: 3, borderRadius: 2, borderLeft: "4px solid #3b82f6", backgroundColor: colors.primary[400] }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="body2" color={colors.gray[300]}>Mutation Draft</Typography>
              <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>{mutationDraft}</Typography>
              <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                <Typography variant="body2" color={colors.gray[300]}>{mutationDraft30Days} mutations in last 30 days</Typography>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#22c55e", borderRadius: "50%", p: 1 }}>
              <Description sx={{ color: "#fff", fontSize: 24 }} />
            </Box>
          </Box>
        </Paper>

        {/* Mutation Approved */}
        <Paper sx={{ p: 3, borderRadius: 2, borderLeft: "4px solid #22c55e", backgroundColor: colors.primary[400] }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="body2" color={colors.gray[300]}>Mutation Approved</Typography>
              <Typography variant="h2" fontWeight="bold" color={colors.gray[100]}>{mutationApproved}</Typography>
              <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                <CheckCircle sx={{ color: "#22c55e", fontSize: 16 }} />
                <Typography variant="body2" color={colors.gray[300]}>Total approved mutations</Typography>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#22c55e", borderRadius: "50%", p: 1 }}>
              <CheckCircle sx={{ color: "#fff", fontSize: 24 }} />
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Row 3 - Top 10 Tables */}
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

      {/* Row 4 - Top 10 Most Loaned with Status */}
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

export default Dashboard;
