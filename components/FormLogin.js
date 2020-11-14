import React from 'react';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    textTransform:'none',
    letterSpacing:1.3,
    fontSize:14,
    fontWeight:400,
    marginTop:10,
    backgroundColor: '#2ea44f',
    color:"white"
  },
  textField: {
    marginTop:5,
    marginBottom:11
  },
  inputRoot: {
    height:1,
  },
  label: {
    fontSize:14,
    fontWeight:600,
  },
  titleLogin: {
    textAlign:'center',
    color:'white',
    fontWeight:300,
    letterSpacing:1,
    fontSize:19,
    marginTop:50,
    marginBottom:15
  },
  forgotPassword: {
    color:'#0366d6',
    fontSize:14,
    fontWeight: 500
  },
  newToWhoPlays: {
    cursor: 'pointer',
    fontSize:14
  },
});

export const FormLogin = () => {
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

    const { email, password } = campi
    const values = { email, password }

      return(
           <>
              <AppBar title="Enter details" />
              <div className={styles.main} >
              <h2 className={classes.titleLogin}>Sign in to</h2>
              <a href="/"><img src="/images/logow.png"></img></a>
              <br/>
              <form onSubmit={handleSubmit} style={{ backgroundColor:'#c5cbd3',  padding:25, borderRadius:5}}>
              <label className={classes.label}>Username or email address</label><br/>
              <TextField
                className={classes.textField}
                inputProps={{
                  className: classes.inputRoot
                }}
                required
                variant="outlined"
                name="email"
                type="email"
                value={campi.email}
                onChange={handleChange}
              />
              <br/>
              <label className={classes.label}>Password</label><br/>
              <TextField
                className={classes.textField}
                inputProps={{
                  className: classes.inputRoot
                }}
                required
                variant="outlined"
                name="password"
                type="password"
                value={campi.password}
                onChange={handleChange}
              />
              <br/>
              <a className={classes.forgotPassword}>Forgot password?</a>
              <br/>
              <Button
              fullWidth
                type="submit"
                className={classes.button}
                label="Log in"
              >Sign in</Button>
              </form>

              <p className={classes.newToWhoPlays}>New to WhoPlays? <a href='/Signin'>Create an account</a></p>
            </div>
          </>
    );
    
}
export default FormLogin;