import React from 'react'
import { Typography } from '@mui/material'
const ProjectHeading = ({title}) => {
  return (
    <Typography
    variant="h6"
    sx={{
      maxWidth: '200px',
      fontWeight: 600,
      marginBottom: 1,
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    {title}
  </Typography>  )
}

export default ProjectHeading