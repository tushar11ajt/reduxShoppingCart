import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOption(props) {

    const changeUserPost = (e) => {
        console.log(e.target.name)
        props.setterFunction({
            ...props.userDataState,
            [e.target.name]: e.target.value
        })
    }
    const changeBlur = () => {
        return null
    }
    return (
        <FormControl sx={{ width: '100%' }} size="small">
            <InputLabel id="demo-select-small">Select Position</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={props.selectPost ? props.selectPost.values.selectPost : props.values}
                label="Select Position"
                name='selectPost'
                onChange={props.selectPost ? props.selectPost.handleChange : changeUserPost}
                onBlur={props.selectPost ? props.selectPost.handleBlur : changeBlur}
            >
                <MenuItem value="">
                    <em>Selection Position</em>
                </MenuItem>
                <MenuItem value='Project Manager'>Project Manager</MenuItem>
                <MenuItem value='Team Leader'>Team Leader</MenuItem>
                <MenuItem value='Intern Trainee'>Intern Trainee</MenuItem>
                <MenuItem value='Project co-ordinator'>Project co-ordinator</MenuItem>
            </Select>
        </FormControl>
    );
}