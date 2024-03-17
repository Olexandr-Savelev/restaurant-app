import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;
