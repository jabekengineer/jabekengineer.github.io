import React from 'react'
import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'

export default function Footer() {
    const theme = useTheme();
    return(
        <>
        <Typography variant='h6' color={theme.primary.main} sx={{textAlign:'center', opacity: '60%'}}>
            Jason Sebek 2023
        </Typography>
        </>
    )
}