import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const User = ({user}) => {
    const [confirm, setConfirm] = useState(false)
    const [isDeleting,setIsDeleting]= useState(false)
    
    return(
        <>
            {
            isDeleting ? <></>
            :
            <>   
                <h1>{user.email}</h1>
                <h2>{user.firstName}</h2>
                <h2>{user.lastName}</h2>
                <Button >Delete</Button>
            </>
            }
        </>
    )
}
export default User;

User.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const {data} = await res.text()
    console.log(res)
    return {user: data}
}