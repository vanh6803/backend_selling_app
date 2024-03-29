const db = require("./connectDataBase");
const jwt = require("jsonwebtoken"); // khai báo jsonwebtoken
const chuoi_ky_tu_bi_mat = process.env.TOKEN_SEC_KEY;
const bcrypt = require("bcrypt");

const accountSchema = new db.mongoose.Schema(
  {
    fullName: { type: String, required: false },
    username: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    role: { type: Number, required: true }, //1: user, 0: admin
    token: { type: String, required: false },
    // accountBalance: { type: Number, required: false }, // sô dư tài khoản
    gender: { type: Number, required: false },//0: male, 1: female
    phone: { type: String, required: false },
    avatar: { type: String, required: false },
    birthday: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

// create token login
accountSchema.methods.generateAuthToken = async function(){
  const user = this
  console.log(user);
  const token = jwt.sign({_id: user._id, email: user.email}, chuoi_ky_tu_bi_mat)
  user.token = token
  await user.save()
  return token
}

//find user by id
//use for login
accountSchema.statics.findByCredentials = async (email, password) => {
  const user = await account.findOne({ email: email });

  if (!user) {
    return { error: true, message: "Email not found" };
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return { error: true, message: "Incorrect password" };
  }

  return user;
};

let account = db.mongoose.model("account", accountSchema);
module.exports = {
  account
};
