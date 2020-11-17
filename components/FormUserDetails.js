import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import {useState,React} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
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
    float:'left',
    marginTop:0,
    marginBottom:11
  },
  inputRoot: {
    height:1,
  },
  label: {
    float:'left',
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
  form: {
    width:500,
    backgroundColor:'#c5cbd3',
    padding:25,
    borderRadius:5
  }
});

export const FormLogin = () => {
    const classes = useStyles();

    const [ campi, setCampi ] = useState({
      email:'',
      password:'',
      username: '',
      nome:'',
      cognome:'',
      negozio:'',
      data:''
    })
    

    const [secret, setSecret]=useState('')
    const router = useRouter()
    
    const handleChange = (e) =>{
      setCampi({ ...campi,[e.target.name] :  e.target.value } )
    }

    const email = campi.email
    const password = campi.password

    async function handleLogin () {
      const res= await fetch('/api/login',{
        method: 'POST',
        body: JSON.stringify({ email, password })
      }).then((t)=> t.json())

      const token = res.token
      console.log('Token generated: ' + token)
      
      if(token){
        const json=jwt.decode(token)
        console.log('Token decodified: ' + json)

        const res= await fetch('api/secret',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({token})
        }).then((t)=> t.json())
        
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

              <form className={classes.form}>
              
              
              <label className={classes.label}>Nome</label><br/>
              <TextField
              fullWidth
                className={classes.textField}
                inputProps={{
                  className: classes.inputRoot
                }}
                required
                variant="outlined"
                name="nome"
                type="text"
                value={campi.nome}
                onChange={handleChange}
              />
              
              <label className={classes.label}>Cognome</label><br/>
              <TextField
              fullWidth
                className={classes.textField}
                inputProps={{
                  className: classes.inputRoot
                }}
                required
                variant="outlined"
                name="cognome"
                type="text"
                value={campi.cognome}
                onChange={handleChange}
              />
              <br/><br/>
              <label className={classes.label}>Nome del negozio</label><br/>
              <TextField
              fullWidth
                className={classes.textField}
                inputProps={{
                  className: classes.inputRoot
                }}
                required
                variant="outlined"
                name="negozio"
                type="text"
                value={campi.negozio}
                onChange={handleChange}
              />
              <br /><br/>
              <label className={classes.label}>Email</label><br/>
              <TextField
              fullWidth
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
              <br/><br/>
              <label className={classes.label}>Password</label><br/>
              <TextField
                fullWidth
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
              <Button
              fullWidth
                onClick={handleLogin}
                className={classes.button}
                label="Log in"
              >Continue</Button>
              </form>

            </div>
          </>
    );
    
}
export default FormLogin;