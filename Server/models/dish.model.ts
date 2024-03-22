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
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;
