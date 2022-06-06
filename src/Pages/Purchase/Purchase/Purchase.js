// import { Image } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import './Purchase.css';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://pacific-ridge-79259.herokuapp.com/singleProduct/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    // console.log(productId);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        data.email = user.email;
        data.status = "Pending";
        data.description = product.description;
        data.productName = product.productName;
        data.imageUrl = product.imageUrl;
        data.price = product.price;

        fetch("https://pacific-ridge-79259.herokuapp.com/completePurchase", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Purchased!')
                    data.target.reset();
                }
            });
        console.log(data);
        data.preventDefault();
    }

    return (
        <div style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
            <Typography variant="h3" gutterBottom component="div"
                sx={{
                    py: 6,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 600,
                    fontFamily: 'tahoma'
                }}>PURCHASE YOUR PRODUCT</Typography>

            <Container sx={{ width: '75%', textAlign: 'center' }}>
                <Box>

                    <img src={product?.imageUrl} alt="" />
                    <Typography variant="h5" sx={{
                        textAlign: 'left',
                        color: 'black',
                        fontWeight: 600,
                        fontFamily: 'tahoma',
                        pt: 4
                    }}>Product Name: {product?.productName}</Typography>


                    <Typography variant="subtitle2" sx={{
                        textAlign: 'justify',
                        color: 'black',
                        fontWeight: 600,
                        fontFamily: 'tahoma',
                        py: 3
                    }}>Specifications: {product?.description}</Typography>


                    <Typography variant="h6" sx={{
                        textAlign: 'left',
                        color: 'black',
                        fontWeight: 600,
                        fontFamily: 'tahoma'
                    }}> Price : $ {product?.price}</Typography>
                </Box>
            </Container>

            <Container sx={{ width: '75%', py: 8 }}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        {...register("name")}
                        defaultValue={user.displayName}
                        className="input-field"
                    />
                    <br />
                    <input
                        {...register("email")}
                        defaultValue={user.email}
                        className="input-field"
                    />
                    <br />
                    <input
                        {...register("address", { required: true })}
                        placeholder="Address"
                        type="text"
                        className="input-field"
                    />
                    <br />
                    <input
                        type="number"
                        {...register("phoneNumber")}
                        required
                        placeholder="Phone Number"
                        className="input-field"
                    />
                    <br />
                    <input
                        placeholder="Comments"
                        type="text"
                        className="input-field"
                        {...register("comments", { required: true })}

                    />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <Box style={{ display: 'flex' }} sx={{ py: 2, justifyContent: 'center' }}>
                        <input
                            type="submit"
                            value="Complete Purchase"
                            className="purchase-btn"
                        />
                        <span> </span>

                        <Link to="/explore" className="purchase-btn">Purchase More Item</Link>


                    </Box>



                </form>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;