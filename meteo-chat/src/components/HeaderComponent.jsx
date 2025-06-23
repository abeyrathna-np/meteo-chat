import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const HeaderComponent = () => {
  const handleInfoClick = () => {
    alert("This is an informational message.");
  };

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        {/* Site Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Weather Bot
        </Typography>

        {/* Info Button */}
        <Tooltip title="About this site">
          <IconButton color="inherit" onClick={handleInfoClick}>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
