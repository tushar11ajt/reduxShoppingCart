import { Grid, Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from './Slice/UserSlice';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';


const CardComponent = ({ element }) => {
  const dispatch = useDispatch()
  const [addToCarttext, isAddedToCart] = useState('Add to Cart')

  const navigate = useNavigate()
  const userLoginData = useSelector(state => state.loginData)


  const addToCart = (event, data) => {
    if (!userLoginData.length) {
      navigate('/loginform')

    } else {
      isAddedToCart('Added ')
      dispatch(addItemsToCart(data))
    }
  }


 


  const CardComponent = styled(Card)(({ theme }) => ({
    width: '100%', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center'
  }))




  return (
    <CardComponent sx={{
      '&:hover': {
        boxShadow: "0px 0px 5px purple"
      }
    }}  >
      <img src={element.image} style={{ width: '100%', height: '45%' }} />

      <CardContent style={{ height: '45%', overflow: 'auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          {element.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.productSpecification}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: "5px" }}>
        <Box sx={{ marginRight: '50px', fontWeight: 'bold' }}>${element.productPrice}</Box>
        <Button size="small" color='secondary' onClick={(event) => { addToCart(event, element) }} variant='contained'>{addToCarttext}</Button>

      </CardActions>
    </CardComponent>
  )
}

export default CardComponent
