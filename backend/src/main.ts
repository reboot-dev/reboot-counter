import { Application } from "@reboot-dev/reboot";
import { Counter } from "../../api/counter/v1/counter_rbt.js";
import { COUNTER_IDS } from "../../constants.js";
import { CounterServicer } from "./counter_servicer.js";

const initialize = async (context) => {
  COUNTER_IDS.map(
    async (counterId: string) =>
      await Counter.construct({ id: counterId })
        .idempotently()
        .increment(context)
  );
};

new Application({
  servicers: [CounterServicer],
  initialize,
}).run();
