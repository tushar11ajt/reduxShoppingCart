import { Button } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const ItemsCount = () => {
const dataOfSelectedItems = useSelector(state=>state.users)

const CountButton = styled(Button)(({theme})=>({
cursor:'pointer',
fontWeight:'bold',
[theme.breakpoints.down('sm')]:{
  display:'none'
}
}))

  return (
    <CountButton color='secondary' style={{fontWeight:'bold'}} variant="contained">Cart Items :{dataOfSelectedItems.length}</CountButton>
  )
}

export default memo(ItemsCount)
