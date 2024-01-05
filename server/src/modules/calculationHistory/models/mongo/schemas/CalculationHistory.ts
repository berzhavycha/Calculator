import mongoose from "mongoose";

const CalculationHistorySchema = new mongoose.Schema({
  expression: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
    default: 0,
  },
  lastRequestAt: {
    type: Date,
    default: Date.now,
  },
});

export const CalculationHistory = mongoose.model("CalculationHistory", CalculationHistorySchema);
