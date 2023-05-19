import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { Box, Card, Container, Grow, Paper, Typography } from '@mui/material'
import styles from './styles/Section.module.css';
import CheckIcon from '@mui/icons-material/Check';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Education() {
    const theme = useTheme();
    return(
        <>
        <Container className={styles.ContainerDark}>
        <Container className={styles.Cont} sx={{paddingTop: '2rem'}}>
        <Typography className={styles.TitleSub} color={theme.primary.main}>Education</Typography>
            <hr/>
            <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <br/>
                <Typography variant='h4' color={theme.primary.main} sx={{fontWeight: '400!important'}}>Georgia Institute of Technology</Typography>
                <Typography variant='h6' color={theme.primary.main}>
                    Bachelor of Science in Mechanical Engineering &nbsp;&nbsp;● 
                    &nbsp;Minor in Japanese &nbsp;&nbsp;●
                    &nbsp;Class of 2020
                </Typography>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    p:1,
                }}>
                    <Box sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'left',
                        pt:3
                    }}>
                    <Typography variant='h4' color={theme.primary.main}>Courses</Typography><br/>
                    <Typography variant='h6' color={theme.primary.main}>
                        <CheckIcon color={theme.primary.main}/> Principles of Neuroscience <br/>
                        <CheckIcon color={theme.primary.main}/> Biosystems Analysis <br/>
                        <CheckIcon color={theme.primary.main}/> Machine Design <br/>
                        <CheckIcon color={theme.primary.main}/> Robotics <br/>
                    </Typography>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'left',
                        pt:3
                    }}>
                    <Typography variant='h4' color={theme.primary.main}>Honors</Typography><br/>
                    <Typography variant='h6' color={theme.primary.main}>
                        <EmojiEventsIcon color={theme.primary.main}/> International Plan - Japanese<br/>
                        <EmojiEventsIcon color={theme.primary.main}/> Institute Honors <br/>
                        <EmojiEventsIcon color={theme.primary.main}/> Woodruff Dean's List <br/>
                    </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
        </Container>
        </>
    )
}