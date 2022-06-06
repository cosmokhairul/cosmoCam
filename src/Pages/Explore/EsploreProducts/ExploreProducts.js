import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from '../../Shared/Footer/Footer';


const ExploreProducts = () => {
    const [exploreProducts, setexploreProducts] = useState([]);

    useEffect(() => {
        fetch('https://pacific-ridge-79259.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setexploreProducts(data))
    }, []);

    return (
        <div style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
            <Typography variant="h3" gutterBottom component="div"
                sx={{
                    py: 6,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 600,
                    fontFamily: 'tahoma'
                }}>EXPLORE OUR PRODUCTS</Typography>


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

            <Footer></Footer>
        </div>
    );
};

export default ExploreProducts;

// {
//     products.map(product => <Product
//         key={product.name}
//         product={product}
//     ></Product>)
// }