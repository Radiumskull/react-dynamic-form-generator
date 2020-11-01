import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Button
} from '@material-ui/core'

// const schema = yup.object().shape({
//     fieldName: yup.string().required(),
//     required: yup.boolean().required()
//   });

export const TextFormField = ({ addFieldHandler, modalCloseHandler }) => {
    const { register, handleSubmit, control } = useForm();
    const onSubmitHandler = data => {
        addFieldHandler({ name: data.name, required: data.required, type: 'text' })
        modalCloseHandler();
    };

    return(
        <form noValidate>
            <TextField name="name" inputRef={register} />
            <FormControlLabel
                control={<Checkbox />}
                label="Required"
                name="required"
                inputRef={register}
                />
            <Button type="button" color="primary" onClick={onSubmitHandler}>Submit</Button>
        </form>
    )
}

export const CheckboxFormField = ({ addFieldHandler, modalCloseHandler }) => {
    const { register, handleSubmit, control } = useForm();
    const onSubmitHandler = data => {
        addFieldHandler({ name: data.name, required: data.required, type: 'checkbox' })
        modalCloseHandler();
    };

    return(
        <form noValidate>
            <TextField name="name" inputRef={register} />
            <Button type="button" color="primary" onClick={onSubmitHandler}>Submit</Button>
        </form>
    )

}
