import React from 'react'
import {
    TextField,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';

export const CustomTextField = (props) => <TextField name={props.name} id={props.name} inputRef={props.register} /> 


export const CustomCheckbox = (props) => {
    return(
        <FormControlLabel
            control={<Checkbox />}
            label="Required"
            name="required"
            inputRef={props.register}
        />
    )
}