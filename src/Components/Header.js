import React from 'react'
import {Box, Typography, IconButton, Toolbar, AppBar, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Header(props) {
    const theme = useTheme();
    const pages = ['Home', 'Projects', 'Contact', 'Resume']
    return(
            <AppBar position='static' color='transparent' elevation={1}>
            <Container maxWidth='xxl'>
                <Toolbar>
                    {pages && pages.map((navName, index) => (
                    <Box
                    href={"/" + navName}
                    component='a'
                    borderRadius={2}
                    key={index}
                    sx={{
                        textDecoration: 'none',
                        "&:hover":{
                            backgroundColor: `${theme.text.secondary}`,
                            opacity: '70%'
                        }
                    }}
                    >
                    <Typography 
                    variant='h5' 
                    noWrap
                    color={theme.text.secondary}
                    sx={{
                        p: 2,
                        "&:hover":{
                            color: 'white'
                        }
                    }}>
                        {navName}
                    </Typography>
                    </Box>
                    ))}
                    {/* Icons */}
                    <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'end',
                        alignContent: 'center'
                    }}
                    >
                        <IconButton 
                        component='a'
                        size='large'
                        href="https://www.linkedin.com/in/jason-sebek/"
                        >
                            <LinkedInIcon 
                            sx={{
                                "&:hover": {color: `${theme.primary.main}`},
                                'scale': '1.75',
                                'marginTop': .33}}/>
                        </IconButton>
                        <IconButton 
                        component='a'
                        href="https://github.com/jabekengineer"
                        >
                            <GitHubIcon 
                            sx={{
                                "&:hover": {color: `${theme.primary.main}`},
                                'scale': '1.5'}}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            </AppBar>
    )
}
