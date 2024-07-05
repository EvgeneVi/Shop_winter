import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { MainProvider } from "./context";

ReactDOM.createRoot(document.getElementById("App")).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
