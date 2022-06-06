import { Box, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
    const { register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/addNewProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Added Product!')
                    data.target.reset();
                }
            });

    };
    return (
        <div>
            <Typography variant="h4" gutterBottom component="div"
                sx={{
                    py: 2,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 600,
                    fontFamily: 'tahoma'
                }}>ADD NEW PRODUCT</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register("productName")}
                    required
                    placeholder="Product Name"
                    className=" input-field"
                />

                <br />

                <input
                    type="text"
                    {...register("description")}
                    required
                    placeholder="Description / Specification"
                    className="input-field"
                />

                <br />

                <input
                    type="number"
                    {...register("price")}
                    required
                    placeholder="Price"
                    className="input-field"
                />
                <br />

                <input
                    type="url"
                    {...register("imageUrl")}
                    required
                    placeholder="Insert Product Image URL"
                    className="input-field"
                />

                {errors.exampleRequired && <span>This field is required</span>}

                <br />

                <Box style={{ display: 'flex' }} sx={{ pt: 3, justifyContent: 'center' }}>

                    <input
                        type="submit"
                        value="ADD PRODUCT"
                        className="purchase-btn"
                    />
                </Box>
            </form>
        </div>
    );
};

export default AddNewProduct;