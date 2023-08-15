import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Providers } from "./providers";
import { GlobalStyle } from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Providers>
    <BrowserRouter>
      <React.StrictMode>
        <App />
        <GlobalStyle />
      </React.StrictMode>
    </BrowserRouter>
  </Providers>
);
