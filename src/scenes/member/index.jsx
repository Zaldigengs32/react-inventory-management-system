import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  CircularProgress,
  Menu,
  Button,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import logoImg from "../../assets/images/IMG_Logo.png";

import Footer from "../../components/Footer";

const API_BASE_URL = "https://localhost:7130";

// Background colors for member cards
const bgColors = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
];

const Member = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("MEMBER");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/Pengguna`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        let users = data;
        if (data.data) users = data.data;
        if (data.result) users = data.result;
        setMembers(Array.isArray(users) ? users : []);
      }
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "HOME") {
      navigate("/");
    } else if (tab === "ASSET & NON-ASSET") {
      navigate("/asset-non-asset");
    }
  };

  const getUserPhoto = (user) => {
    if (user?.foto) {
      if (user.foto.startsWith("http")) {
        return user.foto;
      }
      return `${API_BASE_URL}/uploads/${user.foto}`;
    }
    return null;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        overflow: "auto",
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
      <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" gap={3}>
            {members.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <Box
                  key={member.idPengguna || index}
                  sx={{
                    background: bgColors[index % bgColors.length],
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "flex-end",
                    flexDirection: isEven ? "row" : "row-reverse",
                    minHeight: 200,
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  {/* Text Content */}
                  <Box 
                    sx={{ 
                      flex: 1,
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: isEven ? "left" : "right",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        fontStyle: "italic",
                        color: "#fff",
                        mb: 1,
                      }}
                    >
                      {member.namaPengguna || "Unknown"}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "rgba(255,255,255,0.95)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        mb: 1.5,
                      }}
                    >
                      {member.jabatanPengguna || member.rolePengguna || "Member"}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {(member.otherJob || member.OtherJob || "").replace(/,/g, " |")}
                    </Typography>
                  </Box>

                  {/* Photo - Large, not cropped */}
                  <Box
                    sx={{
                      width: 250,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      pr: 2,
                    }}
                  >
                    {getUserPhoto(member) ? (
                      <img
                        src={getUserPhoto(member)}
                        alt={member.namaPengguna}
                        style={{
                          maxHeight: 250,
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 150,
                          height: 180,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderRadius: 2,
                        }}
                      >
                        <img src={logoImg} alt="Logo" style={{ width: 80, opacity: 0.5 }} />
                      </Box>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Member;
