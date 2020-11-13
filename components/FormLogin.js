import React from 'react';
import Button from '@material-ui/core/Button'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import {useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'white',
    borderRadius: 5,
    border:'2px solid orange',
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
}));

const FormLogin = ({props}) => {
    const classes = useStyles();

    const [campi, setCampi]= useState({
      email:'',
      password:''
    })
    const router = useRouter()

    const handleChange = (e) =>{
      setCampi({ ...campi, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      //validateUser()
      router.push("/userLogged")
    }
    const validateUser = () => {
      //
    }

    const {  email, password } = campi
    const values = {  email, password }

      return(
        
        <MuiThemeProvider>
              <AppBar title="Enter details" />
              <div className={styles.main} >
              <form onSubmit={handleSubmit} style={{ backgroundColor:'white', padding:40,borderRadius:15}}>
              <TextField
                inputProps={{
                  className: classes.inputRoot
                }}
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
              <br/><br/>
              <Button
                type="submit"
                style={_styles.button}
                label="Log in"
              >Log in</Button>
              </form>
            </div>
        </MuiThemeProvider>
    );
    
}
const _styles={
    button:{
        fontSize:'13px',
        backgroundColor: '#47cf73'
    },
}
export default FormLogin;