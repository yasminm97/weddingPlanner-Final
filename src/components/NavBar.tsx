import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { primaryFontColor } from '../assets/custom/colors';
import { titleFontFamily } from '../assets/custom/fonts';
import { useNavigate } from 'react-router-dom';
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Search', 'Favorites', 'Profile'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: titleFontFamily, fontSize: '24px', color: primaryFontColor }}>
        Wedding
      </Typography>
      <Divider />
      <List sx={{ color: primaryFontColor }}>
        {navItems.map((item, index) => (
          <ListItem disablePadding key={item}>
            <ListItemButton onClick={() => handleNavigation(`/${item.toLowerCase()}`)}>
              <ListItemText primary={item} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed" sx={{ height:'8vh', backgroundColor: 'white', borderBottom: '1px solid rgba(0,90,52,40%)', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: primaryFontColor, mr: 2, display: { sm: 'none' },
            '&:focus':{ outline:'none'},
            '&:hover':{ outline:'none'},
          }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={()=> navigate('/home')}
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'rgba(0,90,52,51%)' }}
          >
            Wedding
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: primaryFontColor }}
              onClick={() => handleNavigation(`/${item.toLowerCase()}`)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}




