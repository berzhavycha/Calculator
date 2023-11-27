import { useEffect, useState } from 'react';
import { queryBuilder } from '@queryBuilder';

export type IOperation = {
    priority: number;
    calculate: (...operands: number[]) => number;
    type: string;
    associativity?: string;
};

export type OperationsType = Record<string, IOperation>;

export const useFetchOperations = (): OperationsType => {
    const [operations, setOperations] = useState<OperationsType>({});

    useEffect(() => {
        const fetchOperations = async () => {
            try {
                const data = await queryBuilder.makeRequest('operations', 'GET');
                setOperations(data);
            } catch (error) {
                setOperations({});
            }
        };

        fetchOperations();
    }, []);

    return operations;
};

