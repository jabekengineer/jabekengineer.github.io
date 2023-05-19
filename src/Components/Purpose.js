import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { Box, Card, Container, Grow, Paper, Typography } from '@mui/material'
import styles from './styles/Section.module.css';



export default function Intro(props) {

    const theme = useTheme();
    const [showFlyout, setShowFlyout] = React.useState();
    const [flyout, setFlyout] = React.useState();

    const toggleFlyout = (cardName) => {
        setShowFlyout(true)
        const webBlurb = (
            <>
            <Typography variant='h4' color={theme.primary.light}>Web Development</Typography>
            <br/>
            <Typography variant='h5' color={theme.primary.main}>
                Experience in <b className={styles.Emphasize}>React, Node.js, Express.js</b> and <b className={styles.Emphasize}>Google Apps Script</b> with completion of Mousemate, a 
                full-stack web application, and OrderHelper, a Google Workspace Add-On.  
            </Typography>
            </>
        )
        const makerBlurb = (
            <>
            <Typography variant='h4' color={theme.primary.light}>Maker Culture</Typography>
            <br/>
            <Typography variant='h5' color={theme.primary.main}>
                I volunteer at the Invention Studio, GT's campus maker space. 
            </Typography>
            </>
        )

        const operationsBlurb = (
            <>
            <Typography variant='h4' color={theme.primary.light}>Process Improvement</Typography>
            <br/>
            <Typography variant='h5' color={theme.primary.main}>
                I bring a process-oriented approach to my work, and have had a hand in structural improvements to every team I've been part of. 
            </Typography>
            </>
        )
        const scienceBlurb = (
            <>
            <Typography variant='h4' color={theme.primary.light}>Science</Typography>
            <br/>
            <Typography variant='h5' color={theme.primary.main}>
                I prefer to use my engineering skills to support the study of the brain. 
            </Typography>
            </>
        )

        const flyoutText = {
            'web': webBlurb,
            'making': makerBlurb,
            'operations': operationsBlurb,
            'science': scienceBlurb
        }
        setFlyout(flyoutText[cardName])
    }

    useEffect(() => {
        setFlyout(false)
    }, [])

    return(
        <>
        <Container className={styles.ContainerDark}>
            <Container className={styles.Cont} sx={{paddingTop: '2rem'}}>
            <Typography className={styles.TitleSub} color={theme.primary.main}>What I do </Typography>
            <hr/>
            <br/>
            <Typography className={styles.Plain} color={theme.primary.main}>
                I cater my skillset for work with agile teams in the fundamental research space.</Typography>
            <br/>
            {/* Cards */}
            <Box className = {styles.CardRow}>
                {/* Web Development */}
                <Card className={styles.Card} onClick={() => toggleFlyout('web')}>
                    <img src={require('../assets/nodejs.png')} alt='nodejs'/>
                    <Typography variant='h4' color={theme.primary.main}>Web</Typography>
                </Card>
                <Card className={styles.Card} onClick={() => toggleFlyout('making')}>
                    <img src={require('../assets/solidworks_2.png')} alt='soldiworks'/>
                    <Typography variant='h4' color={theme.primary.main}>Making</Typography>
                </Card>
                <Card className={styles.Card} onClick={() => toggleFlyout('operations')}>
                    <img src={require('../assets/operations.png')} alt='operations'/>
                    <Typography variant='h4' color={theme.primary.main}>Operations</Typography>
                </Card>
                <Card className={styles.Card} onClick={() => toggleFlyout('science')}>
                    <img src={require('../assets/oscilloscope.png')} alt='oscilloscope'/>
                    <Typography variant='h4' color={theme.primary.main}>Science</Typography>
                </Card>
            </Box>
            </Container>
            {!flyout && 
                <Container className = {styles.CardRow} sx={{textAlign: 'center', paddingBottom: 3}} >
                <Typography variant='h5' color={theme.primary.main} sx={{opacity: '60%', paddingTop: 2}}>Click a box for details</Typography>
                </Container>
            }
            {flyout && 
            <Container className={styles.Cont} sx={{paddingTop: 0}}>
                <Box className = {styles.CardRow}>
                <Grow in={showFlyout}>
                    <Paper elevation={4} className={styles.Flyout}>
                        {flyout}
                    </Paper>
                </Grow>
                </Box>
            </Container>
            }
            </Container>
        </>
    )
}