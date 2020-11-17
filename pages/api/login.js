import {NextApiRequest,NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

//initializing Key with a random value
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
                email, password,
                admin: email === 'fil97@hotmail.it' && password === 'admin'
            },
            KEY
        )
    })
}