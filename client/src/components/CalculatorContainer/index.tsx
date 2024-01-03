import { useCallback, useRef, useState, FC } from "react";
import { InputExpression } from "@components";
import { useGetExpressionResult } from "./hooks";
import { CalculatorButtons, ResultExpression, CalculationHistory } from './components'
import { useFetchModuleStatus } from "@hooks";

export const CalculatorContainer: FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const calculatorContainerRef = useRef<HTMLDivElement>(null);
  const getExpressionResult = useGetExpressionResult({ expression, setResult, setErrorMessage });

  const isHistoryModuleEnabled = useFetchModuleStatus('calculations')

  const adjustCalculatorWidth = useCallback((increaseWidthBy: number): void => {
    const container = calculatorContainerRef.current;
    if (container) {
      const { width } = container.getBoundingClientRect();
      container.style.minWidth = `${width + increaseWidthBy}px`;
    }
  }, []);

  const clearAll = () => {
    setResult('')
    setErrorMessage('')
    setExpression('')
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div ref={calculatorContainerRef} className="bg-white pt-8 pr-8 pl-8 pb-4 rounded shadow-md">
        {isHistoryModuleEnabled && <CalculationHistory
          expression={expression}
          result={result}
          contentKey={"expression"}
          setExpression={setExpression}
          setResult={setResult}
        />}
        <InputExpression expression={expression} inputName="input-expression" onExpressionChange={setExpression} onEnter={getExpressionResult} />
        <ResultExpression result={result} errorMessage={errorMessage} />
        <CalculatorButtons
          expression={expression}
          onButtonClick={setExpression}
          resizeCalculatorContainer={adjustCalculatorWidth}
          onEvaluate={getExpressionResult}
          onClearAll={clearAll}
        />
      </div>
    </div>
  );
};
