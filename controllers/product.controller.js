const productModel = require("../models/product.model");
const manufacturerModel = require("../models/manufacturer.model");
const fs = require("fs");
const { log } = require("console");

exports.list = async (req, res, next) => {
  let search = null;
  if (typeof req.query.manufacturer != "undefined") {
    search = { manufacturer: req.query.manufacturer };
  }
  var product = await productModel.product.find(search).populate('manufacturer');
  res.render("products/list", { product });
};

exports.add = async (req, res, next) => {
  var manufacturer = await manufacturerModel.manufacturer.find();

  if (req.method == "POST") {
    let obj = new productModel.product();
    obj.name = req.body.name;
    obj.price = req.body.price;
    if (req.file) {
      fs.renameSync(
        req.file.path,
        "./public/images/products/" + req.file.originalname
      );
      obj.image =
        "http://localhost:3000/images/products/" + req.file.originalname;
    }
    obj.detail.screenTechnology = req.body.screenTechnology;
    obj.detail.screenSize = req.body.screenSize;
    obj.detail.screenFeatures = req.body.screenFeatures;
    obj.detail.screenType = req.body.screenType;
    obj.detail.rearCamera = req.body.rearCamera;
    obj.detail.frontCamera = req.body.frontCamera;
    obj.detail.chipSet = req.body.chipSet;
    obj.detail.cpu = req.body.cpu;
    obj.detail.gpu = req.body.gpu;
    obj.detail.ram = req.body.ram;
    obj.detail.rom = req.body.rom;
    obj.detail.battery = req.body.battery;
    obj.detail.operatingSystem = req.body.operatingSystem;
    obj.detail.internet = req.body.internet;
    obj.detail.weight = req.body.weight;
    obj.detail.audioTechnology = req.body.audioTechnology;
    obj.detail.specialFeatures = req.body.specialFeatures;
    obj.color = req.body.color;
    obj.quantity = req.body.quantity;
    obj.status = req.body.status;
    obj.manufacturer = req.body.manufacturer;
    try {
      let newData = await obj.save();
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  }

  res.render("products/add", { manufacturer });
};

exports.edit = async (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  var product = await productModel.product.findById({_id: id});
  var manufacturer = await manufacturerModel.manufacturer.find();

  if (req.method == "POST") {
    let obj = new productModel.product();
    obj.name = req.body.name;
    obj.price = req.body.price;
    if (req.file) {
      fs.renameSync(
        req.file.path,
        "./public/images/products/" + req.file.originalname
      );
      obj.image =
        "http://localhost:3000/images/products/" + req.file.originalname;
    }
    obj.detail.screenTechnology = req.body.screenTechnology;
    obj.detail.screenSize = req.body.screenSize;
    obj.detail.screenFeatures = req.body.screenFeatures;
    obj.detail.screenType = req.body.screenType;
    obj.detail.rearCamera = req.body.rearCamera;
    obj.detail.frontCamera = req.body.frontCamera;
    obj.detail.chipSet = req.body.chipSet;
    obj.detail.cpu = req.body.cpu;
    obj.detail.gpu = req.body.gpu;
    obj.detail.ram = req.body.ram;
    obj.detail.rom = req.body.rom;
    obj.detail.battery = req.body.battery;
    obj.detail.operatingSystem = req.body.operatingSystem;
    obj.detail.internet = req.body.internet;
    obj.detail.weight = req.body.weight;
    obj.detail.audioTechnology = req.body.audioTechnology;
    obj.detail.specialFeatures = req.body.specialFeatures;
    obj.color = req.body.color;
    obj.quantity = req.body.quantity;
    obj.status = req.body.status;
    obj.manufacturer = req.body.manufacturer;
    obj.description = req.body.description;
    obj._id = id
    try {
      await productModel.product.findByIdAndUpdate({_id: id}, obj);
      res.redirect("/product/");
    } catch (error) {
      console.log(error);
    }
  }
  res.render("products/edit", { product,manufacturer });
};

exports.delete = async (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  try {
    await productModel.product.findByIdAndDelete({_id: id});
    res.redirect("/product/");
  } catch (error) {
    res.send(error);
  }
};

exports.detail = async (req, res, next) => {
  let id = req.params.id;
  var product = await productModel.product.findById({_id: id});
  res.render("products/detail", { product });
};
