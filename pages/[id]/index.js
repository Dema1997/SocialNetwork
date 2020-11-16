import { useState, useEffect } from 'react'
import styles from '../../styles/utils.module.css'
import Button from '@material-ui/core/Button'
import {useRouter} from 'next/router'
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/Link'


const User = ({ user }) => {

    const router = useRouter()

    const [isDeleting,setIsDeleting]= useState(false)

    const handleClick = () => {
        setIsDeleting(!isDeleting)
    }

    useEffect(()=>{
        if(isDeleting){
            deleteUser()
        }
    }, [isDeleting])

    //UserTruthy.js
    const UserTruthy = () => (
      <>
      <div className={styles.userInfoId}>
              <b><label>Id</label></b>{user._id}
              </div>
              <br/>
              <div className={styles.userInfo}>
                <b><label>Email</label></b><label>{user.email}</label><br/>
                <b><label>Full Name</label></b><label>{user.firstName}&nbsp;{user.lastName}</label><br/>
                <b><label>Birth Date</label></b> <label>{user.date}</label><br/>
                <b><label>City</label></b><label>{user.city}</label><br/>
                <b><label>Address</label></b><label>{user.address}</label><br/>
                <Button style={{fontSize:13}} startIcon={<DeleteIcon />} variant="contained" color="secondary" onClick={handleClick} >Delete</Button>
              </div>
            
            <div className={styles.backToHome} style={{marginTop:15}}>
                <Link href="/">
                    <a style={{marginLeft:25}}>← Back to home</a>
                </Link>
           </div>
        </>
    )

    const deleteUser = async () => {
        const id = router.query.id
        try{
           const deleted = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: 'DELETE',
          })
          router.push("/Users")
        }catch(error){
          console.log("Error:", error)
        }
      }

    return isDeleting ? <></> : user ? <UserTruthy /> : <>User is falsy</>

}
export default User;

User.getInitialProps = async (ctx) => {
    const { id } = ctx.query
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const {data} = await res.json()
    /*
    * Viene chiamata quando parte l'applicazione.
    * E' un comportamento non desiderato
    * Deve essere chiamata solo qusndo richiedo i dati di un utente.
    */
    return {user: data}
}