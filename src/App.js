import React, {Component} from 'react';
import $ from 'jquery';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Intro from './Components/Intro'
import Purpose from './Components/Purpose';
import { CircularProgress, Box, Typography, Container } from '@mui/material';
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
  constructor(props){
    super(props);
    this.state = {
      resumeData: {},
      ready: false
    };
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({resumeData: data, ready: true});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    const ready = this.state.ready;
    return (
      <>
      {ready && 
      <ThemeProvider theme={theme}>
      <div className='App'>
        <Header data={this.state.resumeData} ready={this.state.ready}/>
        <Banner data={this.state.resumeData} />
        {/* <Container sx={{display: 'flex', flexDirection: 'column'}}> */}
        <Intro/>
        <Purpose data={this.state.resumeData}/>
        {/* </Container> */}
      </div>
      </ThemeProvider>
      } 



      {!ready && 
      <>
      <Box 
      sx={{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
      <div>
      <Typography variant='h2' paddingTop={'110%'} paddingBottom={'10%'}>Your page is loading</Typography>
      </div>
      <CircularProgress/>
      </Box>
      </>
      }
    </>
    )
}
}
export default App;