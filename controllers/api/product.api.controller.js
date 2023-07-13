const productModel = require("../../models/product.model");

exports.listProduct = async (req, res, next) => {
  let search = null;
  if (typeof req.query.manufacturer != "undefined") {
    search = { manufacturer: req.query.manufacturer };
  }
  try {
    var products = await productModel.product.find(search).populate("manufacturer");
    if (products) {
      return res
        .status(200)
        .json({ data: products, message: "get data successfully" });
    } else {
      return res.status(200).json({ message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.detailProduct = async (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  try {
    var product = await productModel.product.findById({_id: id}).populate("manufacturer");
    if (product) {
      return res
        .status(200)
        .json({ data: product, message: "get data successfully" });
    } else {
      return res.status(401).json({ message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};