import { CalculatorContainer } from "@components";
import { OperationsProvider } from "@context";

function App(): JSX.Element {
  return (
    <OperationsProvider>
      <CalculatorContainer />
    </OperationsProvider>
  );
}

export default App;
