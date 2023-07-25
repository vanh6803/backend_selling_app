const accountModel = require("../../models/account.model");

exports.searchUser = async (req, res, next) => {
    let search = null;
    if (typeof req.query.email !== "undefined") {
      // Giải mã tham số email trước khi sử dụng nó trong tìm kiếm
      const decodedEmail = decodeURIComponent(req.query.email);
      search = { email: decodedEmail };
    }

  try {
    var user = await accountModel.account.findOne(search);
    if (!user || !user.email) {
        console.log("Email does not exist");
      return res
        .status(200)
        .json({ check: true, message: "Email does not exist" });
    } else {
        console.log("Email already exists");
      return res
        .status(200)
        .json({ check: false, message: "Email already exists" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};