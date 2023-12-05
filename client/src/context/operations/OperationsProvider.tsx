import React, { createContext, useContext } from "react";
import { useFetchOperations } from "./hooks";

export type IOperation = {
  priority: number;
  calculate: (...operands: number[]) => number;
  type: string;
  associativity?: string;
};

export type OperationsType = Record<string, IOperation>;

interface IProviderProps {
  children: React.ReactNode;
}

const OperationsContext = createContext<OperationsType>({});

const useOperations = (): OperationsType => {
  return useContext(OperationsContext);
};

const OperationsProvider: React.FC<IProviderProps> = ({ children }) => {
  const operations = useFetchOperations();

  return <OperationsContext.Provider value={operations}>{children}</OperationsContext.Provider>;
};

export { OperationsProvider, OperationsContext, useOperations };
