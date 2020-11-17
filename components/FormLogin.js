import React from 'react';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/Link'
const jwt = require('jsonwebtoken');

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

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [secret, setSecret]=useState('')
    const router = useRouter()
    
    const handleEmail = (e) =>{
      setEmail(  e.target.value )
    }

    const handlePassword = (e) =>{
      setPassword( e.target.value )
    }

    async function handleLogin () {
      const res= await fetch('/api/login',{
        method: 'POST',
        body: JSON.stringify({ email, password })
      }).then((t)=> t.json())

      const token = res.token
      console.log('Token generated: ' + token)
      
      if(token){
        const json = jwt.decode(token)

        const res = await fetch('api/secret',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({token})
        }).then((t)=> t.json())
        
        console.log(res)

        router.push('/Home')
      }
        else{
          console.log('Error')
        }
    }

      return(
           <>
              <AppBar title="Enter details" />
              <div className={styles.main} >
              <h2 className={classes.titleLogin}>Sign in to</h2>
              <Link href="/"><a><img src="/images/logow.png"></img></a></Link>
              <br/>

              <form style={{ backgroundColor:'#c5cbd3',  padding:25, borderRadius:5}}>
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
                value={email}
                onChange={handleEmail}
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
                value={password}
                onChange={handlePassword}
              />
              <br/>
              <a className={classes.forgotPassword}>Forgot password?</a>
              <br/>
              <Button
              fullWidth
                onClick={handleLogin}
                className={classes.button}
                label="Log in"
              >Sign in</Button>
              </form>

              <p className={classes.newToWhoPlays}>New to WhoPlays? <Link href='/Signin'><a>Create an account</a></Link></p>
            </div>
          </>
    );
    
}
export default FormLogin;