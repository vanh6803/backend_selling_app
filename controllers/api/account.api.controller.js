const accountModel = require("../../models/account.model")

exports.login = async (req, res, next) => {
    try {

        const user = await accountModel.account.findByCredentials(req.body.username, req.body.password)
        if (!user) {
            return res.status(401).json({message: 'Wrong credentials'})
        }
        // đăng nhập thành công, tạo token làm việc mới
        await user.generateAuthToken()

        return res.status(200).json({ data: user, message: "login successfully" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})    }
};

exports.reg = async (req, res, next)=>{

    try {
        const salt = await bcrypt.genSalt(10);
        console.log(salt, req.body);
        
        const user = new accountModel.account(req.body);

        user.password = await bcrypt.hash(req.body.password, salt);
 
        const token = await user.generateAuthToken();

        let new_u = await user.save()

        return res.status(201).json({ user: new_u, token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error.message})
    }
}