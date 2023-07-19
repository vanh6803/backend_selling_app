const account = require('../models/account.model')
const jwt = require('jsonwebtoken')
const private_key = process.env.TOKEN_SEC_KEY

const api_auth = async (req, res, next) => {
    let header_token = req.header("Authorization")
}