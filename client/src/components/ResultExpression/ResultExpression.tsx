import React from "react";
import { useCurrentExpression } from "@context";

export const ResultExpression: React.FC = () => {
  const { result, errorMessage } = useCurrentExpression();

  return (
    <div className="mb-4">
      <div className="result m-2 text-3xl text-right">{result || 0}</div>
      <div className="error-block text-red-500 h-6 text-right">
        {!result && errorMessage}
      </div>
    </div>
  );
};
