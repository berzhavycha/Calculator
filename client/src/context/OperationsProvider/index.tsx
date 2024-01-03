import { FC, createContext, useContext, PropsWithChildren } from "react";
import { useFetchOperations } from "./hooks";

export type IOperation = {
  priority: number;
  calculate: (...operands: number[]) => number;
  type: string;
  associativity?: string;
};

export type OperationsType = Record<string, IOperation>;

const OperationsContext = createContext<OperationsType>({});

const useOperations = (): OperationsType => {
  return useContext(OperationsContext);
};

const OperationsProvider: FC<PropsWithChildren> = ({ children }) => {
  const operations = useFetchOperations();

  return <OperationsContext.Provider value={operations}>{children}</OperationsContext.Provider>;
};

export { OperationsProvider, OperationsContext, useOperations };
