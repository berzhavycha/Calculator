import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ICurrentExpression {
    expression: string;
    setExpression: (expression: string) => void;
    result: string;
    setResult: (result: string) => void;
    errorMessage: string;
    setErrorMessage: (message: string) => void;
}

const CurrentExpressionContext = createContext<ICurrentExpression | undefined>(undefined);

const useCurrentExpression = (): ICurrentExpression => {
    const context = useContext(CurrentExpressionContext);
    if (!context) {
        throw new Error('useCurrentExpression must be used within a CurrentExpressionProvider');
    }
    return context;
};

interface ICurrentExpressionProviderProps {
    children: ReactNode;
}

const CurrentExpressionProvider: React.FC<ICurrentExpressionProviderProps> = ({ children }) => {
    const [expression, setExpression] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const contextValue: ICurrentExpression = {
        expression,
        setExpression,
        result,
        setResult,
        errorMessage,
        setErrorMessage,
    };

    return (
        <CurrentExpressionContext.Provider value={contextValue}>
            {children}
        </CurrentExpressionContext.Provider>
    );
};

export { CurrentExpressionProvider, CurrentExpressionContext, useCurrentExpression };
