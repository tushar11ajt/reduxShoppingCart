import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { createTheme, CssBaseline, Grid, Typography } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { useState } from 'react';

function LandingPage() {
  const TypographyGrid = styled(Grid)(({ theme }) => ({
    marginTop: "70px",
    [theme.breakpoints.down('md')]: {
      marginTop: "150px",
    }
  }))

const [themeMode,setThemeMode]=useState('light')

  const themes2 = createTheme({
    palette: {
      mode: themeMode
    }
  }) 


  return (

<ThemeProvider theme={themes2}>
<CssBaseline/>

    <Grid container spacing={3} justifyContent='center'>

      <Grid item xs={12}>
        <NavBar setThemeMode={setThemeMode} />
      </Grid>

      <TypographyGrid item  xs={10} md={10} >
        <Typography sx={{ fontWeight: "bold" }} variant='h5'>WELCOME TO REDUX TOOLKIT</Typography>
      </TypographyGrid>

      <Grid item xs={10}>
        <Products />
      </Grid>



    </Grid>
</ThemeProvider>
  );
}

export default LandingPage;
