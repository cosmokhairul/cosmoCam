import { Box, Card, CardContent, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-ridge-79259.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);

    return (
        <div style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
            <Typography variant="h3" gutterBottom component="div"
                sx={{
                    py: 5,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 600,
                    fontFamily: 'tahoma'
                }}>REVIEWS</Typography>


            <Container>
                <Box sx={{ flexGrow: 1, pb: 7 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            reviews?.map(pd => (
                                <Grid item xs={4} sm={4} md={6} key={pd._id} >

                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant="body2" sx={{ fontStyle: 'italic', textAlign: "center" }}>
                                                {pd?.review}
                                            </Typography>

                                            <Typography sx={{ textAlign: "center", pt: 1, pb: 2 }}><Rating name="read-only" value={pd?.ratings} readOnly /></Typography>

                                            <Typography variant="h6" component="div" sx={{
                                                // color: 'black',
                                                textAlign: "center",
                                                fontWeight: 500
                                            }}>
                                                {pd?.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }


                    </Grid>
                </Box>
            </Container>

        </div>
    );
};

export default Reviews;

