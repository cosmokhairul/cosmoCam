import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/styles';
// import { useTheme } from '@mui/material';

const linkStyle = {
    textDecoration: "none",
    fontFamily: 'monospace',
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '.1rem',
    color: 'white'
};


const Navigation = () => {
    const { user, logOut } = useAuth();

    // const theme = useTheme()
    // const useStyle = makeStyles({
    //     navIcon: {
    //         [theme.breakpoints.up('sm')]: {
    //             display: 'none !important'
    //         }
    //     }
    // });

    // const { navIcon } = useStyle()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    // className={navIcon}
                    >
                        <MenuIcon />
                    </IconButton> */}


                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        href="/home"
                        sx={{ mr: 2 }}
                    >
                        <PhotoCameraIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                        <Link to="/home" style={linkStyle}>CosmoCam</Link>
                    </Typography>

                    <Link
                        // className={navItem}
                        style={{ textDecoration: 'none', color: 'white' }}
                        to="/home"><Button color="inherit">Home</Button></Link>

                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></Link>

                    {
                        user?.email ?
                            <Box>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></Link>
                    }
                    {user.email && <span className="user-style" >Hello, {user.displayName}</span>}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;