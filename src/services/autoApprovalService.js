/**
 * Auto-Approval Service
 * Handles automatic approval of pending items (Mutasi, Stock Opname, Dupat)
 * after 3 days threshold
 */

const API_BASE_URL = "https://localhost:7130";

/**
 * Run auto-approval for all processes
 * Should be called once per day when user logs in
 */
export const runAutoApproval = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/AutoApproval/run-all`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Auto-approval completed:", result);
      return result;
    } else {
      console.error("Auto-approval failed:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error running auto-approval:", error);
    return null;
  }
};

/**
 * Run auto-approval for Mutasi only
 */
export const runAutoApprovalMutasi = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/AutoApproval/mutasi`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Auto-approval Mutasi completed:", result);
      return result;
    } else {
      console.error("Auto-approval Mutasi failed:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error running auto-approval Mutasi:", error);
    return null;
  }
};

/**
 * Check if auto-approval should run today
 * Uses localStorage to track last run date
 */
export const shouldRunAutoApproval = () => {
  const lastRun = localStorage.getItem("last_auto_approval_check");
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  if (lastRun !== today) {
    return true;
  }

  return false;
};

/**
 * Mark auto-approval as run for today
 */
export const markAutoApprovalRun = () => {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem("last_auto_approval_check", today);
};

/**
 * Get auto-approval service status
 */
export const getAutoApprovalStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/AutoApproval/status`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error("Failed to get auto-approval status:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error getting auto-approval status:", error);
    return null;
  }
};

/**
 * Main function to handle auto-approval check and execution
 * Call this in App.jsx or after successful login
 */
export const handleAutoApprovalCheck = async () => {
  if (shouldRunAutoApproval()) {
    console.log("Running auto-approval check...");
    const result = await runAutoApproval();
    
    if (result) {
      markAutoApprovalRun();
      console.log("Auto-approval check completed and marked for today");
      
      // Show notification if any items were auto-approved
      if (result.data && result.data.totalAutoApproved > 0) {
        console.log(`${result.data.totalAutoApproved} items were auto-approved`);
        // You can show a toast notification here if needed
      }
    }
  } else {
    console.log("Auto-approval already run today, skipping...");
  }
};

export default {
  runAutoApproval,
  runAutoApprovalMutasi,
  shouldRunAutoApproval,
  markAutoApprovalRun,
  getAutoApprovalStatus,
  handleAutoApprovalCheck,
};
