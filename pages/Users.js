import styles from '../styles/utils.module.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import {Button, DialogContent, DialogTitle, TextField} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import {useState} from 'react'

export const Users = ({users}) =>{

  const [creating,setCreating] = useState(false)

  const handleClick=()=>{
    setCreating(!creating)
    console.log(creating)
  }

    return(
   <Layout>
      <div className={styles.container}>

      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
         {users.length} users
        </h1>
        <br/>

        <Button onClick={handleClick} variant ="outlined">Create User</Button>
        
      { creating ?
        <Dialog fullWidth open='true'>
          <DialogTitle style={{textAlign:'center',marginTop:10}}>
            <h2><b>Adding new user...</b></h2>
          </DialogTitle>
        <form style={{padding:50,paddingTop:30}}>
          <TextField fullWidth type="text" placeholder="firstName"/><br/><br/>
          <TextField fullWidth type="text" placeholder="firstName"/><br/><br/>
          <TextField fullWidth type="text" placeholder="firstName"/><br/><br/>
          <TextField fullWidth type="text" placeholder="firstName"/><br/><br/>
          <TextField fullWidth type="text" placeholder="firstName"/><br/><br/><br/>
          <div>
          <Button  variant ="outlined"  style={{float:'right',borderColor:'#47cf73'}}>Confirm</Button>
          <Button color="secondary" onClick={handleClick} variant ="outlined" style={{float:'right',marginRight:8}}>Close</Button>
          </div>
        </form>
        </Dialog>
        : <></> 
      }

        <div className={styles.grid}>
        {   
            users.map((user,i) =>{
              console.log(i + user.email)
              return(
               <a id={i + user.email} href="#" className={styles.card}>
                  <h3>{user.firstName} {user.lastName} &rarr;</h3>
                  <p>{user.email}</p>
                  <p>{user.address}</p>
                  <p>{user.date}</p>
                  <p>{user.city}</p>
                </a>
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