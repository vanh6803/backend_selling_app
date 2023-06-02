const db = require("./connectDataBase");
const manufacturer = require("./manufacturer.model");

const productSchema = new db.mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
    detail: {
      //todo: screen information
      screenTechnology: { type: String, required: false },
      screenSize: { type: String, required: false },
      screenFeatures: { type: String, required: false },
      screenType: { type: String, required: false },
      //todo: camera information
      rearCamera: { type: String, required: false },
      frontCamera: { type: String, required: false },
      //todo: performance  information
      chipSet: { type: String, required: false },
      cpu: { type: String, required: false },
      gpu: { type: String, required: false },
      ram: { type: Number, required: false },
      rom: { type: Number, required: false },
      //todo: other information
      battery: { type: Number, required: false },
      operatingSystem: { type: String, required: false },
      internet: { type: String, required: false },
      weight: { type: Number, required: false },
      audioTechnology: { type: String, required: false },
      specialFeatures: { type: String, required: false },
    },
    color: { type: String, required: false },
    status: { type: String, required: true },
    quantity: { type: Number, required: true },
    manufacturer: { type: db.mongoose.Schema.ObjectId, ref: "manufacturer" },
  },
  {
    timestamps: true,
  }
);

let product = db.mongoose.model("product", productSchema);
module.exports = {
  product,
};
