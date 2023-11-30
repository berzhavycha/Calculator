import React, { createContext, useContext } from "react";
import { useFetchOperations } from "./hooks";
import { IProviderProps } from "../currentExpression/CurrentExpressionProvider";

export type IOperation = {
  priority: number;
  // eslint-disable-next-line no-unused-vars
  calculate: (...operands: number[]) => number;
  type: string;
  associativity?: string;
};

export type OperationsType = Record<string, IOperation>;

const OperationsContext = createContext<OperationsType>({});

const useOperations = (): OperationsType => {
  return useContext(OperationsContext);
};

const OperationsProvider: React.FC<IProviderProps> = ({ children }) => {
  const operations = useFetchOperations();

  return <OperationsContext.Provider value={operations}>{children}</OperationsContext.Provider>;
};

export { OperationsProvider, OperationsContext, useOperations };
