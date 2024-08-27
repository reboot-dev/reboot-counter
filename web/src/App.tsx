import { COUNTER_IDS } from "../../constants";
import TakeableCounter from "./TakableCounter";

function App() {
  return (
    <div>
      {COUNTER_IDS.map((id: string) => (
        <TakeableCounter id={id} key={id} />
      ))}
    </div>
  );
}

export default App;
