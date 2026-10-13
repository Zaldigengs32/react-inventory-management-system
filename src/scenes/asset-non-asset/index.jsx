import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Select,
  MenuItem,
  FormControl,
  Button,
  Pagination,
  ToggleButton,
  ToggleButtonGroup,
  Menu,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import logoImg from "../../assets/images/IMG_Logo.png";

const API_BASE_URL = "https://localhost:7130";

// Import semua gambar dari folder Barang
const barangImages = import.meta.glob('../../assets/Barang/*', { eager: true });

const AssetNonAsset = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ASSET & NON-ASSET");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");
  const [kategori, setKategori] = useState("");
  const [tipe, setTipe] = useState("");
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const itemsPerPage = 10;

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    handleClose();
    navigate("/login");
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Barang`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        let barang = data;
        if (data.data) barang = data.data;
        if (data.result) barang = data.result;
        setItems(Array.isArray(barang) ? barang : []);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "HOME") {
      navigate("/");
    } else if (tab === "MEMBER") {
      navigate("/member");
    }
  };

  // Ambil gambar dari folder Barang berdasarkan nomor aktiva
  const getItemPhoto = (item) => {
    const nomorAktiva = item?.nomorAktiva || item?.nomor_aktiva || item?.NomorAktiva || "";
    if (nomorAktiva) {
      // Cari gambar yang cocok dengan nomorAktiva
      const extensions = ['.jpg', '.jpeg', '.png'];
      for (const ext of extensions) {
        const key = `../../assets/Barang/${nomorAktiva}${ext}`;
        if (barangImages[key]) {
          return barangImages[key].default;
        }
      }
      // Log nomor aktiva yang tidak punya gambar
      console.log(`Gambar tidak ditemukan untuk NomorAktiva: ${nomorAktiva}`);
    }
    return null;
  };

  // Filter items
  const filteredItems = items.filter((item) => {
    const kategoriBarang = item.kategoriBarang || item.kategori_barang || "";
    const tipeBarang = item.tipeBarang || item.tipe_barang || "";
    
    if (filter === "ASSET" && kategoriBarang.toLowerCase() !== "asset") return false;
    if (filter === "NON-ASSET" && kategoriBarang.toLowerCase() !== "non asset") return false;
    if (kategori && kategoriBarang !== kategori) return false;
    if (tipe && tipeBarang !== tipe) return false;
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Get unique categories and types
  const categories = [...new Set(items.map((i) => i.kategoriBarang || i.kategori_barang).filter(Boolean))];
  const types = [...new Set(items.map((i) => i.tipeBarang || i.tipe_barang).filter(Boolean))];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          backgroundColor: "#fff",
          py: 1,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Box display="flex" alignItems="center" gap={3}>
          <img src={logoImg} alt="ASTRAtech" style={{ height: 40 }} />
          
          {/* Menu */}
          <Box display="flex" gap={2}>
            {["HOME", "MEMBER", "ASSET & NON-ASSET"].map((tab) => (
              <Typography
                key={tab}
                onClick={() => handleTabClick(tab)}
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: activeTab === tab ? "#1e88e5" : "#1e3a5f",
                  cursor: "pointer",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#1e88e5",
                    backgroundColor: "rgba(30, 136, 229, 0.08)",
                  },
                }}
              >
                {tab}
              </Typography>
            ))}
          </Box>
        </Box>

        <IconButton onClick={handleProfileClick} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: "transparent", border: "2px solid #1e88e5", width: 36, height: 36 }}>
            <AccountCircle sx={{ color: "#1e88e5", fontSize: 32 }} />
          </Avatar>
        </IconButton>

        {/* Login Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              mt: 1,
              minWidth: 150,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              p: 2,
            },
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{
              backgroundColor: "#1e88e5",
              fontWeight: 600,
              borderRadius: 2,
              py: 1,
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Login
          </Button>
        </Menu>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, p: 3 }}>
        {/* Title and Filters */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Inventory
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Dropdown Filters */}
          <Box display="flex" gap={2}>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">-- Semua Kategori --</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">-- Semua Tipe --</MenuItem>
                {types.map((t) => (
                  <MenuItem key={t} value={t}>{t}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f97316",
                "&:hover": { backgroundColor: "#ea580c" },
              }}
              onClick={() => {
                setKategori("");
                setTipe("");
                setFilter("ALL");
              }}
            >
              Filter
            </Button>
          </Box>

          {/* Toggle Buttons */}
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(e, val) => val && setFilter(val)}
            size="small"
          >
            <ToggleButton value="ALL">ALL</ToggleButton>
            <ToggleButton value="ASSET">ASSET</ToggleButton>
            <ToggleButton value="NON-ASSET">NON-ASSET</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Items Grid */}
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 2,
              }}
            >
              {paginatedItems.map((item, index) => {
                const kategoriBarang = item.kategoriBarang || item.kategori_barang || "";
                const tipeBarang = item.tipeBarang || item.tipe_barang || "";
                const isAsset = kategoriBarang.toLowerCase() === "asset";
                
                return (
                  <Card
                    key={item.idBarang || index}
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {/* Labels */}
                    <Box sx={{ position: "absolute", top: 8, left: 8, zIndex: 1 }}>
                      <Chip
                        label={isAsset ? "Asset" : "Asset"}
                        size="small"
                        sx={{
                          backgroundColor: isAsset ? "#22c55e" : "#f97316",
                          color: "#fff",
                          fontSize: "0.7rem",
                          height: 20,
                          mb: 0.5,
                          display: "block",
                        }}
                      />
                      <Chip
                        label={tipeBarang || "Non Consumable"}
                        size="small"
                        sx={{
                          backgroundColor: (tipeBarang?.toLowerCase() === "consumable" || tipeBarang?.toLowerCase() === "consummable") ? "#8b5cf6" : "#ec4899",
                          color: "#fff",
                          fontSize: "0.65rem",
                          height: 18,
                        }}
                      />
                    </Box>

                    {/* Image */}
                    <CardMedia
                      component="img"
                      height="140"
                      image={getItemPhoto(item) || logoImg}
                      alt={item.namaBarang}
                      sx={{ objectFit: "cover", backgroundColor: "#f0f0f0" }}
                    />

                    {/* Content */}
                    <CardContent sx={{ p: 1.5 }}>
                      <Typography
                        variant="body2"
                        fontWeight="500"
                        sx={{
                          fontSize: "0.75rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.namaBarang || item.nama_barang || "Unknown Item"}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.idBarang || item.id_barang} - {item.jumlahBarang || item.jumlah_barang || 1} PCS
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box display="flex" justifyContent="center" mt={3}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(e, val) => setPage(val)}
                  color="primary"
                />
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default AssetNonAsset;
