import { useTheme } from '@emotion/react'
import { Container, Typography } from '@mui/material'
import React from 'react'
import styles from './styles/Section.module.css';

export default function Intro(props) {
    const theme = useTheme();
    return(
        <Container className={styles.Cont}>
        <Typography className={styles.Title} color={theme.primary.main}>I'm Jason Sebek </Typography>
        <Typography className={styles.Plain} color={theme.primary.main}>
            I'm a Research Engineer, 
            <b className={styles.Emphasize}> Neuroscience</b> enthusiast, and 
            <b className={styles.Emphasize}> Georgia Tech graduate</b> based in 
            <b className={styles.Emphasize}> Atlanta, GA. </b>
            I love diving into software and hardware projects that save time. 
        </Typography>
        </Container>
    )
}