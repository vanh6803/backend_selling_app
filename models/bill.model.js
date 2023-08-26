const db = require("./connectDataBase");

const billSchema = new db.mongoose.Schema(
    {
      user: { type: db.mongoose.Schema.ObjectId, ref: "account", required: true },
      products: [
        {
          product: { type: db.mongoose.Schema.ObjectId, ref: "product", required: true },
          quantity: { type: Number, required: true },
        }
      ],
      totalAmount: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );
let bill = db.mongoose.model("bill", billSchema);

module.exports = {
  bill,
};