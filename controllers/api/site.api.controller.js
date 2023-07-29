const accountModel = require("../../models/account.model");
const bcrypt = require("bcrypt");

exports.login = async (req, res, next) => {
  try {
    const result = await accountModel.account.findByCredentials(
      req.body.email,
      req.body.password
    );

    if (result.error) {
      console.log("aaa");
      console.log(result.message);
      return res.status(401).json({status: 401, message: result.message });
    }
    console.log("bbb");
    // Đăng nhập thành công.
    // Tạo và trả về mã thông báo (token).
    const user = result; // Đã trả về đối tượng user khi không có lỗi
    await user.generateAuthToken();
    console.log(user);
    return res.status(200).json({status: 200, data: user, message: "login successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

exports.reg = async (req, res, next) => {
  try {
    const user = new accountModel.account(req.body);
    const salt = await bcrypt.genSalt(15);
    user.password = await bcrypt.hash(req.body.password, salt);
    let new_user = await user.save();
    console.log(new_user);
    return res
      .status(201)
      .json({ message: "created account successful !", data: new_user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

exports.logout = async (req, res, next) => {
  try {
    console.log(req.user);
    req.user.token = null;
    await req.user.save()
    return res.status(200).json({ status: 200, message: 'logout successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
}

exports.detailProfile = async (req, res, next) => {
  try {
    const user = await accountModel.account.findById(req.user._id);

    if (!user) {
      return res.status(404).json({status:404, message: "User not found" });
    }
    return res.status(200).json({status:200, data: user, message: "get profile successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500, message: error.message });
  }
};