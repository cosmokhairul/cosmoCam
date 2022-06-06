import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }

    return (
        <Container sx={{ width: '75%', textAlign: 'center' }}>

            <Typography variant="h5" gutterBottom component="div"
                sx={{
                    pb: 3,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 700,
                    fontFamily: 'constantia'
                }}>Please Insert an Email Address You Want To Make Admin in The Field Below! </Typography>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    sx={{ width: '75%' }}
                />

                <br />

                <Button type="submit" variant="contained" sx={{ mt: 3 }}>Make Admin</Button>
            </form>

            {success && <Alert severity="success">Made Admin Successfully!</Alert>}
        </Container>
    );
};

export default MakeAdmin;