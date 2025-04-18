import { Empty, PartialMessage } from "@bufbuild/protobuf";
import {
  ReaderContext,
  TransactionContext,
  WriterContext,
  allow,
} from "@reboot-dev/reboot";
import { Counter as CounterMessage } from "../../api/counter/v1/counter_pb.js";
import {
  Counter,
  TakeRequest,
  TakeResponse,
} from "../../api/counter/v1/counter_rbt.js";

export class CounterServicer extends Counter.Servicer {
  authorizer() {
    return allow();
  }

  async increment(
    context: WriterContext,
    state: Counter.State,
    request: Empty
  ): Promise<PartialMessage<Empty>> {
    state.count++;
    return {};
  }

  async count(
    context: ReaderContext,
    state: Counter.State,
    request: Empty
  ): Promise<PartialMessage<CounterMessage>> {
    return { count: state.count };
  }

  async take(
    context: TransactionContext,
    state: Counter.State,
    request: TakeRequest
  ): Promise<PartialMessage<TakeResponse>> {
    if (request.takerId === context.stateId) {
      state.count = (
        await Promise.all(
          request.takenIds.map((takenId) => Counter.ref(takenId).take(context))
        )
      ).reduce(
        (count, { takeAmount }: TakeResponse) => (count += takeAmount),
        state.count
      );
      return { takeAmount: state.count };
    } else {
      const takeAmount = state.count;
      state.count = 0;
      return { takeAmount };
    }
  }
}
