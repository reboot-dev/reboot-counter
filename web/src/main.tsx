import {
  ResembleClient,
  ResembleClientProvider,
} from "@reboot-dev/resemble-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const client = new ResembleClient("https://dev.localhost.direct:9991");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResembleClientProvider client={client}>
      <App />
    </ResembleClientProvider>
  </React.StrictMode>
);
