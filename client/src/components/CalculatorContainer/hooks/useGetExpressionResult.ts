import { useCurrentExpression } from '@context';
import { queryBuilder } from '@queryBuilder'

export const useGetExpressionResult = () => {
    const { expression, setResult, setErrorMessage } = useCurrentExpression()

    const getExpressionResult = async (): Promise<void> => {
        try {
            const data = await queryBuilder.makeRequest('calculations', 'POST', { expression });
            setResult(data.result);
        } catch (error) {
            if (error instanceof Error) {
                setResult('')
                setErrorMessage(error.message)
            }
        }
    }

    return getExpressionResult
};

