import React from 'react';
import {
    makeStyles,
    Typography,
    Container,
    TextField,
    Checkbox,
    FormControlLabel,
    Button
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '40vh',
        minWidth: '240px',
        width: '50vw',
        background: 'white',
        borderRadius: '10px',
        padding: '1.2em'
    }

}))

const schema = yup.object().shape({
    fieldName: yup.string().required(),
    required: yup.boolean().required()
  });

const FormFieldCreator = ({ addFieldHandler, modelCloseHandler }) => {
    const classes = useStyles()
    const { register, handleSubmit, control } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <Container className={classes.container}>
            <Typography variant="h5" >New Field</Typography>
            <form noValidate onSubmit={handleSubmit((data)=> alert(JSON.stringify(data)))}>
                <TextField name="name" inputRef={register} />
                <FormControlLabel
                      control={<Checkbox />}
                      label="Required"
                      name="required"
                      inputRef={register}
                    />
                <Button type="submit" color="primary">Submit</Button>
            </form>
        </Container>
    )
}

export default FormFieldCreator;