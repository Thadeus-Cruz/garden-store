import React from 'react';
import '../assets/dashboard.css';
import Footer from './Footer';
import NavBar from './NavBar'; // Import the NavBar component
import FlowerGarden from './garden';
import {
  Button,
  Card,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Avatar,
  Divider,
  Container,
  Paper,
  Menu,
  MenuItem,
} from '@mui/material';


const Dashboard = () => {
  return (
    <div className='dashboard-bg'>
    <div className="dashboard-container">
      <NavBar />
      <Container className="main-content-dashboard">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card className="card-dashboard">
              <Typography variant="h5" gutterBottom className="card-title-dashboard">
                Welcome to Blossom Haven!
              </Typography>
              <Typography variant="body1" className="card-content-dashboard">
                Explore our wide range of gardening products and services.
              </Typography>
            </Card>

            <Card className="card-dashboard" style={{ marginTop: '20px' }}>
              <Typography variant="h5" gutterBottom className="card-title-dashboard">
                Featured Products
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className="quick-links-dashboard">
              <Typography variant="h6" gutterBottom className="quick-links-title-dashboard">
                Quick Links
              </Typography>
              <List className="quick-links-list-dashboard">
                <ListItem button className="quick-links-item-dashboard">
                  <ListItemText primary="Orders" />
                </ListItem>
                <ListItem button className="quick-links-item-dashboard">
                  <ListItemText primary="Inventory" />
                </ListItem>
                <ListItem button className="quick-links-item-dashboard">
                  <ListItemText primary="Customers" />
                </ListItem>
              </List>
            </Paper>

            <Paper className="notifications-dashboard">
              <Typography variant="h6" gutterBottom className="notifications-title-dashboard">
                Notifications
              </Typography>
              <List className="notifications-list-dashboard">
                <ListItem className="notification-item-dashboard">
                  <ListItemText primary="New order received" secondary="2 minutes ago" />
                </ListItem>
                <Divider />
                <ListItem className="notification-item-dashboard">
                  <ListItemText primary="Low stock alert" secondary="1 hour ago" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
    <div style={{marginLeft: '30vb'}}>
    <FlowerGarden />  
    </div>
      <Footer />
    </div>
  );
};

export default Dashboard;


