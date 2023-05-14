import { useTheme } from '@emotion/react'
import { Box, Card, Container, Typography } from '@mui/material'
import React from 'react'
import JavascriptIcon from '@mui/icons-material/Javascript';
import styles from './section.module.css';

export default function Intro(props) {
    const theme = useTheme();
    const data = props.data;
    return(
        <>
        <Container className={styles.containerDark}>
            <Container className={styles.container}>
            <Typography className={styles.titleSub} color={theme.primary.main}>What I do </Typography>
            <hr/>
            <br/>
            <Typography className={styles.body} color={theme.primary.main}>{data.purpose.body}</Typography>
            <br/>
            <Box 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: 800,
                alignContent: 'center',
                justifyItems: 'space-around'
            }}>
                <Card
                className={styles.card}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <JavascriptIcon
                    sx={{
                        padding: 10,
                        'scale': '7.75'}}/>
                    <Typography variant='h4' color={theme.primary.main}>Software</Typography>
                </Card>
            </Box>
            </Container>
        </Container>
        </>
    )
}