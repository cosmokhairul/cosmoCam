import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './Dashboard.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PaymentIcon from '@mui/icons-material/Payment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import InventoryIcon from '@mui/icons-material/Inventory';
import {
    Outlet,
    Link
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';


const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/home" style={{ textDecoration: 'none', width: drawerWidth }}><Button color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}><HomeIcon sx={{ mr: 1, fontSize: 22 }} />Home</Button></Link>

            <Divider />
            {admin ?
                <Box>
                    <Link to={`makeAdmin`} style={{ textDecoration: 'none', width: drawerWidth }}><Button color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}> <AdminPanelSettingsIcon sx={{ mr: 1, fontSize: 22 }} />Make Admin</Button></Link>

                    <Divider />

                    <Link to={`addNewProduct`} style={{ textDecoration: 'none', width: drawerWidth }}><Button color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}> <AddBoxIcon sx={{ mr: 1, fontSize: 22 }} />Add A New Product</Button></Link>

                    <Divider />

                    <Link to={`manageAllOrders`} style={{ textDecoration: 'none', width: drawerWidth }}><Button color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}> <ManageHistoryIcon sx={{ mr: 1, fontSize: 22 }} />Manage All Orders</Button></Link>

                    <Divider />

                    <Link to={`manageProducts`} style={{ textDecoration: 'none', width: drawerWidth }}><Button color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}> <InventoryIcon sx={{ mr: 1, fontSize: 22 }} />Manage Products</Button></Link>

                    <Divider />
                </Box>
                :
                <Box sx={{ textAlign: 'center' }}>

                    <Link to={`myOrders`} style={{ textDecoration: 'none', width: drawerWidth }}><Button color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}> <BookmarkBorderIcon sx={{ mr: 1, fontSize: 22 }} />My Orders</Button></Link>

                    <Divider />

                    <Link to={`payment`} style={{ textDecoration: 'none', width: drawerWidth }}><Button color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}><PaymentIcon sx={{ mr: 1, fontSize: 22 }} />Payment</Button></Link>

                    <Divider />

                    <Link to={`review`} style={{ textDecoration: 'none', width: drawerWidth }}><Button color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}><ReviewsIcon sx={{ mr: 1, fontSize: 22 }} />Reviews</Button></Link>

                    <Divider />

                </Box>
            }
            <Button onClick={logOut} color="inherit" className='dashboard-btn' sx={{ width: drawerWidth }}><LogoutIcon sx={{ mr: 1, fontSize: 22 }} />LOGOUT</Button>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h4" noWrap component="div" sx={{
                        color: 'white',
                        textAlign: "center",
                        fontWeight: 600,
                        fontFamily: 'tahoma',
                        letterSpacing: '1.5px'
                    }}>
                        Dashboard
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Outlet />

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
