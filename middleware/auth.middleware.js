const account = require('../models/account.model')
const jwt = require('jsonwebtoken')
const private_key = process.env.TOKEN_SEC_KEY

const api_auth = async (req, res, next) => {
    let header_token = req.header('Authorization');

    if(typeof(header_token) =='undefined'){
        return res.status(403).json({msg: 'unknown token'});
    }

    const token = header_token.replace('Bearer ', '')

    try {
        const data = jwt.verify(token, private_key)
        console.log(data);
        const user  = await account.account.findOne({_id: data._id, token: token})
        if(!user){
            throw new Error("unknown user")
        }
        req.user = user;
        req.token = token;
        next()
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: error.message })
    }
}

module.exports = {
    api_auth
};
