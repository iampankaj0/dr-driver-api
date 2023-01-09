import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema({
  name: { type: String, require: true },
  phone: { type: Number, require: true, length: 10 },
  email: { type: String },
  password: { type: String, require: true },
  createdAt: { type: Date, default: new Date() },
  role: { type: String, default: "driver" },
});

const DriverModel = new mongoose.model("driver", DriverSchema);

export default DriverModel;
