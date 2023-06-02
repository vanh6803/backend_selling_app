const accountModel = require('../models/account.model')

exports.list = async (req, res, next) => {
    var account = await accountModel.account.find();
    res.render('accounts/list', account)
}

exports.add = async (req, res, next) => {
    res.render('accounts/add')
}

exports.edit = async (req, res, next) => {
    var account = await accountModel.account.findById();
    res.render('accounts/edit', account)
}

exports.delete = async (req, res, next) => {
    res.send('this is delete page')
}