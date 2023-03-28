import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ModalToDeleteUser from './ModalToDeleteUser'



import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';





const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
        <Box  sx={{ width: '100%', height: 300 ,display:'grid' ,placeItems:'center',justifyContent:'center'}}>
            <Box sx={{fontSize:'25px',fontWeight:'bold'}}>

            OOPS! No User Details Found
            </Box>
        </Box>
     </Paper>
);

const UserData = () => {

    const navigate = useNavigate()
    const dataOfUsers = useSelector(state => state.loginData)

    const editUser = (rowData) => {
        const indexToDeleteUserRow = dataOfUsers.indexOf(rowData)

        navigate('/edituserdetails', { state: { rowData, indexToDeleteUserRow } })
    }

    const columns = [

        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true
        },


        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true
        },

        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },

        {
            name: 'Mobile Number',
            selector: row => row.mobileNumber,
            sortable: true
        },

        {
            name: 'User Password',
            selector: row => row.password,
            sortable: true
        },

        {
            name: 'Select Post',
            selector: row => row.selectPost,
            sortable: true
        },

        {
            name: 'User Name',
            selector: row => row.userName,
            sortable: true
        },

        {
            name: 'Edit',
            cell: (row) => <Button onClick={() => { editUser(row) }} color='secondary' variant="contained">Edit</Button>,
        },
        {
            name: 'Delete',
            cell: (row) =>

                <ModalToDeleteUser row={row} />
        },

    ]


    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', }}>

                <Button sx={{ m: '25px 30px 0px 0px' }} onClick={() => navigate('/loginform')} variant='contained' >Add More Users</Button>
            </Box>


            {dataOfUsers.length ? <DataTable title='User Information'
                columns={columns}
                data={dataOfUsers}
                fixedHeader
                highlightOnHover
            /> :
                <Box sx={{ height: 300,width:'100%',display:'flex ',justifyContent:'center' ,overflow:'hidden'}}>
                    <Box sx={{ width:'100%'}}>
                        <FormControlLabel 
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label="Show User Details"
                        />
                        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                            {icon}
                           
                        </Slide>
                    </Box>
                </Box>
            }

            {/* <DataTable title='User Information'
                columns={columns}
                data={dataOfUsers}
                fixedHeader
                highlightOnHover
            /> */}
        </div>
    )
}

export default UserData
