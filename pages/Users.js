import styles from '../styles/utils.module.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import {Button, DialogTitle, TextField} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import { useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Users = ({users}) =>{

  const [creating,setCreating] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [campi, setCampi]= useState({
    email:'',
    firstName:'',
    lastName:'',
    city:'',
    address:'',
    date:'',
  })
  const router = useRouter()

  const handleChange = (e) => {
    setCampi({ ...campi, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit)
  }

  const handleClick=()=>{
    setCreating(!creating)
  }

  const createNote = async () => {
    try{
       const res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(campi)
      })
      router.push("/")
    }catch(error){
      console.log("Error:", error)
    }
  }

  useEffect (() => {
    if(submit){
      createNote()
    }else{
      setSubmit(false)
    }
  })

  return(
   <Layout>
      <div className={styles.container}>

      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h2 className={styles.title}>
         {users.length} users
        </h2>
        <br/>

        <Button onClick={handleClick} variant ="outlined"> { creating ? 'Creating..' : 'Create User' } </Button>
        
      { creating ?
      <>
        <Dialog fullWidth open='true'>
          <DialogTitle style={{textAlign:'center',marginTop:7}}>
            <h2><b>Adding new user...</b></h2>
          </DialogTitle>
        <form onSubmit={handleSubmit} style={{padding:50,paddingTop:20}}>
          <TextField fullWidth required value={campi.email} onChange={handleChange} name="email" type="email" placeholder="Email"/><br/><br/>
          <TextField fullWidth required value={campi.firstName} onChange={handleChange} name="firstName" type="text" placeholder="First Name"/><br/><br/>
          <TextField fullWidth required value={campi.lastName} onChange={handleChange} name="lastName" type="text" placeholder="Last Name"/><br/><br/>
          <TextField fullWidth required value={campi.city} onChange={handleChange} name="city" type="text" placeholder="City"/><br/><br/>
          <TextField fullWidth required value={campi.address} onChange={handleChange} name="address" type="text" placeholder="Address"/><br/><br/>
          <TextField fullWidth required value={campi.date} onChange={handleChange} name="date" type="text" placeholder="Date"/><br/><br/><br/>
          <div>
          <Button  variant ="outlined"  type="submit" style={{float:'right',borderColor:'#47cf73'}}>Confirm</Button>
          <Button color="secondary" onClick={handleClick} variant ="outlined" style={{float:'right',marginRight:8}}>Close</Button>
          </div>
        </form>
        </Dialog>
        </>
        : <></> 
      }

        <div className={styles.grid}>
        {   
            users.map((user,i) =>{
              return(
                < >
               <Link id={user._id} href={`/${user._id}`}><a   className={styles.card}>
                  <h3>{user.firstName} {user.lastName} &rarr;</h3>
                  <p>{user.email}</p>
                  <p>{user.address}</p>
                  <p>{user.date}</p>
                  <p>{user.city}</p>
                </a>
                </Link>
                </>
              )
            })
        }
        </div>
      </main>
    </div>
    </Layout>   
    )
}
export default Users;

Users.getInitialProps= async () => {
  const res= await fetch('http://localhost:3000/api/users')
  const {data}= await res.json()

  return {users: data}
}