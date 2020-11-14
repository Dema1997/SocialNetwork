import {NextApiRequest,NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

const KEY = 'abc'

export default function (req,res){
    if(!req.body){
        res.statusCode=404
        res.end("Error")
        return
    }
    const { email, password } = req.body

    res.json({
        token: jwt.sign(
            {
                email,
                admin: email === 'admin@a.it' && password === 'admin'
            },
            KEY
        )
    })
}