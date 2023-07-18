// const accountModel = require("../models/account.model");
// const fs = require("fs");
// const bcrypt = require("bcrypt");

// exports.list = async (req, res, next) => {
//   var account = await accountModel.account.find();
//   res.render("accounts/list", { account });
// };

// exports.add = async (req, res, next) => {
//   if (req.method == "POST") {
//     let data = new accountModel.account();
//     data.fullName = req.body.fullName;
//     data.username = req.body.username;
//     let salt = await bcrypt.genSalt(10);
//     data.password = await bcrypt.hash(req.body.password, salt);
//     data.email = req.body.email;
//     data.address = req.body.address;
//     data.role = req.body.role;
//     data.gender = req.body.gender;
//     data.phone = req.body.phone;
//     if (req.file) {
//       fs.renameSync(
//         req.file.path,
//         "./public/images/user" + req.file.originalname
//       );
//       data.avatar = "http://localhost:3000/images/user" + req.file.originalname;
//     }
//     var birthday = req.body.birthday;
//     var dateParts = birthday.split("-");
//     var formattedBirthday =
//       dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
//     data.birthday = formattedBirthday;
//     try {
//       var newData = await data.save();
//       console.log(newData);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
//   res.render("accounts/add");
// };

// exports.edit = async (req, res, next) => {
//   var id = req.params.id;
//   var account = await accountModel.account.findById({ _id: id });
//   if (req.method == "POST") {
//     let data = new accountModel.account();
//     data.fullName = req.body.fullName;
//     data.username = req.body.username;
//     let salt = await bcrypt.genSalt(10);
//     data.password = await bcrypt.hash(req.body.password, salt);
//     data.email = req.body.email;
//     data.address = req.body.address;
//     data.role = req.body.role;
//     data.gender = req.body.gender;
//     data.phone = req.body.phone;
//     if (req.file) {
//       fs.renameSync(
//         req.file.path,
//         "./public/images/user" + req.file.originalname
//       );
//       data.avatar = "http://localhost:3000/images/user" + req.file.originalname;
//     }
//     var birthday = req.body.birthday;
//     var dateParts = birthday.split("-");
//     var formattedBirthday =
//       dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
//     data.birthday = formattedBirthday;
//     data._id = id;
//     try {
//       await accountModel.account.findByIdAndUpdate({ _id: id }, data);
//       console.log("update successful");
//       res.redirect("/account/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
//   res.render("accounts/edit", {account});
// };

// exports.delete = async (req, res, next) => {
//   var id = req.params.id;
//   try {
//     await accountModel.account.findByIdAndDelete({ _id: id })
//     res.redirect("/account/");
//   } catch (error) {
//     res.send(error);
//   }
// };
