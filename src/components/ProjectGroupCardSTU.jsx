import React from "react";
import {
  Card,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProjectTag from "./ProjectTag";
import ProjectHeading from "./ProjectHeading";
import { useNavigate } from "react-router-dom";

function ProjectGroupCardSTU(props) {
  const { id, type, course, title, status, guide, submission1, submission2 } =
    props;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    event.stopPropagation();
  };

  const handleMenuClick = (id) => {
    console.log(id);
    event.stopPropagation();
  };

  const handleCardClick = (id) => {
    navigate(`ProjectDetails/${id}`);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: 340,
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: 2,
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}
      onClick={() => handleCardClick(id)} // Attach onClick to the Card
    >
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
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
          <ProjectTag label={id} />
          <ProjectTag label={type} />
          <ProjectTag label={course} />
        </Box>

      </Box>

      <ProjectHeading title={title} />
      <Divider/>
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        Guide: {guide}
      </Typography>
    </Card>
  );
}

export default ProjectGroupCardSTU;

{/* <IconButton aria-label="settings" onClick={handleClick}>
<MoreVertIcon />
</IconButton>
<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
<MenuItem onClick={(e) => handleMenuClick(id)}>Edit</MenuItem>
<MenuItem onClick={handleClose}>Delete</MenuItem>
</Menu> */}