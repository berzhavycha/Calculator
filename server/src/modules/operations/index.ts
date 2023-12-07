import { Module } from "../calculation";
import { getOperationsController } from "./controllers/getOperationsController";

export const operationsModule: Module = {
  endpoints: {
    get: [{ route: "/operations", controller: getOperationsController }],
    post: []
  }
}
