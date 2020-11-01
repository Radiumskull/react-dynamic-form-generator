import React, { useState } from 'react';
import {
    makeStyles,
    Typography,
    Container,
    Select,
    MenuItem
} from '@material-ui/core'
import { CheckboxFormField, TextFormField } from './FormFieldForms'


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



const FormFieldCreator = ({ addFieldHandler, modalCloseHandler }) => {
    const classes = useStyles()
    const [ fieldType, changeFieldType ] = useState('text');

    const changeFieldTypeHandler = (event) => {
        changeFieldType(event.target.value)
    }

    const formRenderHandler = (fieldType) => {
        switch(fieldType){
            case 'text':
                return <TextFormField addFieldHandler={addFieldHandler} modalCloseHandler={modalCloseHandler}/>;
            case 'checkbox':
                return <CheckboxFormField addFieldHandler={addFieldHandler} modalCloseHandler={modalCloseHandler}/>;
            default:
                return <div>Oops</div>
        }

    }

    return(
        <Container className={classes.container}>
            <Typography variant="h5" >New Field</Typography>
            <Select
                value={fieldType}
                onChange={changeFieldTypeHandler}    
            >
                <MenuItem value={'dropdown'}>Dropdown</MenuItem>
                <MenuItem value={'text'}>Text</MenuItem>
                <MenuItem value={'radiogroup'}>RadioGroup</MenuItem>
                <MenuItem value={'checkbox'}>Checkbox</MenuItem>
            </Select>
            { formRenderHandler(fieldType) }
        </Container>
    )
}

export default FormFieldCreator;