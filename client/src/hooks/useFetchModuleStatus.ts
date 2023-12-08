import { useEffect, useState } from "react";
import { queryBuilder } from "@queryBuilder";

interface IResponse {
  isEnabled: boolean
}

export const useFetchModuleStatus = (module: string): boolean => {
  const [isModuleEnabled, setIsModuleEnabled] = useState(false)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await queryBuilder.makeRequest<IResponse>(`${module}/status`, "GET");
        setIsModuleEnabled(data.isEnabled)
      } catch (error) {
        setIsModuleEnabled(false)
      }
    };

    fetchStatus();
  }, []);

  return isModuleEnabled
};
