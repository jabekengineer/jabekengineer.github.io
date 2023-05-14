import { useTheme } from '@emotion/react'
import { Box, Card, Container, Typography } from '@mui/material'
import React from 'react'
import JavascriptIcon from '@mui/icons-material/Javascript';
import styles from './styles/Section.module.css';

export default function Intro(props) {
    const theme = useTheme();
    return(
        <>
        <Container className={styles.ContainerDark}>
            <Container className={styles.Cont}>
            <Typography className={styles.TitleSub} color={theme.primary.main}>What I do </Typography>
            <hr/>
            <br/>
            <Typography className={styles.Plain} color={theme.primary.main}>I excel in agile teams where I have room to learn and be creative.</Typography>
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
                className={styles.Card}
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