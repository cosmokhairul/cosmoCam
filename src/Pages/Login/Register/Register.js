import { Alert, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const verticalCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "400px"
}

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
    }

    return (
        <Container sx={{ pt: 9 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <Box style={{ ...verticalCenter, textAlign: 'center' }}>

                        <Typography variant="h4" gutterBottom component="div"
                            sx={{
                                pb: 3,
                                color: 'black',
                                textAlign: "center",
                                fontWeight: 600,
                                fontFamily: 'tahoma'
                            }}>REGISTRATION</Typography>

                        {!isLoading && <form onSubmit={handleLoginSubmit}  >

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Retype Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '50%', m: 1, my: 2 }} type="submit" variant="contained">Register</Button>

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>

                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created Successfully!</Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Box>
                </Grid>


                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://www.kindpng.com/picc/m/550-5505432_registration-registration-png-transparent-png.png" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;