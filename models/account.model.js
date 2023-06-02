const db = require("./connectDataBase");

const accountSchema = new db.mongoose.Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    role: { type: String, required: true },
    token: { type: String, required: false },
    accountBalance: { type: Number, required: false }, // sô dư tài khoản
    gender: { type: Number, required: false },
    phone: { type: Number, required: false },
    avatar: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

let account = db.mongoose.model("account", accountSchema);
module.exports = {
  account,
};
