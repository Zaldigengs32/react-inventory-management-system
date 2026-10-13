import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Menu,
  Button,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import logoImg from "../../assets/images/IMG_Logo.png";
import berandaImg from "../../assets/images/beranda.jpg";

const Beranda = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("HOME");
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "MEMBER") {
      navigate("/member");
    } else if (tab === "ASSET & NON-ASSET") {
      navigate("/asset-non-asset");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
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
          zIndex: 10,
        }}
      >
        {/* Logo and Navigation */}
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

        {/* Login Icon */}
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

      {/* Main Content - Hero Section */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${berandaImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hero Text */}
        <Box
          sx={{
            pt: 12,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontStyle: "italic",
              color: "#fff",
              fontWeight: 700,
              mb: 1,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Organize{" "}
            <Box
              component="span"
              sx={{
                backgroundColor: "#1e88e5",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              Everything
            </Box>{" "}
            You Own!
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            All Your{" "}
            <Box
              component="span"
              sx={{
                backgroundColor: "#1e88e5",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              Assets.
            </Box>{" "}
            One{" "}
            <Box
              component="span"
              sx={{
                backgroundColor: "#1e88e5",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              Smart
            </Box>{" "}
            Platform
          </Typography>
        </Box>

        {/* Spacer to push footer down */}
        <Box sx={{ flex: 1 }} />

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: "#1e3a5f",
            py: 1.5,
            px: 3,
            textAlign: "left",
          }}
        >
          <Typography variant="body2" sx={{ color: "#fff", fontSize: "0.8rem" }}>
            Copyright ©2025 All rights reserved | Politeknik Astra
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Beranda;
