import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';
import GoogleIcon from '@mui/icons-material/Google';
import Divider from '@mui/material/Divider';
import SelectOption from './SelectOption';
import { useFormik } from 'formik';
import { FormSchema } from './FormSchema';
import { useDispatch } from 'react-redux';
import { setUserData } from '../Slice/UserSlice';
import { useNavigate } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const LoginForm = () => {
    const LoginButton = styled(Button)`
width:80%;
`

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const formInitalValues = {
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: "",
        selectPost: '',
        userName: '',
    }
    const formik = useFormik({
        initialValues: formInitalValues,
        validationSchema: FormSchema,
        onSubmit: (values, action) => {
               action.resetForm();
            dispatch(setUserData(values))
            navigate('/')
        }
    })
    const closeLoginPage = () => {
        navigate('/')
    }
    return (
        <>

            <Box sx={{ width: '100%', height: '100Vh', display: "grid", placeItems: "center", }}>

                <Box>


                    <Grid container sx={{ width: '40vw', boxShadow: '0px 0px 5px' }} >
                        <Box fontSize='large' onClick={closeLoginPage} sx={{
                            position: 'absolute', right: 400, top: 10, borderRadius: '50%',
                            "&:hover": {
                                backgroundColor: '#c1bdbd', cursor: 'pointer'
                            }
                        }}><CloseRoundedIcon sx={{ fontSize: "40px" }} /></Box>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', height: '70px' }}  >
                            <Avatar sx={{ width: '60px', height: '60px' }} alt="Remy Sharp" src="https://tse3.mm.bing.net/th?id=OIP.1j2KtU497XRRiuDle7-ttQHaEQ&pid=Api&P=0" />
                        </Grid>


                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}  >
                            <Box sx={{ fontSize: "28px", margin: 0, padding: 0, fontWeight: 'bolder' }} component='p'>Create Account</Box>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', margin: "10px" }}  >

                            <Box >Already have an Account? <span style={{ color: 'blue' }} >Sign In</span></Box>

                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', margin: 0, padding: '0' }}  >

                            <LoginButton startIcon={<GoogleIcon />} size='small' sx={{ height: "40px", margin: 0, padding: '0' }} variant="contained">Sign Up With Google</LoginButton>

                        </Grid>

                        <Divider sx={{ width: '80%', margin: "10px 57px" }}>or</Divider>

                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2} sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px', padding: '0px 30px' }}>

                                <Grid item xs={6}>
                                    <TextField sx={{ width: '100%' }} size='small' type='text' label="First Name" value={formik.values.firstName} onBlur={formik.handleBlur} name='firstName' onChange={formik.handleChange} />
                                    {formik.errors.firstName && formik.touched.firstName ? (<span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.firstName}</span>
                                    ) : null}
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField sx={{ width: '100%' }} size='small' type='text' label="Last Name" value={formik.values.lastName} name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.lastName && formik.touched.lastName ? (

                                        <span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.lastName}</span>
                                    ) : null}

                                </Grid>
                                <Grid item xs={12} >
                                    <TextField sx={{ width: '100%' }} size='small' type='email' label="Email" value={formik.values.email} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.email && formik.touched.email ? (

                                        <span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</span>
                                    ) : null}

                                </Grid>
                                <Grid item xs={12} >
                                    <TextField sx={{ width: '100%' }} size='small' type='text' label="@username" value={formik.values.userName} name='userName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.userName && formik.touched.userName ? (

                                        <span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.userName}</span>
                                    ) : null}

                                </Grid>

                                <Grid item xs={12} >
                                    <TextField sx={{ width: '100%' }} size='small' type='password' label="Password" value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.password && formik.touched.password ? (

                                        <span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</span>
                                    ) : null}

                                </Grid>
                                <Grid xs={6} item >
                                    <SelectOption selectPost={formik} />
                                    {formik.errors.selectPost && formik.touched.selectPost ? (

                                        <span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.selectPost}</span>
                                    ) : null}

                                </Grid>
                                <Grid item xs={6} >
                                    <TextField sx={{ width: '100%' }} size='small' type='number' label="Mobile Number"
                                        value={formik.values.mobileNumber}
                                        name='mobileNumber' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.mobileNumber && formik.touched.mobileNumber ? (

                                        <span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.mobileNumber}</span>
                                    ) : null}

                                </Grid>
                                <Grid item xs={0.8} >
                                    <input type='checkbox' style={{ width: '16px', height: '16px' }} onChange={() => { return null }} checked />
                                </Grid>
                                <Grid item xs={10} >
                                    <Typography sx={{ fontSize: '14px' }}>I agree to the <span style={{ color: 'blue' }} className='textblue'>Terms of Service </span> and <span style={{ color: 'blue' }} >Privacy Policy </span></Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Button type='submit' sx={{ width: "100%", marginBottom: '20px' }} variant='contained'>Login</Button>
                                </Grid>



                            </Grid>
                        </form>



                    </Grid>





                </Box>

            </Box>







        </>
    )
}

export default LoginForm
