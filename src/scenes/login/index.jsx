import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Visibility, VisibilityOff, CheckCircle, Cancel } from "@mui/icons-material";
import backgroundImg from "../../assets/images/IMG_Background.jpg";
import logoImg from "../../assets/images/IMG_Logo.png";

const API_BASE_URL = "https://localhost:7130";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalMessage, setModalMessage] = useState("");
  const [redirectPath, setRedirectPath] = useState("/dashboardPICasset");

  const showModal = (type, message, path = "/dashboardPICasset") => {
    setModalType(type);
    setModalMessage(message);
    setRedirectPath(path);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    if (modalType === "success") {
      navigate(redirectPath);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

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

        if (Array.isArray(users)) {
          const foundUser = users.find(
            (u) => u.idPengguna === username || u.id_pengguna === username
          );

          if (foundUser && password === "1234") {
            const role = (foundUser.rolePengguna || "").toLowerCase();
            const allowedRoles = ["pic asset", "pic non asset", "pic lab", "piclab", "pic_lab", "koor upt", "koorupt", "koor_upt", "koordinator upt", "koordinator_upt"];
            const isPICLab = role.includes("lab") || role === "piclab" || role === "pic_lab";
            const isPICNonAsset = role.includes("non asset") || role === "pic non asset" || role === "picnonasset";
            const isKoorUPT = role.includes("koor upt") || role === "koorupt" || role === "koor_upt" || role.includes("koordinator");
            const isRoniPrasetyo = foundUser.namaPengguna === "Roni Prasetyo";
            
            if (allowedRoles.some(r => role.includes(r.replace(" ", "")) || role === r) || isRoniPrasetyo || isKoorUPT) {
              localStorage.setItem("user", JSON.stringify(foundUser));
              localStorage.setItem("isLoggedIn", "true");
              
              // Redirect based on role
              // Roni Prasetyo has double role, redirect to PIC Asset dashboard (full access)
              if (isRoniPrasetyo) {
                showModal("success", "Login successfully!", "/dashboardPICasset");
              } else if (isKoorUPT) {
                showModal("success", "Login successfully!", "/dashboardKoorUPT");
              } else if (isPICLab) {
                showModal("success", "Login successfully!", "/dashboardPIClab");
              } else if (isPICNonAsset) {
                showModal("success", "Login successfully!", "/dashboardPICnonasset");
              } else {
                showModal("success", "Login successfully!", "/dashboardPICasset");
              }
            } else {
              showModal("error", `Role tidak diizinkan: ${foundUser.rolePengguna}`);
            }
          } else {
            showModal("error", "Username atau password salah");
          }
        }
      } else {
        showModal("error", "Gagal terhubung ke server");
      }
    } catch (err) {
      console.error("Login error:", err);
      showModal("error", "Gagal terhubung ke server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header with Logo */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: 1.5,
          px: 3,
          display: "flex",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img src={logoImg} alt="ASTRAtech" style={{ height: 40 }} />
      </Box>

      {/* Login Form Container */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        {/* Login Box - Simple white */}
        <Box
          sx={{
            width: 320,
            borderRadius: "16px",
            backgroundColor: "#fff",
            p: 4,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: 600,
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              mb: 1,
            }}
          >
            Login
          </Typography>

          <Typography
            variant="body2"
            align="center"
            sx={{ color: "#666", mb: 3 }}
          >
            Manajemen Asset
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              size="small"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  "& fieldset": {
                    borderColor: "#ddd",
                  },
                  "&:hover fieldset": {
                    borderColor: "#45f3ff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#45f3ff",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "12px 20px",
                },
              }}
            />

            <TextField
              fullWidth
              size="small"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  "& fieldset": {
                    borderColor: "#ddd",
                  },
                  "&:hover fieldset": {
                    borderColor: "#45f3ff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#45f3ff",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "12px 20px",
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                borderRadius: "30px",
                py: 1.2,
                backgroundColor: "#1e3a5f",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#152a45",
                },
              }}
            >
              {loading ? "Loading..." : "Sign In"}
            </Button>
          </form>
        </Box>
      </Box>

      {/* Success/Error Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        PaperProps={{
          sx: {
            borderRadius: 3,
            minWidth: 320,
            textAlign: "center",
            py: 4,
            px: 3,
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: modalType === "success" ? "4px solid #22c55e" : "4px solid #ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            {modalType === "success" ? (
              <CheckCircle sx={{ fontSize: 50, color: "#22c55e" }} />
            ) : (
              <Cancel sx={{ fontSize: 50, color: "#ef4444" }} />
            )}
          </Box>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            {modalType === "success" ? "Succeed!" : "Failed!"}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {modalMessage}
          </Typography>
          <Button
            variant="contained"
            onClick={handleModalClose}
            sx={{
              backgroundColor: "#17a2b8",
              textTransform: "none",
              px: 5,
              py: 1,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#138496",
              },
            }}
          >
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Login;
