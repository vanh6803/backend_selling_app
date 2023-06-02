const manufacturerModel = require("../../models/manufacturer.model");

exports.listManufacturer = async (req, res, next) => {
  try {
    var manufacturers = await manufacturerModel.manufacturer.find();
    if (manufacturers) {
      return res
        .status(200)
        .json({ data: manufacturers, message: "get data successfully" });
    } else {
      return res.status(200).json({ message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
