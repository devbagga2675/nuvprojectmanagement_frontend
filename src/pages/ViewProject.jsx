import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { Outlet, NavLink } from "react-router-dom";
import ProjectTag from "./../components/ProjectTag"; // Import your ProjectTag component
import ProjectHeading from "./../components/ProjectHeading";
import SideNavLink from "../components/SideNavLink";

function ViewProject() {
  const projectData = {
    id: "G23",
    type: "Minor Project",
    course: "B. Tech CSE",
    title: "Healthcare reports analysis using Natural Language Processing",
    status: "Ongoing",
    guide: "Prof. Yogesh Chaudhary",
  };

  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          borderRight: "1px solid #e0e0e0",
          display: "flex",
          flexDirection: "column",
          padding: 2,
          paddingLeft: 0,
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <ProjectTag label={projectData.id} />
          <ProjectTag label={projectData.type} />
          <ProjectTag label={projectData.course} />
        </Box>
        <ProjectHeading title="Healthcare reports analysis using Natural Language Processing" />
        <Divider />
        <Stack spacing={1} sx={{ width: "100%" }}>
          <SideNavLink to="logbook">Log Book</SideNavLink>
          <SideNavLink to="evaluation">Evaluation</SideNavLink>
        </Stack>
      </Box>
      <Box sx={{ flex: 1, padding: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default ViewProject;
