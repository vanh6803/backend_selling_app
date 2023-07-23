const accountModel = require("../../models/account.model");

exports.list = async (req, res, next) => {
    try {
        var listUser = await accountModel.account.find();
        
    } catch (error) {
        
    }
}