import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { Box, Card, Container, Grow, Paper, Typography } from '@mui/material'
import styles from './styles/Section.module.css';

export default function Experience() {
    const theme = useTheme();
    return(
        <>
        <Container className={styles.Cont}>
        <Typography className={styles.TitleSub} color={theme.primary.main}>Experience</Typography>
            <hr/>
            <br/>
        </Container>
        </>
    )
}