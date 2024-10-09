"use client";

import { RebootClient, RebootClientProvider } from "@reboot-dev/reboot-react";
import { ReactNode } from "react";

export default function RebootContext({ children }: { children: ReactNode }) {
  console.log(process.env.NEXT_PUBLIC_ENDPOINT);
  const client = new RebootClient(
    `https://${process.env.NEXT_PUBLIC_ENDPOINT}`
  );

  return (
    <RebootClientProvider client={client}>
      <>{children}</>
    </RebootClientProvider>
  );
}
