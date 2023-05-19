import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { Box, Card, Container, Grow, Link, List, Paper, Typography } from '@mui/material'
import styles from './styles/Section.module.css';

export default function Experience() {
    const theme = useTheme();
    const [showFlyout, setShowFlyout] = React.useState();
    const [flyout, setFlyout] = React.useState();
    const toggleFlyout = (cardName) => {
        setShowFlyout(true)
        const ulBlurb = (
            <>
            <Typography variant='h5' color={theme.primary.main}>Product Analysis Intern, 2018</Typography>
            <List>
            <Typography variant='h6' color={theme.primary.light}>
             ●&nbsp;&nbsp;
            Reported <b className={styles.Emphasize}>failure mode analysis </b> findings to Home Depot engineers prompting two design fixes on Hampton Bay ceiling fans. <br/>
             ●&nbsp;&nbsp;
            Published <b className={styles.Emphasize}>Microsoft Visual Basic</b> modules to enhance inventory system integration with peripheral barcode scanner.
            </Typography>
            </List>
            <br/>
            <Typography variant='h5' color={theme.primary.main}>Compliance Engineering Intern, 2019</Typography>
            <List>
            <Typography variant='h6' color={theme.primary.light}>
             ●&nbsp;&nbsp;
            Led intern team in 5-week improvement project to build test fixture. Modeled in <b className={styles.Emphasize}>Solidworks</b> to be compliant with UL 1598.<br/>
             ●&nbsp;&nbsp;
            Automated form filling with <b className={styles.Emphasize}>Microsoft Visual Basic</b> macro and shared solution with 3 peers in Material Testing unit.
            </Typography>
            </List>
            </>
        )

        const qpacBlurb = (
            <>
            <Typography variant='h5' color={theme.primary.main}>R&D Engineer</Typography>
            <List>
            <Typography variant='h6' color={theme.primary.light}>
             ●&nbsp;&nbsp;
            Developed BOM generator tool in <b className={styles.Emphasize}>Microsoft Visual Basic</b>, linking company storefront and manufacturing department
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;Designed endpoints for sales' pricing models, engineering's Solidworks automation pipeline, and operations' production forms.  
            <br/>
             ●&nbsp;&nbsp;
            Owned DXF review process, releasing ~10 sheet metal enclosure orders to production per day.
            </Typography>
            </List>
            </>
        )
        const ifosBlurb = (
            <>
            <Typography variant='h5' color={theme.primary.main}>Optomechanical Engineer</Typography>
            <List>
            <Typography variant='h6' color={theme.primary.light}>
            ●&nbsp;&nbsp;
            Published <b className={styles.Emphasize}>
                <Link href="https://github.com/jabekengineer/jsTest" color={theme.primary.main}>jsTest</Link></b>
                &nbsp;science suite with instrument plugins and experimental design modules.
            <br/>
            ●&nbsp;&nbsp;
            Developed <b className={styles.Emphasize}> Python </b> analysis pipeline to support development of Fiber Optic Gyroscope
            </Typography>
            </List>
            <br/>
            <Typography variant='h5' color={theme.primary.main}>Interim Operations Manager</Typography>
            <List>
            <Typography variant='h6' color={theme.primary.light}>
             ●&nbsp;&nbsp;
            With one-week onboarding, took on purchasing and shipping & receiving until hiring replacement 5 months later.
            <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;Migrated company to <Link href="https://www.teamprocure.com/" color={theme.primary.main}>
                    Team Procure</Link> purchasing service, cutting order turnaround time by 75%.
            <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;Migrated engineering team project management to Microsoft Teams. 
            </Typography>
            </List>
            </>
        )
        const gtBlurb = (
            <>
            <Typography variant='h5' color={theme.primary.main}>R&D Engineer</Typography>
            <List>
            <Typography variant='h6' color={theme.primary.light}>
                ●&nbsp;&nbsp;
                Developing <b className={styles.Emphasize}>Mousemate</b> for Lab Technicians and Scientists to manage their experimental animal records. 
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp; React + Material UI frontend 
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp; Node.js + MySQL CRUD backend  

                <br/>
                ●&nbsp;&nbsp;
                Updated design of Lick Detector and Water Reward Delivery System
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp; Enclosure Modeling - Solidworks & Component Layout - PCB123 
                <br/>
                ●&nbsp;&nbsp;
                Migrated lab documentation to GT-hosted <b className={styles.Emphasize}>Mediawiki</b> site and brought core experimental software under <b className={styles.Emphasize}>Git</b> version control.
            </Typography>
            </List>
            </>
        )

        const flyoutText = {
            'ul': ulBlurb,
            'qpac': qpacBlurb,
            'ifos': ifosBlurb,
            'gt': gtBlurb
        }
        setFlyout(flyoutText[cardName])
    }

    useEffect(() => {
        setFlyout(false)
    }, [])
    return(
        <>
        <Container className={styles.Cont}>
        <Typography className={styles.TitleSub} color={theme.primary.main}>Experience</Typography>
            <hr/>
        
        <Box className={styles.JobCardRow}> 
            <Card className={styles.JobCard} onClick={() => toggleFlyout('ul')}>
                <img src={require('../assets/ul.png')}/>
                <Typography variant='h4' color={theme.primary.main}>Underwriters Labs</Typography>
                <Typography variant='h6' color={theme.primary.main}>2019, 2020</Typography>
            </Card>
            <Card className={styles.JobCard} onClick={() => toggleFlyout('qpac')}>
                <br/>
                <br/>
                <img src={require('../assets/qpac.png')}/>
                <br/>
                <Typography variant='h4' color={theme.primary.main}>Q-Pac Systems</Typography>
                <Typography variant='h6' color={theme.primary.main}>2020</Typography>
            </Card>
            <Card className={styles.JobCard} onClick={() => toggleFlyout('ifos')}>
                <br/>
                <br/>
                <img src={require('../assets/ifos.png')}/>
                <br/>
                <Typography variant='h4' color={theme.primary.main}>IFOS</Typography>
                <Typography variant='h6' color={theme.primary.main}>2021-2022</Typography>
            </Card>
            <Card className={styles.JobCard} onClick={() => toggleFlyout('gt')}>
                <img src={require('../assets/gt.png')}/>
                <Typography variant='h4' color={theme.primary.main}>Georgia Tech</Typography>
                <Typography variant='h6' color={theme.primary.main}>2022-Current</Typography>
            </Card>
        </Box>

        {!flyout && 
                <Container className = {styles.CardRow} sx={{textAlign: 'center', paddingBottom: 3}} >
                <Typography variant='h5' color={theme.primary.main} sx={{opacity: '60%', paddingTop: 2}}>Click a box for details</Typography>
                </Container>
            }
            {flyout && 
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
                <Grow in={showFlyout}>
                    <Paper elevation={4} className={styles.JobFlyout}>
                        {flyout}
                    </Paper>
                </Grow>
            </Container>
            }
        </Container>
        </>
    )
}