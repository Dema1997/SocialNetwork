import React from 'react';
import AppBar from '@material-ui/core/AppBar';

 export const FormSuccess = (props) => {

    const continu = e =>{
        e.preventDefault()
        props.nextStep();
    }
    const back = e =>{
        e.preventDefault()
        props.prevStep();
    }
    
    const {values, handleChange} = props;

    return(
            <>
              <AppBar title="Success" />
              <h1>Thank fo you submission</h1>
              <p>You will get an email with further instructions</p>
            </>
    );
}

const styles={
    button:{
        margin: 15
    }
}
export default FormSuccess;