"use client";

import { RebootClient, RebootClientProvider } from "@reboot-dev/reboot-react";
import { ReactNode } from "react";

export default function RebootContext({ children }: { children: ReactNode }) {
  if (process.env.NEXT_PUBLIC_ENDPOINT === undefined) {
    return <>Please set 'NEXT_PUBLIC_ENDPOINT' in the '.env' file</>;
  }

  const client = new RebootClient(process.env.NEXT_PUBLIC_ENDPOINT);

  return (
    <RebootClientProvider client={client}>
      <>{children}</>
    </RebootClientProvider>
  );
}
