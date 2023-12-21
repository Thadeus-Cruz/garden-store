import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, Card, AppBar, Toolbar, IconButton, Typography, Avatar, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import backgroundVideo from './video.mp4';
import { Link } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Profile from './profile/profile';
import Signup from './components/signup';
import DashboardComponent from './components/dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  return (
    <div className="App">
      <Router>
        <video src={backgroundVideo} autoPlay loop muted className='background-video'></video>
        <div className='App-header'>
        <AppBar position="fixed" className="App-bar">
        <Toolbar className="App-toolbar">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} className="App-menu-icon">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="App-title">
            THADEUS CRUZ GOVINDAPILLAI 727822TUAD057
          </Typography>
          <div className="User-section">
            <IconButton color="inherit" onClick={handleUserMenuOpen}>
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <MailOutlineIcon />
            </IconButton>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            <div className="User-menu">
              <Avatar className="User-icon" onClick={handleUserMenuOpen}>
                <AccountCircleIcon />
              </Avatar>
              <Menu
                anchorEl={userMenuAnchor}
                open={Boolean(userMenuAnchor)}
                onClose={handleUserMenuClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Link to ="/Profile"><MenuItem onClick={handleUserMenuClose}>Profile</MenuItem></Link>
                <Link to ="/Dashboard"><MenuItem onClick={handleUserMenuClose}>Dashboard</MenuItem></Link>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>

          <Drawer variant="temporary" open={isDrawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Profile" />
              </ListItem>
              {/* Add more items as needed */}
            </List>
          </Drawer>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<DashboardComponent />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
