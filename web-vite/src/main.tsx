import { RebootClient, RebootClientProvider } from "@reboot-dev/reboot-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

function root() {
  if (import.meta.env.VITE_PUBLIC_ENDPOINT === undefined) {
    return <>Please set 'VITE_PUBLIC_ENDPOINT' in the '.env' file</>;
  }

  const client = new RebootClient(import.meta.env.VITE_PUBLIC_ENDPOINT);

  return (
    <React.StrictMode>
      <RebootClientProvider client={client}>
        <App />
      </RebootClientProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(root());
