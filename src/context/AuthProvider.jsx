import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    return storedIsLoggedIn === "true"; // Simplified boolean conversion
  });

  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/loginPost", {
        user_email_address: email,
        login_password: password,
      });

      if (response.data.Status === "SUCCESS") {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/homepage");
      } else if (response.status === 404) {
        console.error("Login failed: Resource not found");
      } else {

        console.error("Login failed:", response.data);
      }
    } catch (error) {
      console.error("Login error:", error);

    }
  };

  const logout = () => { 
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;