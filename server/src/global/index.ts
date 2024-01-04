import { DataBases } from "@database";
import { CalculationMethods } from "@modules/calculationHistory/calculatorMethods";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const PORT = process.env.PORT || 5001
export const MONGODB_URL = process.env.MONGODB_URL as string
export const MONGODB_TEST_URL = process.env.MONGODB_TEST_URL as string

export const MODE = process.env.MODE as string

export const POSTGRES_USER = process.env.POSTGRES_USER as string
export const POSTGRES_TEST_USER = process.env.POSTGRES_TEST_USER as string
export const POSTGRES_DB = process.env.POSTGRES_DB as string
export const POSTGRES_TEST_DB = process.env.POSTGRES_TEST_DB as string
export const POSTGRES_TEST_HOST = process.env.POSTGRES_TEST_HOST as string
export const POSTGRES_CALCULATION_HISTORY_COLLECTION = process.env.POSTGRES_CALCULATION_HISTORY_COLLECTION as string
export const POSTGRES_PASSWORD= process.env.POSTGRES_PASSWORD as string
export const POSTGRES_TEST_PASSWORD= process.env.POSTGRES_TEST_PASSWORD as string
export const POSTGRES_HOST = process.env.POSTGRES_HOST as string
export const POSTGRES_KNEX_MIN_POOL = process.env.POSTGRES_KNEX_MIN_POOL as string
export const POSTGRES_KNEX_MAX_POOL = process.env.POSTGRES_KNEX_MAX_POOL as string

export const LOG_LEVEL = process.env.LOG_LEVEL as string

export const DATABASE = process.env.DATABASE as DataBases
export const CALCULATION_METHOD = process.env.CALCULATION_METHOD as CalculationMethods
export const HISTORY_ENABLED = process.env.HISTORY_ENABLED === 'true'
