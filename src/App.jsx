import React, { createContext, useState, useEffect } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Navbar, SidebarMenu } from "./scenes";
import { Outlet, useLocation } from "react-router-dom";
import SidebarKoorUPT from "./scenes/layout/sidebar-koor-upt";
import { handleAutoApprovalCheck } from "./services/autoApprovalService";

export const ToggledContext = createContext(null);
export const SidebarContext = createContext(null);

function App() {
  const [theme, colorMode] = useMode();
  const [toggled, setToggled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const values = { toggled, setToggled };
  const sidebarValues = { isCollapsed, setIsCollapsed };
  const location = useLocation();

  // Determine which sidebar to show based on current path
  const isKoorUPT = location.pathname.startsWith("/dashboardKoorUPT");

  // Auto-Approval Check - Run once per day when app loads
  useEffect(() => {
    const runAutoApproval = async () => {
      try {
        // Check if user is logged in
        const user = localStorage.getItem("user");
        if (user) {
          console.log("Checking auto-approval...");
          await handleAutoApprovalCheck();
        }
      } catch (error) {
        console.error("Error in auto-approval check:", error);
      }
    };

    runAutoApproval();
  }, []); // Run only once when app mounts

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToggledContext.Provider value={values}>
          <SidebarContext.Provider value={sidebarValues}>
            <Box sx={{ display: "flex", height: "100vh", maxWidth: "100%" }}>
              {isKoorUPT ? <SidebarKoorUPT /> : <SidebarMenu />}
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <Navbar />
                <Box sx={{ overflowY: "auto", flex: 1, maxWidth: "100%" }}>
                  <Outlet />
                </Box>
              </Box>
            </Box>
          </SidebarContext.Provider>
        </ToggledContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
