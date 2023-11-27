import React, { useRef } from 'react';
import { CalculatorButtons, InputExpression, ResultExpression, CalculationHistory } from '@components';
import { useCurrentExpression } from '@context';
import { useLocalStorage, useGetExpressionResult } from '@hooks';

export const CalculatorContainer: React.FC = () => {
    const { result, expression } = useCurrentExpression()
    const calculatorContainerRef = useRef<HTMLDivElement>(null);
    const { updateLocalStorage } = useLocalStorage()
    const getExpressionResult = useGetExpressionResult()

    const adjustCalculatorWidth = (increaseWidthBy: number): void => {
        const container = calculatorContainerRef.current;
        if (container) {
            const { width } = container.getBoundingClientRect();
            container.style.minWidth = `${width + increaseWidthBy}px`;
        }
    };

    const getResultAndUpdateLocalStorage = async () => {
        await getExpressionResult()
        updateLocalStorage(expression, result)
    }

    return (
        <div className='bg-gray-100 h-screen flex items-center justify-center'>
            <div ref={calculatorContainerRef} className='bg-white pt-8 pr-8 pl-8 pb-4 rounded shadow-md'>
                <CalculationHistory />
                <InputExpression getResult={getResultAndUpdateLocalStorage} />
                <ResultExpression />
                <CalculatorButtons adjustWidth={adjustCalculatorWidth} getResult={getResultAndUpdateLocalStorage} />
            </div>
        </div>
    );
};

