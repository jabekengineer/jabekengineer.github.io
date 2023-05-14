import { Box, Typography } from '@mui/material'
import React from 'react'
import './banner.css'


export default function Banner(props) {
    return(
        <Box component='a' href='/'>
            <div className='banner-text'>
                <div className='banner-image'>
                    <img src = {require('../assets/balcony.jpg')} alt="Jason Background"/>
                </div>
                <div className='text-on-image'>
                    <img className='headshot' src = {require('../assets/me.png')} width={300} height={214}/>
                    <Typography variant='h1'fontWeight={360}>jabekengineer</Typography>
                    <Typography variant='h4' fontWeight={800} 
                    sx={{
                        opacity:'60%'
                    }}>
                        MY ENGINEERING PORTFOLIO</Typography>
                </div>
            </div>
        </Box>
    )
}