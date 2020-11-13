import React from 'react';
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/utils.module.css'


const FormLogin = ({props}) => {

    const [campi, setCampi]= useState({
      email:'',
      password:''
    })
    const router = useRouter()

    const continu = (e) =>{
        e.preventDefault()
        props.prevStep();
    }
    const back = (e) =>{
        e.preventDefault()
        props.prevStep();
    }

    const handleChange = (e) =>{
      setCampi({ ...campi, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e)=>{
      //TODO
      e.preventDefault()
      router.push("/userLogged")
    }

    const {  email, password } = campi
    const values = {  email, password }

      return(
        
        <MuiThemeProvider>
              <AppBar title="Enter details" />
              <div className={styles.main}>
              <form onSubmit={handleSubmit}>
              <TextField
                required
                name="email"
                type="email"
                value={campi.email}
                placeholder="Email"
                onChange={handleChange}
                style={_styles.textField}
              />
              <br/>
              <TextField
                required
                name="password"
                type="password"
                value={campi.password}
                placeholder="Password"
                onChange={handleChange}
                style={_styles.textField}
              />
              <br/>
              <RaisedButton
                type="submit"
                style={_styles.button}
                label="Log in"
                primary={true}
              />
              </form>
            </div>
        </MuiThemeProvider>
    );
    
}
const _styles={
    button:{
        margin: 15
    },
    textField:{
      color:'white'
    }
}
export default FormLogin;