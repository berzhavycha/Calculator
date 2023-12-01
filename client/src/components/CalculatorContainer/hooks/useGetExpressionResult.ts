import { queryBuilder } from "@queryBuilder";

type returnType = () => Promise<void>;

interface IExpressionResultState {
  expression: string,
  setResult: (result: string) => void,
  // eslint-disable-next-line no-unused-vars
  setErrorMessage: (errorMessage: string) => void
}

interface IResponse {
  result: string
}

export const useGetExpressionResult = ({ expression, setResult, setErrorMessage }: IExpressionResultState): returnType => {

  const getExpressionResult = async (): Promise<void> => {
    try {
      const data = await queryBuilder.makeRequest<IResponse>("calculations", "POST", JSON.stringify({
        expression,
      }));
      setResult(data.result);
    } catch (error) {
      if (error instanceof Error) {
        setResult("");
        setErrorMessage(error.message);
      }
    }
  };

  return getExpressionResult;
};
