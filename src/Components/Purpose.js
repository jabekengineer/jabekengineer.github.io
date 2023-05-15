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
                This is <b className={styles.Emphasize}>Web stuff dude</b>
            </Typography>
            </>
        )
        const makerBlurb = (
            <>
            <Typography variant='h4' color={theme.primary.light}>Maker Projects</Typography>
            <br/>
            <Typography variant='h5' color={theme.primary.main}>
                This is <b className={styles.Emphasize}>making </b>
                stuff and it is really cool
            </Typography>
            </>
        )

        const operationsBlurb = (
            <>
            <Typography variant='h4' color={theme.primary.light}>Process Improvement</Typography>
            <br/>
            <Typography variant='h5' color={theme.primary.main}>
                Everything is a process which can be streamlined. I train and onboard people. I manage projects. 
            </Typography>

            </>
        )

        const flyoutText = {
            'web': webBlurb,
            'making': makerBlurb,
            'operations': operationsBlurb
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
                <Container className = {styles.CardRow} sx={{textAlign: 'center', paddingBottom: 10}} >
                <Typography variant='h5' color={theme.primary.main} sx={{opacity: '60%'}}>Click a box for details</Typography>
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