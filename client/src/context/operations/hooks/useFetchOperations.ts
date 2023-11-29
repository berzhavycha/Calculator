import { useEffect, useState } from "react";
import { queryBuilder } from "@queryBuilder";
import { OperationsType } from "../OperationsProvider";

export const useFetchOperations = (): OperationsType => {
  const [operations, setOperations] = useState<OperationsType>({});

  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const data = await queryBuilder.makeRequest("operations", "GET");
        setOperations(data);
      } catch (error) {
        setOperations({});
      }
    };

    fetchOperations();
  }, []);

  return operations;
};
