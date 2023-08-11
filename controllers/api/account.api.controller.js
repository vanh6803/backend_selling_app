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
        .json({ check: false, message: "Email does not exist" });
    } else {
      console.log("Email already exists");
      return res
        .status(200)
        .json({ check: true, message: "Email already exists" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
};

exports.updateData = async (req, res, next) => {
  const id = req.params.id;
  const updateData = req.body;
  console.log(id);
  console.log(updateData);
  try {
    // Check if the user exists
    const existingUser = await accountModel.account.findById(id);

    if (!existingUser) {
      console.log("User not found");
      return res.status(404).json({ status: 404, message: "User not found" });
    }
    console.log("existingUser");
    // Update the user data
    const updatedUser = await accountModel.account.findByIdAndUpdate(
      id,
      updateData
    );

    return res.status(200).json({
      status: 200,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error", error: error });
  }
};

exports.UploadAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ status: 400, message: "No file uploaded" });
    }
    const imageUrl = req.file.filename;
    return res
      .status(200)
      .json({ status: 200, message: "Image uploaded", imageUrl });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
};

exports.editAvatar = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ status: 400, message: "No file uploaded" });
  }

  const imageUrl = req.file.filename;

  try {
    const updatedUser = await Account.findByIdAndUpdate(
      req.params.id,
      { avatar: imageUrl },
      { new: true } // Return the updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }

    return res
      .status(200)
      .json({ status: 200, message: "Image updated", data: imageUrl });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error", error: error });
  }
};
