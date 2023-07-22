const accountModel = require("../../models/account.model");
const bcrypt = require("bcrypt");

exports.login = async (req, res, next) => {
  try {
    const user = await accountModel.account.findByCredentials(
      req.body.email,
      req.body.password
    );
    if (!user) {
      return res.status(401).json({ message: "Wrong credentials" });
    }
    // đăng nhập thành công, tạo token làm việc mới
    await user.generateAuthToken();
    console.log(user);
    return res.status(200).json({ data: user, message: "login successfully" });
  } catch (error) {
    console.log(error);
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
    return res.status(200).json({ status: 200, msg: 'logout successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, msg: error.message });
  }
}

exports.detailProfile = async (req, res, next) => {
  try {
    // Truy vấn thông tin người dùng từ cơ sở dữ liệu bằng id của người dùng đã được lưu trong req.user.
    const user = await accountModel.account.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Trả về thông tin người dùng cho client.
    return res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};