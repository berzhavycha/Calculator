import { Module } from "@modules/interfaces";
import { getOperationsController } from "./controllers/getOperationsController";

export const operationsModule: Module = {
  endpoints: {
    get: [{ route: "/operations", controller: getOperationsController }],
    post: []
  }
}
