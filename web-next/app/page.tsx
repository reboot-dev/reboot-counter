import { ExternalContext } from "@reboot-dev/reboot";
import { Counter } from "../../api/counter/v1/counter_rbt.js";
import { COUNTER_IDS } from "../../constants.js";
import TakeableCounter from "./TakeableCounter.js";

export default async function Home() {
  const context = new ExternalContext({
    name: "react server context",
    gateway: process.env.NEXT_PUBLIC_ENDPOINT,
  });

  const counts = await Promise.all(
    COUNTER_IDS.map(async (id: string) => Counter.lookup(id).count(context))
  );

  return COUNTER_IDS.map((id, index) => (
    <TakeableCounter id={id} key={id} initialCount={counts[index].count} />
  ));
}
