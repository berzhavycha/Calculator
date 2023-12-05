import mongoose from "mongoose";

const CalculationSchema = new mongoose.Schema({
  expression: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
    default: 0,
  },
  last_request_at: {
    type: Date,
    default: Date.now,
  },
});

export const Calculation = mongoose.model("Calculation", CalculationSchema);
