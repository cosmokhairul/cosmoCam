import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './Banner.css';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url("https://asset.fujifilm.com/www/si/files/styles/1120x400/public/2019-08/ac23be977f71547f7fe74aff0f3335c0/pic_digitalcameras_02.jpg?itok=qIkptU7B")`,
    height: 400,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // width: `calc(100vw + 48px)`,

}

const verticalCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "5rem",
    height: 400
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ width: 1 }}>
            <div style={{ ...verticalCenter, textAlign: 'left' }} >
                <Typography variant="h2" component="div" sx={{
                    color: 'white', fontFamily: 'monospace', fontSize: '4rem',
                    fontWeight: 700,
                }}>
                    CosmoCam
                </Typography>

                <Typography variant="h5" component="div" sx={{ my: 4, color: 'white', fontFamily: 'constantia', fontSize: '2.5rem', }}>
                    Frame The Future <br />
                    Today
                </Typography>

                <Link to="/explore" className='banner-btn'>Discover</Link>
            </div>
        </Box>
    );
};

export default Banner;