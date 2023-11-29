import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { OperationsProvider, CurrentExpressionProvider } from "@context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OperationsProvider>
    <CurrentExpressionProvider>
      <App />
    </CurrentExpressionProvider>
  </OperationsProvider>,
);
