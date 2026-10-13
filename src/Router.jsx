import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import {
  Dashboard,
  Approval,
  Inventory,
  Room,
  Storage,
  User,
  Mutation,
} from "./scenes";
import RoomStorage from "./scenes/room-storage";
import AddItemToMutation from "./scenes/mutation/AddItemToMutation";
import MutationDetail from "./scenes/mutation/MutationDetail";
import Login from "./scenes/login";
import Beranda from "./scenes/beranda";
import Member from "./scenes/member";
import AssetNonAsset from "./scenes/asset-non-asset";
import DashboardPICLab from "./scenes/dashboard-pic-lab";
import InventoryPICLab from "./scenes/inventory-pic-lab";
import DashboardPICNonAsset from "./scenes/dashboard-pic-nonasset";
import InventoryPICNonAsset from "./scenes/inventory-pic-nonasset";
// Koor UPT imports
import DashboardKoorUPT from "./scenes/dashboard-koor-upt";
import InventoryKoorUPT from "./scenes/inventory-koor-upt";
import MutationKoorUPT from "./scenes/mutation-koor-upt";
import MutationDetailKoorUPT from "./scenes/mutation-koor-upt/MutationDetailKoorUPT";
// Stock Opname imports
import StockOpname from "./scenes/stock-opname";
import StockOpnameDetail from "./scenes/stock-opname/StockOpnameDetail";
import AddItemToStockOpname from "./scenes/stock-opname/AddItemToStockOpname";
import StockOpnameKoorUPT from "./scenes/stock-opname-koor-upt";
import StockOpnameDetailKoorUPT from "./scenes/stock-opname-koor-upt/detail";
// Stock Opname PIC Lab & PIC Non Asset imports
import StockOpnamePICLab from "./scenes/stock-opname-pic-lab";
import StockOpnamePICNonAsset from "./scenes/stock-opname-pic-nonasset";
// Dupat imports
import Dupat from "./scenes/dupat";
import DupatDetail from "./scenes/dupat/DupatDetail";
import AddItemToDupat from "./scenes/dupat/AddItemToDupat";
import DupatKoorUPT from "./scenes/dupat-koor-upt";
import DupatDetailKoorUPT from "./scenes/dupat-koor-upt/DupatDetailKoorUPT";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes - Beranda */}
        <Route path="/" element={<Beranda />} />
        <Route path="/member" element={<Member />} />
        <Route path="/asset-non-asset" element={<AssetNonAsset />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboardPICasset"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="approval" element={<Approval />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="room" element={<Room />} />
          <Route path="room-storage/:id" element={<RoomStorage />} />
          <Route path="storage" element={<Storage />} />
          <Route path="user" element={<User />} />
          <Route path="mutation" element={<Mutation />} />
          <Route path="mutation/:id/add-item" element={<AddItemToMutation />} />
          <Route path="mutation/:id/detail" element={<MutationDetail />} />
          <Route path="stock-opname" element={<StockOpname />} />
          <Route path="stock-opname/:id/detail" element={<StockOpnameDetail />} />
          <Route path="stock-opname/:id/add-item" element={<AddItemToStockOpname />} />
          <Route path="dupat" element={<Dupat />} />
          <Route path="dupat/:id/detail" element={<DupatDetail />} />
          <Route path="dupat/:id/add-item" element={<AddItemToDupat />} />
        </Route>

        {/* PIC Lab Routes */}
        <Route
          path="/dashboardPIClab"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPICLab />} />
          <Route path="inventory" element={<InventoryPICLab />} />
          <Route path="stock-opname" element={<StockOpnamePICLab />} />
          <Route path="stock-opname/:id/detail" element={<StockOpnameDetail />} />
          <Route path="stock-opname/:id/add-item" element={<AddItemToStockOpname />} />
        </Route>

        {/* PIC Non Asset Routes */}
        <Route
          path="/dashboardPICnonasset"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPICNonAsset />} />
          <Route path="inventory" element={<InventoryPICNonAsset />} />
          <Route path="stock-opname" element={<StockOpnamePICNonAsset />} />
          <Route path="stock-opname/:id/detail" element={<StockOpnameDetail />} />
          <Route path="stock-opname/:id/add-item" element={<AddItemToStockOpname />} />
          <Route path="room" element={<Room />} />
          <Route path="room-storage/:id" element={<RoomStorage />} />
          <Route path="storage" element={<Storage />} />
          <Route path="user" element={<User />} />
        </Route>

        {/* Koor UPT Routes */}
        <Route
          path="/dashboardKoorUPT"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardKoorUPT />} />
          <Route path="inventory" element={<InventoryKoorUPT />} />
          <Route path="mutation" element={<MutationKoorUPT />} />
          <Route path="mutation/:id/detail" element={<MutationDetailKoorUPT />} />
          <Route path="stock-opname" element={<StockOpnameKoorUPT />} />
          <Route path="stock-opname/:id/detail" element={<StockOpnameDetailKoorUPT />} />
          <Route path="dupat" element={<DupatKoorUPT />} />
          <Route path="dupat/:id/detail" element={<DupatDetailKoorUPT />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
