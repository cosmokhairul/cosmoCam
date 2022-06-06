import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
            <Container sx={{ py: 4 }}>
                <Typography variant="h3" gutterBottom component="div"
                    sx={{
                        pt: 6,
                        color: 'black',
                        textAlign: "center",
                        fontWeight: 600,
                        fontFamily: 'tahoma'
                    }}>WHO ARE WE?</Typography>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://yoursite.com/wp-content/uploads/elementor/thumbs/about-header-oz7zlazldqfxwnk0zfey5do5jijbont7zr7mcrv6yo.png" alt="" />
                    </Grid>

                    <Grid item xs={12} md={6} style={{ display: 'flex' }} sx={{ pt: 3, justifyContent: 'center', alignItems: 'center' }}>

                        <Box style={{ textAlign: 'justify' }}>
                            <Typography variant="body1" gutterBottom sx={{ fontSize: '18px', color: 'black' }}>CosmoCam is a worldclass camera company which is committed to bring you the best choices. We started our company in the middle of 2020. We always keep the customer's priority. Hence we are aligned with the best camera companies in the world. Our cameras has a varity in their specifications and prices. So, without hasitating make your valuable orders now and frame the world with your innovative ideas!  </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AboutUs;