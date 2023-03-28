import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SelectOption from './SelectOption';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../Slice/UserSlice';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function EditUserData() {
    const { state } = useLocation();
    console.log(state)
    const dispatch = useDispatch()
    const [userDataState, setUserDataState] = React.useState(state.rowData)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUserDetails({ updatedDetails: userDataState, indexToBeDeleted: state.indexToDeleteUserRow }))
        navigate('/allUserDetails')


        console.log(userDataState)
    };
    const changeUserValue = (event) => {
        console.log(event.target.name)
        setUserDataState({
            ...userDataState,
            [event.target.name]: event.target.value
        })
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Edit User Details
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    value={userDataState.firstName}
                                    autoFocus
                                    onChange={changeUserValue}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={userDataState.lastName}
                                    onChange={changeUserValue}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={userDataState.email}
                                    onChange={changeUserValue}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="User Name"
                                    label="@userName"
                                    name="userName"
                                    autoComplete="User Name"
                                    value={userDataState.userName}
                                    onChange={changeUserValue}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={userDataState.password}
                                    onChange={changeUserValue}
                                />
                            </Grid>

                            <Grid item xs={6} md={6}>
                                <SelectOption values={userDataState.selectPost} setterFunction={setUserDataState} userDataState={userDataState} />
                            </Grid>


                            <Grid item xs={6} >
                                <TextField
                                    required
                                    fullWidth
                                    name="mobileNumber"
                                    label="MobileNumber"
                                    type="number"
                                    id="number"
                                    autoComplete="Number"
                                    size='small'
                                    value={userDataState.mobileNumber}
                                    onChange={changeUserValue}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update User
                        </Button>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}