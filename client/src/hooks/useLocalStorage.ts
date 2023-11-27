import { useEffect, useState } from 'react';
import { useCurrentExpression } from '@context';

interface ICalculation {
    expression: string;
}

interface IHookReturn {
    lastCalculations: ICalculation[],
    updateLocalStorage: (expression: string, result: string) => void
}

export const useLocalStorage = (): IHookReturn => {
    const { result } = useCurrentExpression()
    const [lastCalculations, setLastCalculations] = useState<ICalculation[]>([]);

    const updateLocalStorage = (expression: string, result: string): void => {
        let calculations = JSON.parse(
            localStorage.getItem('lastCalculations') || '[]'
        );

        calculations.unshift({ expression, result });
        calculations = calculations.slice(0, 5);

        localStorage.setItem('lastCalculations', JSON.stringify(calculations));
    }

    useEffect(() => {
        const calculations = JSON.parse(localStorage.getItem('lastCalculations') || '[]') as ICalculation[];
        setLastCalculations(calculations);
    }, [result]);

    return {
        lastCalculations,
        updateLocalStorage
    };
};

