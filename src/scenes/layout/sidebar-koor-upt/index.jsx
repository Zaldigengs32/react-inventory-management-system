import { useContext, useState, useEffect } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../../theme";
import {
  DashboardOutlined,
  BuildOutlined,
  SwapHorizOutlined,
  FactCheckOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { SidebarContext } from "../../../App";
import logo from "../../../assets/images/logo.png";

const SidebarKoorUPT = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const { isCollapsed } = useContext(SidebarContext);

  const basePath = "/dashboardKoorUPT";

  const getSelectedMenu = () => {
    const path = location.pathname;
    if (path === basePath || path === `${basePath}/`) return "Dashboard";
    if (path.includes("/inventory")) return "Inventory";
    if (path.includes("/mutation")) return "Mutation";
    if (path.includes("/stock-opname")) return "Stock Opname";
    if (path.includes("/dupat")) return "Dupat";
    return "Dashboard";
  };

  const selected = getSelectedMenu();

  return (
    <Sidebar
      collapsed={isCollapsed}
      backgroundColor={colors.primary[400]}
      style={{ height: "100%", border: "none" }}
    >
      {/* HEADER - Logo & Title */}
      <Box 
        sx={{ 
          py: 2.5, 
          px: isCollapsed ? 1.5 : 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "flex-start",
          gap: 1.5,
          minHeight: 70,
        }}
      >
        <img 
          src={logo} 
          alt="Logo" 
          style={{ 
            width: isCollapsed ? 40 : 36, 
            height: isCollapsed ? 40 : 36,
            objectFit: "contain"
          }} 
        />
        {!isCollapsed && (
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            color={colors.gray[100]}
            sx={{ whiteSpace: "nowrap" }}
          >
            Management Asset
          </Typography>
        )}
      </Box>

      {/* MENU */}
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            backgroundColor: active ? colors.blueAccent[700] : "transparent",
            color: active ? "#fff" : colors.gray[100],
            borderRadius: "8px",
            margin: "5px 10px",
            "&:hover": {
              backgroundColor: colors.blueAccent[600],
              color: "#fff",
            },
          }),
        }}
      >
        <Box sx={{ mt: 2 }}>
          <Item
            title="Dashboard"
            to={basePath}
            icon={<DashboardOutlined />}
            selected={selected}
          />
          
          <Item
            title="Inventory"
            to={`${basePath}/inventory`}
            icon={<BuildOutlined />}
            selected={selected}
          />
          
          <Item
            title="Mutation"
            to={`${basePath}/mutation`}
            icon={<SwapHorizOutlined />}
            selected={selected}
          />
          
          <Item
            title="Stock Opname"
            to={`${basePath}/stock-opname`}
            icon={<FactCheckOutlined />}
            selected={selected}
          />
          
          <Item
            title="Dupat"
            to={`${basePath}/dupat`}
            icon={<DeleteOutlined />}
            selected={selected}
          />
        </Box>
      </Menu>
    </Sidebar>
  );
};

const Item = ({ title, to, icon, selected }) => {
  return (
    <MenuItem
      active={selected === title}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default SidebarKoorUPT;
