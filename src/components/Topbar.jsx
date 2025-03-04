import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { RoundedCorner } from "@mui/icons-material";
import { useAuth } from "../context/AuthProvider";

function TopBar() {
  const [userData, setUserData] = useState(null);
  const { logout } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const simulatedData = {
        email: "dev.n.bagga@nuv.ac.in",
        name: "Dev Bagga",
      };
      setUserData(simulatedData);
    };

    fetchData();
  }, []);

  const handleSignOut = () => {
    logout();
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #DCE1F0", width: "100%"}}
      elevation={false}
      
    >
      <Toolbar>
        <div style={{ display: "flex", alignItems: "center" }}>
          {userData && (
            <>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  marginRight: "8px",
                  padding: "10px",
                  backgroundColor: "#372A71",
                  borderRadius: "4px",
                }}
                RoundedCorner
              >
                {userData.email}
              </Typography>
              <Typography variant="body1" style={{ color: "#333" }}>
                {userData.name}
              </Typography>
            </>
          )}
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button variant="outlined" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
