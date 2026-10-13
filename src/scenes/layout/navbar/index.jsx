import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import { tokens, ColorModeContext } from "../../../theme";
import {
  MenuOutlined,
  LightModeOutlined,
  DarkModeOutlined,
  PowerSettingsNew,
} from "@mui/icons-material";
import { SidebarContext } from "../../../App";
import defaultAvatar from "../../../assets/images/avatar.png";

const API_BASE_URL = "https://localhost:7130";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colorMode = useContext(ColorModeContext);
  const { isCollapsed, setIsCollapsed } = useContext(SidebarContext);
  const colors = tokens(theme.palette.mode);

  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    // Load user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const getUserPhoto = () => {
    if (user?.foto) {
      if (user.foto.startsWith("http")) {
        return user.foto;
      }
      return `${API_BASE_URL}/uploads/${user.foto}`;
    }
    return defaultAvatar;
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    handleClose();
    navigate("/login");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? colors.primary[500] : "#fff",
        borderBottom: theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb",
        boxShadow: theme.palette.mode === "dark" ? "none" : "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      {/* Hamburger Menu untuk toggle sidebar */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlined />
        </IconButton>
      </Box>

      {/* Right side icons */}
      <Box display="flex" alignItems="center" gap={1}>
        {/* Theme Toggle Button */}
        <IconButton 
          onClick={colorMode.toggleColorMode}
          sx={{ 
            backgroundColor: theme.palette.mode === "dark" ? "#374151" : "#e5e7eb",
            width: 40,
            height: 40,
            "&:hover": { 
              backgroundColor: theme.palette.mode === "dark" ? "#4b5563" : "#d1d5db" 
            }
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ color: "#fbbf24" }} />
          ) : (
            <LightModeOutlined sx={{ color: "#374151" }} />
          )}
        </IconButton>
        
        {/* Profile Avatar with Dropdown */}
        <IconButton 
          onClick={handleProfileClick}
          sx={{ p: 0.5 }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "3px solid #8b5cf6",
              backgroundColor: "#fff",
              padding: "3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                borderColor: "#7c3aed",
              }
            }}
          >
            <Avatar
              src={getUserPhoto()}
              alt={user?.namaPengguna || "User"}
              sx={{ 
                width: 38, 
                height: 38,
              }}
              onError={(e) => { e.target.src = defaultAvatar; }}
            />
          </Box>
        </IconButton>

        {/* Profile Dropdown Menu */}
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
              minWidth: 250,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              overflow: "visible",
            },
          }}
        >
          {/* User Info Header with blue background */}
          <Box 
            sx={{ 
              px: 2, 
              py: 2, 
              display: "flex", 
              alignItems: "center",
              backgroundColor: "#e0f2fe",
              borderRadius: "12px",
              mx: 1,
              mt: 1,
              mb: 1,
            }}
          >
            <Box display="flex" alignItems="center" gap={1.5}>
              <Avatar
                src={getUserPhoto()}
                alt={user?.namaPengguna || "User"}
                sx={{ width: 50, height: 50 }}
                onError={(e) => { e.target.src = defaultAvatar; }}
              />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold" color="#1e293b">
                  {user?.namaPengguna || "Loading..."}
                </Typography>
                <Typography variant="body2" color="#64748b">
                  {user?.rolePengguna || ""}
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Divider />
          
          {/* Logout Option */}
          <MenuItem 
            onClick={handleLogout} 
            sx={{ 
              py: 1.5, 
              gap: 1.5,
              "&:hover": {
                backgroundColor: "#fee2e2",
                color: "#dc2626",
              }
            }}
          >
            <PowerSettingsNew fontSize="small" />
            <Typography>Log Out</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
