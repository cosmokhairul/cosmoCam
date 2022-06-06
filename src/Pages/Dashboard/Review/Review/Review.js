import { Box, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {

    const { user } = useAuth();

    const { register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch("https://pacific-ridge-79259.herokuapp.com/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review Posted Successfully!')
                    data.target.reset();
                }
            });

    };

    return (
        <div>
            <Typography variant="h3" gutterBottom component="div"
                sx={{
                    pt: 2,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 600,
                    fontFamily: 'tahoma'
                }}>REVIEWS</Typography>

            <Typography variant="h5" gutterBottom component="div"
                sx={{
                    pb: 3,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 700,
                    fontFamily: 'constantia'
                }}>Please Make Us Happy Giving Your Valuable Review! </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register("name")}
                    defaultValue={user.displayName}
                    className=" input-field w-50 mb-3 p-1"
                />
                <br />

                <input
                    type="text"
                    {...register("review")}
                    required
                    placeholder="Reviews"
                    className="input-field w-50 mb-3 p-1"
                />
                <br />

                <input
                    type="number"
                    {...register("ratings")}
                    required
                    placeholder="Please Give a Rating Between 1 to 5"
                    className="input-field w-50 mb-3 p-1"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />

                <Box style={{ display: 'flex' }} sx={{ pt: 2, justifyContent: 'center' }}>

                    <input
                        type="submit"
                        value="Submit Review"
                        className="purchase-btn"
                    />
                </Box>
            </form>
        </div>
    );
};

export default Review;