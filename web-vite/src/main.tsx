import { RebootClient, RebootClientProvider } from "@reboot-dev/reboot-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const client = new RebootClient("https://dev.localhost.direct:9991");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RebootClientProvider client={client}>
      <App />
    </RebootClientProvider>
  </React.StrictMode>
);
