const billModel = require("../../models/bill.model");

exports.getBillByUID = async (req, res, next) => {
  try {
    const uId = req.params.uid;
  } catch (error) {}
};

exports.addBill = async (req, res, next) => {
  try {
    const newBill = await billModel.bill.create(req.body);
    return res
      .status(200)
      .json({ status: 200, data: newBill, message: "add bill successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error", error: error });
  }
};
