import { useMemo, useState } from "react";
import { Stage } from "./components/Stage";
import { buildDemoSteps } from "./demo/steps";

function App() {
  const steps = useMemo(buildDemoSteps, []);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1));
  const restart = () => setIndex(0);

  const current = steps[index];

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-stage-bg">
      <Stage stepKey={index} transition={current.transition} onAdvance={index === steps.length - 1 ? restart : next}>
        {current.render({ next, restart })}
      </Stage>
    </div>
  );
}

export default App;
