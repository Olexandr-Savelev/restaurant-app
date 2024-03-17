import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
