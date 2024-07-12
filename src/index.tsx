import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { MainProvider } from "context/context";
import App from "components/App/App";

ReactDOM.createRoot(document.getElementById("App") as HTMLElement).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>
);
