const manufacturerModel = require("../models/manufacturer.model");
const fs = require("fs");

exports.list = async (req, res, next) => {
  var manufacturer = await manufacturerModel.manufacturer.find();
  res.render("manufacturers/list", { manufacturer });
};

exports.add = async (req, res, next) => {
  if (req.method == "POST") {
    let data = new manufacturerModel.manufacturer();
    data.name = req.body.name;
    if (req.file) {
      fs.renameSync(req.file.path, "./public/images/" + req.file.originalname);
      data.logo = "http://localhost:3000/images/" + req.file.originalname;
    }
    try {
      let newData = await data.save();
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  }
  res.render("manufacturers/add");
};

exports.edit = async (req, res, next) => {
  let id = req.params.id;
  var manufacturer = await manufacturerModel.manufacturer.findById({ _id: id });
  if (req.method == "POST") {
    let data = new manufacturerModel.manufacturer();
    data.name = req.body.name;
    if (req.file) {
      fs.renameSync(req.file.path, "./public/images/" + req.file.originalname);
      data.logo = "http://localhost:3000/images/" + req.file.originalname;
    }
    data._id = id;
    try {
      await manufacturerModel.manufacturer.findByIdAndUpdate({ _id: id }, data);
      res.redirect("/manufacturer/");
    } catch (error) {
      console.log(error);
    }
  }
  res.render("manufacturers/edit", {manufacturer});
};

exports.delete = async (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  try {
    await manufacturerModel.manufacturer.findByIdAndDelete({ _id: id });
    res.redirect("/manufacturer/");
  } catch (error) {
    res.send(error);
  }
};
