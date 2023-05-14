import React, {Component} from 'react';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Intro from './Components/Intro'
import Purpose from './Components/Purpose';

const theme = createTheme({
  primary: {
    main: '#6c7983',
    light: 'rgb(137, 147, 155)'
  },
  secondary: {
    main: 'rgb(67,70,46)',
  },
  text: {
    primary: 'rgb(35,51,51)',
    secondary: 'rgb(107,113,114)',
  },
    background: {
      dark: '#abb8c3',
    }
    
});


class App extends Component {
  render() {
    return (
      <>
      <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <Banner  />
        <Intro/>
        <Purpose />
      </div>
      </ThemeProvider>
    </>
    )
}
}
export default App;