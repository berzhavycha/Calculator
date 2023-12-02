import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { OperationsProvider } from "@context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OperationsProvider>
      <App />
  </OperationsProvider>,
);
