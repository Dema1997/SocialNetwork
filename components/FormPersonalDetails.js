import React from 'react';
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Button } from '@material-ui/core'

 export const FormPersonalDetails = (props) => {

    const continu = e =>{
        e.preventDefault()
        props.nextStep();
    }
    const back = e =>{
        e.preventDefault()
        props.prevStep();
    }
    
    const { values, handleChange } = props;

    return(
        <MuiThemeProvider>
            <>
              <AppBar title="Enter Personal details" />
              <TextField required
                hintText="Enter your Address"
                floatingLabelText="Address"
                onChange={handleChange('address')}
                defaultValue={values.address}
              />
              <br/>
              <TextField required
                hintText="Enter your Date-birdth"
                floatingLabelText="Date of birdth"
                onChange={handleChange('date')}
                defaultValue={values.date}
              />
              <br/>
              <Button
                color="primary"
                style={styles.button}
                onClick={continu}
              >CONTINUE</Button>
              <Button
                color="primary"
                style={styles.button}
                onClick={back}
              >BACK</Button>

            </>
        </MuiThemeProvider>
    );
    }

const styles={
    button:{
        margin: 15
    }
}
export default FormPersonalDetails;