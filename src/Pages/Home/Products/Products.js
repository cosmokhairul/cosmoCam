import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Products.css';

const Products = () => {

    const [exploreProducts, setexploreProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setexploreProducts(data.slice(0, 6)))
    }, []);

    return (
        <div className='body-color'>
            <Typography variant="h3" gutterBottom component="div"
                sx={{
                    pt: 6,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 600,
                    fontFamily: 'tahoma'
                }}>PRODUCTS</Typography>

            <Typography variant="h4" gutterBottom component="div"
                sx={{
                    pb: 3,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 700,
                    fontFamily: 'constantia'
                }}>Bringing The Perfect Choice To You</Typography>

            <Box sx={{ flexGrow: 1, pb: 9 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            exploreProducts?.map(pd => (
                                <Grid item xs={4} sm={4} md={4} key={pd._id}>

                                    <Card sx={{ minWidth: 275, py: 2 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            style={{ width: '100%', height: '200px' }}
                                            image={pd?.imageUrl}
                                        />

                                        <CardContent>
                                            <Typography variant="h5" component="div" sx={{
                                                textAlign: "center",
                                                fontWeight: 600, pb: 2
                                            }}>
                                                {pd?.productName}
                                            </Typography>

                                            <Typography variant="subtitle2" sx={{
                                                textAlign: "justify",
                                                color: 'black', fontFamily: 'tahoma'
                                            }} >
                                                {pd?.description}
                                            </Typography>
                                        </CardContent>

                                        <CardActions style={{ justifyContent: 'center', textDecoration: 'none' }}>
                                            <Link to={`/purchase/${pd._id}`} style={{ textDecoration: 'none' }}><button className='card-btn'><ShoppingCartIcon color="primary" /> Buy Now</button></Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Products;