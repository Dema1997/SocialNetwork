import styles from '../styles/utils.module.css'
import Head from 'next/head'
import Layout from '../components/Layout'
export const Users = ({users}) =>{

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

        <div className={styles.grid}>
        {   
            users.map(user =>{
              return(
               <a href="#" className={styles.card}>
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