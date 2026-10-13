const API_BASE_URL = "https://localhost:7130/api";

export const fetchCurrentUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Pengguna`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    
    const data = await response.json();
    // Ambil user Roni Prasetyo atau user pertama
    const user = data.find(u => u.namaPengguna === "Roni Prasetyo") || data[0];
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Pengguna`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
