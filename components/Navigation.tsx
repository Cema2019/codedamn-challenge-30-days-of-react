import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { routeConfig } from '../routes/routeConfig';

interface NavigationProps {
  drawerWidth: number;
}

const Navigation: React.FC<NavigationProps> = ({ drawerWidth }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {isSmallScreen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            width: '100%',
            backgroundColor: 'background.paper',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <IconButton onClick={toggleDrawer(true)} sx={{ margin: 1 }}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        open={isSmallScreen ? isDrawerOpen : true}
        onClose={toggleDrawer(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'lightgray',
          },
        }}
      >
        <List>
          {routeConfig.map(({ path, label }) => (
            <ListItem
              key={path}
              component={Link}
              to={path}
              onClick={isSmallScreen ? toggleDrawer(false) : undefined}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
