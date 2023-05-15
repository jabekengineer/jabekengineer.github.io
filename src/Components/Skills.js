import { useTheme } from '@emotion/react'
import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import styles from './styles/Section.module.css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export default function Skills() {
    const theme = useTheme();
    return(
        <Container className={styles.Cont}>
        <Typography className={styles.TitleSub} color={theme.primary.main}>Skills</Typography>
        <hr/>
        <Typography className={styles.Plain} color={theme.primary.main}>
            The list of tools I can use to create is always growing. These are just the ones I have used to deliver projects on-the-job. 
        </Typography>
        <Box className = {styles.ListRow}>
        <Box className = {styles.List}>
            <Typography className={styles.ListTitle} color={theme.primary.main}>Languages</Typography>
            <Box className={styles.ListItemBox}>
             <JavascriptIcon color={theme.primary.light} className={styles.ListIcon} /> 
             <Typography className={styles.ListItem} color={theme.primary.main}>Javascript / Apps Script</Typography>
             </Box>
             <Box className={styles.ListItemBox}>
             <img src={require('../assets/python.png')} alt='python language'/>
             <Typography className={styles.ListItem} color={theme.primary.main}>Python</Typography>
             </Box>
             <Box className={styles.ListItemBox}>
             <img src={require('../assets/matlab.png')} alt='matlab language'/>
             <Typography className={styles.ListItem} color={theme.primary.main}>Matlab</Typography>
             </Box>
             <Box className={styles.ListItemBox}>
             <img src={require('../assets/japanese.png')} alt='japanese language'/>
             <Typography className={styles.ListItem} color={theme.primary.main}>Japanese (N2)</Typography>
             </Box>
        </Box>
        <Box className = {styles.List}>
            <Typography className={styles.ListTitle} color={theme.primary.main}>Technologies</Typography>
            <Box className={styles.ListItemBox}>
            <img src={require('../assets/nodejs_small.png')} alt='node.js'/>
             <Typography className={styles.ListItem} color={theme.primary.main}>Node.js</Typography>
             </Box>
             <Box className={styles.ListItemBox}>
             <img src={require('../assets/database.png')} alt='database'/>
             <Typography className={styles.ListItem} color={theme.primary.main}>MySQL</Typography>
             </Box>
             <Box className={styles.ListItemBox}>
             <img src={require('../assets/github.png')} alt='database'/>
             <Typography className={styles.ListItem} color={theme.primary.main}>Git / Github</Typography>
             </Box>
             <Box className={styles.ListItemBox}>
             <img src={require('../assets/wikipedia.png')} alt='database'/>
             <Typography className={styles.ListItem} color={theme.primary.main}>MediaWiki</Typography>
             </Box>
        </Box>
        <Box className = {styles.List}>
            <Typography className={styles.ListTitle} color={theme.primary.main}>Design and Fab</Typography>
            <Box className={styles.ListItemBox}>
                <img src={require('../assets/solidworks_3.png')} alt='laser'/>
                <Typography className={styles.ListItem} color={theme.primary.main}>Solidworks CAD & CAM</Typography>
            </Box>
            <Box className={styles.ListItemBox}>
                <PrecisionManufacturingIcon sx={{scale: '1.3', color: '#617381', paddingBottom: '2px'}} /> 
                <Typography className={styles.ListItem} color={theme.primary.main}>2-Axis CNC Mill & Lathe</Typography>
            </Box>
            <Box className={styles.ListItemBox}>
                <img src={require('../assets/electronics.png')} alt='circuit'/>
                <Typography className={styles.ListItem} color={theme.primary.main}>PCB123</Typography>
            </Box>
            <Box className={styles.ListItemBox}>
                <img src={require('../assets/laser.png')} alt='laser'/>
                <Typography className={styles.ListItem} color={theme.primary.main}>Trotec Job Control</Typography>
            </Box>
        </Box>
        </Box>
        </Container>
    )
}