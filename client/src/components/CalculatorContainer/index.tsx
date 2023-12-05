import React, { useCallback, useRef, useState } from "react";
import { InputExpression } from "@components";
import { useGetExpressionResult } from "./hooks";
import { CalculatorButtons, ResultExpression, CalculationHistory } from './components'

export const CalculatorContainer: React.FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const calculatorContainerRef = useRef<HTMLDivElement>(null);
  const getExpressionResult = useGetExpressionResult({ expression, setResult, setErrorMessage });

  const adjustCalculatorWidth = useCallback((increaseWidthBy: number): void => {
    const container = calculatorContainerRef.current;
    if (container) {
      const { width } = container.getBoundingClientRect();
      container.style.minWidth = `${width + increaseWidthBy}px`;
    }
  }, []);

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div ref={calculatorContainerRef} className="bg-white pt-8 pr-8 pl-8 pb-4 rounded shadow-md">
        <CalculationHistory
          expression={expression}
          result={result}
          contentKey={"expression"}
          setExpression={setExpression}
          setResult={setResult}
        />
        <InputExpression expression={expression} onExpressionChange={setExpression} onEnter={getExpressionResult} />
        <ResultExpression result={result} errorMessage={errorMessage} />
        <CalculatorButtons
          expression={expression}
          onButtonClick={setExpression}
          resizeCalculatorContainer={adjustCalculatorWidth}
          onEvaluate={getExpressionResult}
        />
      </div>
    </div>
  );
};
