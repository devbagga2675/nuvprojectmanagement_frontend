import React from 'react';
import { Typography } from '@mui/material';

function ProjectTag({ label }) {
  return (
    <Typography
      variant="body2"
      sx={{
        backgroundColor: '#EFE9FD',
        padding: '4px 8px',
        borderRadius: '4px',
        color: '#372A71',  
      }}
    >
      {label} 
    </Typography>
  );
}

export default ProjectTag;