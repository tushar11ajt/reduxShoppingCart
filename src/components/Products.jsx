import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardComponent from '../CardComponent'



const Products = () => {

    const allProductsData = useSelector(state => state.user2)



    return (
        <Grid container spacing={2}  >
            <Grid item xs={12}>
                <Typography>Products</Typography>
            </Grid>


            {allProductsData.map((element, index) => {
                return (
                    <Grid sx={{
                        transition: "0.3s all ease", '&:hover': {
                            cursor: 'pointer', 
                        }
                    }} key={index} item sm={12} md={4} lg={3} >

                        <CardComponent element={element} />

                    </Grid>
                )
            })}


        </Grid>
    )
}

export default Products
