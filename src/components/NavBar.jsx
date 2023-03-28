import { Button, Grid, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import ItemsCount from './ItemsCount'
import Modal from './Modal'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setFilterdData } from '../Slice/UserSlice';
import CustomizedSwitches from './SwitchThemeComponent';
import AsideBarComponent from './AsideBarComponent';


const NavBar = ({ setThemeMode }) => {
  const NavBarGrid = styled(Grid)(({ theme }) => (
    {
      display: "flex",
      justifyContent: 'space-around',
      paddingTop: '20px',
      position: 'fixed',
      backgroundColor: `${theme.palette.mode === 'dark' ? "black" : "white"} `,
      zIndex: 1,
      paddingBottom: '20px',
      boxShadow: `${theme.palette.mode === 'dark' ? "0px 0px 5px gray" : "0px 0px 5px white"} `,


      [theme.breakpoints.down('md')]: {
        marginBottom: '150px',
      },
    }))



  const NavBarOptionsGrid = styled(Grid)`
        display:flex;
        justify-content:space-around;
  `

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '8px',
    '&:hover': {
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => (

    {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2
    }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    backgroundColor: `${theme.palette.mode === 'dark' ? "transparent" : "lightgray"} `,

    borderRadius: '5px',

    '& .MuiInputBase-input': {

      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      cursor: "pointer",

      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const dispatch = useDispatch()

  const handleChenge = (e) => {
    dispatch(setFilterdData(e.target.value))
  }
  const CountButton = styled(Button)(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }))
  const GridNavHeading = styled(Grid)(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center', marginBottom: "8px"
    }
  }))


  return (
    <NavBarGrid container spacing={1} >
    <Grid item xs={1} sx={{height:'40px'}}>

      <AsideBarComponent />
    </Grid>
      <GridNavHeading item xs={12} md={2}>
        <Typography variant='h6'>REDUX STORE</Typography>
      </GridNavHeading>
      <Grid item md={2}>
        <CustomizedSwitches setThemeMode={setThemeMode} />
      </Grid>
      <Grid item xs={5} md={2}>

        <Search >
          <SearchIconWrapper  >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase

            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => { handleChenge(e) }}
          />
        </Search>

      </Grid>
      <NavBarOptionsGrid item md={4} xs={6}>
        <CountButton color='secondary' variant="contained">Home</CountButton>
        <ItemsCount />
        <Modal />
      </NavBarOptionsGrid>
    </NavBarGrid>
  )
}

export default memo(NavBar)
