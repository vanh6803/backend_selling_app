const db = require("./connectDataBase");
const manufacturerSchema = new db.mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: false}
});
let manufacturer = db.mongoose.model("manufacturer", manufacturerSchema);

module.exports = {
  manufacturer,
};
