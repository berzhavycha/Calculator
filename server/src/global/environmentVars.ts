import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const PORT = process.env.PORT || 5001
export const MONGODB_URL = process.env.MONGODB_URL as string
export const MONGODB_TEST_URL = process.env.MONGODB_TEST_URL as string

export const POSTGRES_USER = process.env.POSTGRES_USER as string
export const POSTGRES_DB = process.env.POSTGRES_DB as string
export const POSTGRES_CALCULATION_COLLECTION = process.env.POSTGRES_CALCULATION_COLLECTION as string
export const POSTGRES_PASSWORD= process.env.POSTGRES_PASSWORD as string
export const POSTGRES_HOST = process.env.POSTGRES_HOST as string
export const POSTGRES_KNEX_MIN_POOL = process.env.POSTGRES_KNEX_MIN_POOL as string
export const POSTGRES_KNEX_MAX_POOL = process.env.POSTGRES_KNEX_MAX_POOL as string

export const LOG_LEVEL = process.env.LOG_LEVEL as string