import { Alert, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const verticalCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "400px"
}

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
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
                            }}>LOGIN</Typography>

                        <form onSubmit={handleLoginSubmit}  >
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />

                            <Button sx={{ width: '50%', m: 1, mt: 4 }} type="submit" variant="contained">Login</Button>

                            <br />

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text" sx={{ my: 2 }}>New User? Please Register</Button>
                            </NavLink>

                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">User Created Successfully!</Alert>}

                            {authError && <Alert severity="error">{authError}</Alert>}

                            <br />

                            <Button onClick={handleGoogleSignIn} variant="contained" sx={{ width: '50%', m: 1 }}>Google Sign In</Button>
                        </form>

                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://theupay.com/bank/Assets/login.jpg" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;