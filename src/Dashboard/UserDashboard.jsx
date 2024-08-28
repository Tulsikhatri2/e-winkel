import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import logo from "../Assets/logo.PNG"
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 180;

export default function ClippedDrawer() {
  return (
    <Box className="dashboard">
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
        <Toolbar sx={{ backgroundColor:"white" }} className="nav">
          <img src={logo} width="7%" height="80%" style={{marginLeft:"5vw"}}/>
          <Box className="buttons">
          </Box>
        </Toolbar>
        
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', boxShadow:"0px 0px 1vh black",
            fontFamily:"Laila, serif"
           },
        }}
      >
        <Toolbar />
        <Box >
          <List>
            {['Users', 'Category', 'Products'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemText primary={text} 
                onClick={()=>{
                    
                }}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
    </Box>
  );
}