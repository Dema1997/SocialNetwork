import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

 export const FormUserDetails = (props) => {
    
    const continu = e => {
        e.preventDefault()
        props.nextStep();
    }
    const back = e => {
        e.preventDefault()
        props.prevStep();
    }
    
    const {values, handleChange} = props;

    return(
        
            <>
              <AppBar title="Enter details" />

              <form>
              <TextField
                
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
              <br/>
              <TextField 
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
              <br/>
              <TextField
                onChange={handleChange('email')}
                defaultValue={values.email}
              />
              <br/>
              <TextField
                onChange={handleChange('city')}
                defaultValue={values.city}
              />
              <br/>
              <Button
                color="primary"
                style={styles.button}
                onClick={continu}
              >CONTINUE</Button>
              </form>

            </>
        
    );
    }

const styles={
    button:{
        margin: 15
    },
    textField:{
      color:'white'
    }
}
export default FormUserDetails;