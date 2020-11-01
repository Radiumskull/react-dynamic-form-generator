import React, { useState } from 'react'
import {
    makeStyles,
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core'

//Components
import FormFieldCreator from '../components/FormFieldCreator/FormFieldCreator'



const useStyles = makeStyles((theme) => ({
    modal : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const FormBase = () => {
    const classes = useStyles()
    const [ formSkeleton, updateFormSkeleton ] = useState([])
    const [ modalState, changeModalState ] = useState(false)


    const modalOpenHandler = () => {
        changeModalState(true)
    }

    const modalCloseHandler = () => {
        changeModalState(false)
    }

    const addFormField = (fieldData) => {
        updateFormSkeleton([...formSkeleton, { ...fieldData, id: formSkeleton.length === 0 ? 0 : formSkeleton[formSkeleton.length - 1].id + 1 }])
        console.log(formSkeleton)
    }

    const removeField = (id) => {
        const newSkeleton = formSkeleton.filter((elem) => elem.id !== id)
        updateFormSkeleton(newSkeleton)
    }

    
    return(
        <div>
            {/* Render the Form Here */}
            <div>
                { formSkeleton.map(field => {
                    switch(field.type){
                        case 'text':
                            return (<div key={field.id}>
                                        <input type="text" placeholder={field.id}/>
                                        <button onClick={() => removeField(field.id)}>Remove this</button>
                                    </div>)
                        default:
                            return <div>Shit {field.id}</div>
                    }
                })}
            </div>

            {/* Configuring the Modal */}
            <Modal
                className={classes.modal}
                open={modalState}
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
                onClose={modalCloseHandler}
                // closeAfterTransition
            >
                <Fade in={modalState}>
                    <FormFieldCreator addFieldHandler={addFormField} modalCloseHandler={modalCloseHandler} />
                </Fade>
            </Modal>

            {/* Button To Update the Form */}
            <div>
                <button type="button" onClick={modalOpenHandler}>Add TextField</button>
            </div>
        </div>
    )
}

export default FormBase;