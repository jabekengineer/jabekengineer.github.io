import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './Banner.module.css'


export default function Banner(props) {
    return(
        <Box component='a' href='/'>
            <div className={styles.BannerText}>
                <div className={styles.BannerImage}>
                    <img src = {require('../assets/balcony.jpg')} alt="Jason Background"/>
                </div>
                <div className={styles.Text}>
                    <img src = {require('../assets/me.png')} alt='Jason Profile' width={300} height={214}/>
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