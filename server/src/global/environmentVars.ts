import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const PORT = process.env.PORT || 5001
export const MONGODB_URL = process.env.MONGODB_URL as string