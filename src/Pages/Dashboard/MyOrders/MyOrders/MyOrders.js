import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {

    const { user } = useAuth();
    const [products, setproducts] = useState([]);

    const email = user.email;

    useEffect(() => {
        fetch(`https://pacific-ridge-79259.herokuapp.com/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setproducts(data));
    }, [email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure want to cancel the Order?');
        if (proceed) {
            fetch(`https://pacific-ridge-79259.herokuapp.com/cancelOrder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Cancelled Successfully!')
                        const remainingOrders = products.filter(service => service._id !== id);
                        setproducts(remainingOrders);
                    }
                });
            console.log(id);
        }
    };

    return (
        <div>
            <Typography variant="h3" gutterBottom component="div"
                sx={{
                    py: 5,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 600,
                    fontFamily: 'tahoma'
                }}>My Orders</Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products?.map(pd => (
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
                                            }}>
                                                {pd?.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: 'center', textDecoration: 'none' }}>
                                            <Button variant="contained" color="error" onClick={() => handleDelete(pd?._id)}>Delete Order</Button>
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

export default MyOrders;