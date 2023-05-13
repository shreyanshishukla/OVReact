import React,{useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme,  ThemeProvider } from '@mui/material/styles';
import  {Context,AdminContext}  from '../Context'




const settings = [ 'Logout'];

function ResponsiveAppBar() {
  const Admin=useContext(AdminContext)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = ['Home', 'Contact', 'FAQ','Complaint Corner'];
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }

  const User=useContext(Context)
  
  const handleContact=()=>{
    setAnchorElUser(null);
    console.log("ghj")

    console.log(User.Contact)
    const a=User.isLoggedIn;
    const b=Admin.adminLoggedIn;
    User.setAllFalse();
    Admin.setAllFalse();
    User.setisLoggedIn(a);
    Admin.setadminLoggedIn(b);
    User.setContact(!User.Contact)
  }

  const handleLogout = () => {
    setAnchorElUser(null);
    User.setUser("")
    User.setisLoggedIn(false)
    User.setshowVotingPage(false);
    User.setshowCandidateDetails(false);
    User.setshowVoterProfile(false);
    User.setshowVoting(false);
    User.setshowVoterProfilePage(false);
    User.setshowCandidateProfilePage(false);
    User.setadminLoggin(false);
    Admin.setadminLoggedIn(false);

  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    console.log("DFdg")
   

  };
  const handleCloseNavMenu=()=>{
    setAnchorElUser(null);
  }
  
 
  return (

    <AppBar position="static">
      <Container maxWidth="xl"  >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Online-Voting 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
      
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="left">{"Home"}</Typography>
                </MenuItem>
                <MenuItem key={"Contact"} onClick={handleContact}>
                  <Typography textAlign="left">{"Contact"}</Typography>
                </MenuItem>
                <MenuItem key={"FAQ"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="left">{"FAQ"}</Typography>
                </MenuItem>
                <MenuItem key={"Complaint-Corner"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="left">{"Complaint-Corner"}</Typography>
                </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key="Logout" onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}
export default ResponsiveAppBar;
