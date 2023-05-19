import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { Box, Card, Container, Grow, Paper, Typography } from '@mui/material'
import styles from './styles/Section.module.css';

export default function Projects() {
    const theme = useTheme();
    return(
        <>
        <Container className={styles.ContainerDark}>
        <Container className={styles.Cont} sx={{paddingTop: '2rem'}}>
        <Typography className={styles.TitleSub} color={theme.primary.main}>Projects </Typography>
            <hr/>
            <br/>
            <Typography className={styles.Plain} color={theme.primary.main}>
            Stay tuned for some exciting projects I have on the way!
        </Typography>
        </Container>
        </Container>
        </>
    )
}