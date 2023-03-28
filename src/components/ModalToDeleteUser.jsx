
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { userDeleteFromData } from '../Slice/UserSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModatToDeleteUser({ row }) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleOpen = (row) => {
        console.log(row)

        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const dataOfUsers = useSelector(state => state.loginData)
    const deleteUser = (row) => {
        const indexToDeleteUserRow = dataOfUsers.indexOf(row)
        dispatch(userDeleteFromData(indexToDeleteUserRow))
        setOpen(false)
    }

    return (
        <div>
            <Button variant='contained' color='error' onClick={() => { handleOpen(row) }}>Delete</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are You Sure You want to Remove User
                    </Typography>
                    <Box sx={{ display: 'flex', width: '400px', justifyContent: 'space-around', marginTop: '25px' }}>


                        <Button onClick={() => { deleteUser(row) }} variant='contained' color='error'>Yes</Button>


                        <Button onClick={() => { return setOpen(false) }} variant='contained' color='success'>Cancel</Button>
                    </Box>


                </Box>
            </Modal>
        </div>
    );
}