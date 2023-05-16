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
import genimg from '../Images/generall.png'
import  {Context,AdminContext}  from '../Context'




const settings = [ 'Logout'];

function ResponsiveAppBar() {
  const Admin=useContext(AdminContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = ['Home', 'Contact', 'Answer-Query','About'];
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  const User=useContext(Context)

  


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
  const handleContact=()=>{
    console.log("clickedd")
    Admin.setAllFalse();
    Admin.setadminLoggedIn(true)
    Admin.setContact(!Admin.Contact)
  }
  const handleFAQ=()=>{
    console.log("clicked")
    Admin.setAllFalse();
    Admin.setadminLoggedIn(true)
    Admin.setFAQ(!Admin.FAQ)
  }
  const handleAbout=()=>{
    console.log("clickedd")
    Admin.setAllFalse();
    Admin.setadminLoggedIn(true)
    Admin.setAbout(!Admin.About)
  }
  const handleHome=()=>{
    console.log("clickedd")
    Admin.setAllFalse();
    Admin.setadminLoggedIn(true)
    Admin.setHome(true)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
   

  };
  const handleCloseNavMenu=()=>{
    setAnchorElUser(null);
  }
  
 
  return (

    <AppBar position="static">
      <Container maxWidth="xl"  >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
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
        
              <Button
              
                onClick={handleHome}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > Home
              </Button>
              <Button
               
                onClick={handleContact}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Contact-Us
              </Button>
              <Button
           
                onClick={handleFAQ}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Answer-Query
              </Button>
              <Button
          
                onClick={handleAbout}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >About
              </Button>
 
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <div style={{width:"40px",
                height:"40px" ,borderRadius:"50%",background:"rgba(190, 151, 229, 0.2)"}}>  <img src={genimg} style={{ marginTop:"8px",width:"25px",
                height:"25px"}}/></div>
              
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
