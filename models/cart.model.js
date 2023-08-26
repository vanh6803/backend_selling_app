const db = require("./connectDataBase");
const account = require("./account");
const manufacturer = require("./manufacturer");
const product = require("./product.model");

const cartSchema = new db.mongoose.Schema(
  {
    user: { type: db.mongoose.Schema.ObjectId, ref: "account", required: true },
    products: [
      {
        product: { type: db.mongoose.Schema.ObjectId, ref: "product", required: true },
        quantity: { type: Number, required: true },
      }
    ],
  },
  {
    timestamps: true,
  }
);

let cart = db.mongoose.model("cart", cartSchema);
module.exports = {
  cart,
};