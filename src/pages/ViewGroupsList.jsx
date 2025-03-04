import { Box, Button, Typography, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectGroupCardSTU from "../components/ProjectGroupCardSTU";

function ViewGroupsList() {
  const navigate = useNavigate();

  const projectData = [
    {
      id: "G23",
      type: "Minor Project",
      course: "B. Tech CSE",
      title: "Healthcare reports analysis using Natural Language Processing",
      status: "Ongoing",
      guide: "Prof. Yogesh Chaudhary",
    },
    {
      id: "G24",
      type: "Major Project",
      course: "B. Tech ECE",
      title: "Building a Smart Traffic Management System",
      status: "Completed",
      guide: "Prof. Ramesh Sharma",
    },
    {
      id: "G25",
      type: "Minor Project",
      course: "B. Tech ME",
      title: "Designing an Energy-Efficient HVAC System",
      status: "Ongoing",
      guide: "Prof. Anjali Verma",
    },
    {
      id: "G26",
      type: "Major Project",
      course: "B. Tech CSE",
      title: "Developing a Secure E-commerce Platform",
      status: "Ongoing",
      guide: "Prof. Sunil Gupta",
    },
    {
      id: "G27",
      type: "Minor Project",
      course: "B. Tech ECE",
      title: "Implementing a Real-time Chat Application",
      status: "Completed",
      guide: "Prof. Priya Singh",
    },
    {
      id: "G27",
      type: "Minor Project",
      course: "B. Tech ECE",
      title: "Implementing a Real-time Chat Application",
      status: "Completed",
      guide: "Prof. Priya Singh",
    },
  ];
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        width: "100vw",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Project Groups
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        sx={{
          width: "100vw",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {projectData.map((project) => (
          <ProjectGroupCardSTU key={project.id} {...project} /> // Map through projectData and render cards
        ))}
      </Stack>
    </Stack>
  );
}

export default ViewGroupsList;
