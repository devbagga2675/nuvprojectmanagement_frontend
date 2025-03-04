import React from "react";
import { NavLink } from "react-router-dom";

const SideNavLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#1976d2" : "inherit",
        padding: "8px 12px",
        borderRadius: "4px",
        backgroundColor: isActive ? "#e2e4ea" : "transparent",
      })}
    >
      {children}
    </NavLink>
  );
};

export default SideNavLink;
