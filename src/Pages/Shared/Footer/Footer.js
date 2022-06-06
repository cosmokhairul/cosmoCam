import { Button, Container, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const verticalCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

const Footer = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, py: 5, backgroundColor: 'black', color: 'white' }} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={4} md={3} >
                        <Container sx={{ minWidth: 275 }}>

                            <Typography variant="h5" component="div" sx={{
                                textAlign: "center",
                                fontWeight: 500
                            }}>
                                CosmoCam
                            </Typography>

                            <Typography variant="h6" sx={{ textAlign: "center", py: 2 }}>
                                Frame The Future Today
                            </Typography>

                            <Typography variant="body2" sx={{ textAlign: "center" }}>
                                © Copyright. All Rights Reserved.
                            </Typography>

                        </Container>
                    </Grid>


                    <Grid item xs={4} sm={4} md={3} >
                        <Container sx={{ minWidth: 275 }}>
                            <Box style={{ ...verticalCenter, textAlign: 'center' }}>

                                <Typography variant="h6">
                                    Useful Links
                                </Typography>

                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                                    <Button color="inherit">Home</Button>
                                </NavLink>

                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                                    <Button color="inherit">Explore</Button>
                                </NavLink>

                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>

                            </Box>
                        </Container>
                    </Grid>


                    <Grid item xs={4} sm={4} md={3} >
                        <Container sx={{ minWidth: 275 }}>

                            <Box style={{ textAlign: 'center' }}>

                                <Typography variant="h6">
                                    Follow Us
                                </Typography>

                                <IconButton>
                                    <FacebookIcon sx={{ mr: 1, fontSize: 35, color: 'white' }} />
                                </IconButton>

                                <IconButton>
                                    <TwitterIcon sx={{ mr: 1, fontSize: 35, color: 'white' }} />
                                </IconButton>

                                <IconButton>
                                    <YouTubeIcon sx={{ mr: 1, fontSize: 35, color: 'white' }} />
                                </IconButton>

                                <IconButton>
                                    <InstagramIcon sx={{ mr: 1, fontSize: 35, color: 'white' }} />
                                </IconButton>

                            </Box>

                        </Container>
                    </Grid>


                    <Grid item xs={4} sm={4} md={3} >
                        <Container sx={{ minWidth: 275 }}>

                            <Typography variant="h6" style={{ textAlign: 'center' }}>
                                Contact Us
                            </Typography>

                            <Typography variant="h6" component="div" sx={{
                                textAlign: "left",
                                fontWeight: 500,
                                fontSize: '16px'
                            }}><IconButton>
                                    <LocationOnIcon sx={{ mr: 1, fontSize: 22, color: 'white' }} />
                                </IconButton>
                                29/A, NY Street, USA
                            </Typography>

                            <Typography variant="h6" component="div" sx={{
                                textAlign: "left",
                                fontWeight: 500,
                                fontSize: '16px'
                            }}><IconButton>
                                    <EmailIcon sx={{ mr: 1, fontSize: 22, color: 'white' }} />
                                </IconButton>
                                info@cosmocam.com
                            </Typography>

                            <Typography variant="h6" component="div" sx={{
                                textAlign: "left",
                                fontWeight: 500,
                                fontSize: '16px'
                            }}><IconButton>
                                    <CallIcon sx={{ mr: 1, fontSize: 22, color: 'white' }} />
                                </IconButton>
                                + 1 252 252 252
                            </Typography>

                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Footer;