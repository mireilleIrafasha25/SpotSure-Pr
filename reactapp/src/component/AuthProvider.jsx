import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  const login = (role) => setUserRole(role);
  const logout = () => {
    localStorage.removeItem("token");   // Siba token muri localStorage
    localStorage.removeItem("userName"); 
    localStorage.removeItem("userEmail");
    localStorage.removeItem("user")
    localStorage.removeItem("bookingId");
    localStorage.removeItem("selectedParkingId")
    localStorage.removeItem("selectedParkingName")
    localStorage.removeItem("destinationName")
    // Siba izina rya user
    setUserRole(null);
  };
  

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
