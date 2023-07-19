import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Home'); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { text: 'Home', onClick: () => setSelectedItem('Home') },
    { text: 'About', onClick: () => setSelectedItem('About') },
    { text: 'Services', onClick: () => setSelectedItem('Services') },
    { text: 'Contact', onClick: () => setSelectedItem('Contact') },
  ];

  const renderContent = () => {
    switch (selectedItem) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={require('./mylogo.png')} alt="Logo" style={{ height: '45px', marginRight: '10px' }} />
          </Typography>
          <Button color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {renderContent()} {}
    </React.Fragment>
  );
};

export default Navbar;
