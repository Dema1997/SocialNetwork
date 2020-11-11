import React from 'react';
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

 class FormLogin extends Component {

state={
    email: '',
    password: ''
}

    continue = e =>{
        e.preventDefault()
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault()
        this.props.prevStep();
    }
    handleChange = input => e =>{
      this.setState({ [input]: e.target.value });
      console.log(this.state)
  }
    render(){
      const {  email, password,handleChange } = this.state
      const values = {  email, password  }
    return(
        <MuiThemeProvider>
            <div>
              <AppBar title="Enter details" />
              <TextField 
                hintText="Enter your email"
                floatingLabelText="Email"
                onChange={this.props.handleChange('email')}
                defaultValue={values.email}
              />
              <br/>
              <TextField 
                hintText="Enter your password"
                floatingLabelText="Password"
                onChange={this.props.handleChange('password')}
                defaultValue={values.password}
              />
              <br/>
              <RaisedButton
                style={styles.button}
                label="Continue"
                primary={true}
                onClick={this.continue}
              />
            </div>
        </MuiThemeProvider>
    );
    }
}
const styles={
    button:{
        margin: 15
    }
}
export default FormLogin;