import { useTheme } from '@emotion/react'
import { Container, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/material'
import styles from './section.module.css';

export default function Intro(props) {
    const theme = useTheme();
    return(
        <Container className={styles.container}>
        <Typography className={styles.title} color={theme.primary.main}>I'm Jason Sebek </Typography>
        <Typography className={styles.body} color={theme.primary.main}>
            I'm a Research Engineer, <b className='emphasize'>Neuroscience</b> enthusiast, and <b className='emphasize'>Georgia Tech graduate</b> based in <b className='emphasize'>Atlanta, GA. </b>
            I love diving into software and hardware projects that save time. 
        </Typography>
        </Container>
    )
}