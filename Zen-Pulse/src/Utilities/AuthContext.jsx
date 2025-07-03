// src/Utilities/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    const access = localStorage.getItem("access_token");

    if (access) {
      setAuth({ isAuthenticated: true, user: {} }); // You can later load user profile if needed
    } else {
      setAuth({ isAuthenticated: false, user: null });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
