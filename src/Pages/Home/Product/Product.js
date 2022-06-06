import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Product = (props) => {
    const { name, description, img } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{ width: '100%', height: '200px' }}
                    image={img}
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{
                        // color: '#4a148c',
                        textAlign: "center",
                        fontWeight: 500
                    }}>
                        {name}
                    </Typography>

                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button variant="contained" color="success">Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;