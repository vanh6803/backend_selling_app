const db = require("./connectDataBase");
const jwt = require("jsonwebtoken"); // khai báo jsonwebtoken
const chuoi_ky_tu_bi_mat = process.env.TOKEN_SEC_KEY;
const bcrypt = require("bcrypt");

const accountSchema = new db.mongoose.Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    role: { type: Number, required: true },
    token: { type: String, required: false },
    // accountBalance: { type: Number, required: false }, // sô dư tài khoản
    gender: { type: Number, required: false },
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
  const token = jwt.sign({_id: user._id, username: user.username}, chuoi_ky_tu_bi_mat)
  user.token = token
  await user.save()
  return token
}

//find user by id
//use for login
accountSchema.static.findByCredentials = async (username, password) => {
  const user = await account.findOne({username: username})
  if(!user){
    throw new Error({error: "can not user"})
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if(!isPasswordMatch){
    throw new Error({ error: "incorrect password" });
  }
  return user
}

let account = db.mongoose.model("account", accountSchema);
module.exports = {
  account,
};
