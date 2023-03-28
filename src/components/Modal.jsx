import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { clearAllCart, removeItemFromCart } from '../Slice/UserSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: '100%',

};

function BasicModal() {

    const dispatch = useDispatch()

    const selectedProductData = useSelector(state => state.users)

    const removeProduct = (data) => {
        dispatch(removeItemFromCart(data))
        console.log(data)

    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const GridComponent = styled(Grid)(({ theme }) => ({
        display: "flex", height: '120px', justifyContent: 'center', alignItems: 'center'
    }))
    const GridParent = styled(Grid)(({ theme }) => ({
        display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15px',

    }))

    const ItemSection = styled(Grid)(({ theme }) => ({
        boxShadow: '1px 1px 5px', borderRadius: '7px', marginTop: '10px'
    }))
    const ButtonComp = styled(Button)(({ theme }) => ({
        color: 'black', fontWeight: 'bold', backgroundColor: 'lightgray'
    }))




    let totalPrice = 0


    const deleteAllCart = () => {
        dispatch(clearAllCart())
    }
    return (

        <div>
            <Button onClick={handleOpen} variant='contained' color='secondary'>Checkout Cart</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ overflow: 'scroll' }}>

                    <GridParent container spacing={1.5} >
                        <Grid item xs={12}>
                            <Button onClick={handleClose} variant='contained' color='secondary'>close Cart</Button>

                        </Grid>
                        <Grid item xs={12}>

                            <Typography sx={{ fontWeight: 'bold' }} variant='h5'>Redux Cart</Typography>
                        </Grid>
                        {selectedProductData.map((element, index) => {
                            totalPrice += element.productPrice
                            return (
                                <ItemSection item key={index} container xs={12}  >
                                    <Grid item xs={12} md={3} >
                                        <img style={{ width: '100%', height: '120px' }} src={element.image} />
                                    </Grid>

                                    <GridComponent item xs={6} md={3} sx={{ fontWeight: 'bold' }}>
                                        {element.productName
                                        }
                                    </GridComponent>


                                    <GridComponent item xs={6} md={3}>
                                        <ButtonComp variant="contained" >
                                            Price $ {element.productPrice}
                                        </ButtonComp>
                                    </GridComponent>
                                    <GridComponent item xs={12} md={3}>
                                        <Button onClick={() => { removeProduct(index) }} variant="contained" color='secondary'>
                                            Remove
                                        </Button>
                                    </GridComponent>
                                </ItemSection>
                            )
                        })}
                        {selectedProductData.length ? <Grid item container xs={12}>
                            <GridComponent item xs={6} md={6}>
                                <Typography variant='h6'>

                                    Total Items : {selectedProductData.length}
                                </Typography>
                            </GridComponent>
                            <GridComponent item xs={6} md={3}>
                                <ButtonComp  >
                                    Total Price : $ {totalPrice}
                                </ButtonComp>
                            </GridComponent>
                            <GridComponent item md={3} xs={12} >
                                <Button onClick={() => { deleteAllCart() }} variant="contained" color='secondary'>
                                    Clear Cart
                                </Button>
                            </GridComponent>
                        </Grid> : ""
                        }
                    </GridParent>

                </Box>
            </Modal>
        </div>
    );
}


export default React.memo(BasicModal)