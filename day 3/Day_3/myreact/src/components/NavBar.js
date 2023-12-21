// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, redirect to the login page or clear authentication token
    console.log('Logout clicked');
    handleMenuClose();
  };

  return (
    <AppBar position="static" className="app-bar-dashboard">
      <Toolbar className="app-toolbar-dashboard">
        <Typography variant="h6" className="app-title-dashboard">
          Blossom Haven Dashboard
        </Typography>
        <div className="user-section-dashboard">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            className="user-icon-dashboard"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}><Link to="/login">Logout</Link></MenuItem>
            <MenuItem ><Link to="/aboutus">About Us</Link></MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
