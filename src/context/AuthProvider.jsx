import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    return storedIsLoggedIn === "true" ? true : false;
  });
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/homepage");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    navigate("/signin");
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if(storedIsLoggedIn === null || storedIsLoggedIn === false){
        navigate('/signin')
    }
    else if(storedIsLoggedIn === true){
        navigate('homepage')
    }
  }, [isLoggedIn, navigate]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}> {/* Removed user and setUser */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;