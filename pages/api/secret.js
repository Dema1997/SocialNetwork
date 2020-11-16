const jwt = require('jsonwebtoken');

//initializing Key with a random value
const KEY = 'abc'

export default function(req,res){
    const { token } = req.body
    const { admin } = jwt.verify(token,KEY) 

    if (admin){
        res.json({secretAdminCode: 1997})
    }else {
        res.json({admine: false})
    }
}