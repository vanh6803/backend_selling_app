const productModel = require("../../models/product.model");

exports.listProduct = async (req, res, next) => {
  try {
    var products = await productModel.product.find().populate("manufacturer");
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