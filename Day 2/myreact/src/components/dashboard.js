import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../assets/dashboard.css';
import Profile from '../profile/profile';
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
    <div>
      

      <Container className="Main-content">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card className="Card">
              <Typography variant="h5" gutterBottom>
                Welcome to Blossom Haven!
              </Typography>
              <Typography variant="body1">
                Explore our wide range of gardening products and services.
              </Typography>
            </Card>

            <Card className="Card" style={{ marginTop: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Featured Products
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className="Quick-links">
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Orders" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Inventory" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Customers" />
                </ListItem>
              </List>
            </Paper>

            <Paper className="Notifications">
              <Typography variant="h6" gutterBottom>
                Notifications
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="New order received" secondary="2 minutes ago" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Low stock alert" secondary="1 hour ago" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
