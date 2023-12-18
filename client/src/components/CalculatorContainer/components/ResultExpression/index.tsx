import React from "react";

interface IResultExpressionProps {
  result: string;
  errorMessage: string;
}

export const ResultExpression: React.FC<IResultExpressionProps> = React.memo(({ result, errorMessage }) => {
  return (
    <div className="mb-4">
      <div className="result m-2 text-3xl text-right" aria-label="result-expression">{result || 0}</div>
      <div className="error-block text-red-500 h-6 text-right" aria-label="error-expression">{!result && errorMessage}</div>
    </div>
  );
});
