import { useMemo } from "react";
import { buildDemoSteps } from "../demo/steps";
import { SlideDeck, type DeckSlide } from "./SlideDeck";
import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02Problem } from "./slides/Slide02Problem";
import { Slide03Pickup } from "./slides/Slide03Pickup";
import { Slide04Shortage } from "./slides/Slide04Shortage";
import { Slide05Packing } from "./slides/Slide05Packing";
import { Slide06Interactive } from "./slides/Slide06Interactive";
import { Slide07Impact } from "./slides/Slide07Impact";
import { Slide08Integration } from "./slides/Slide08Integration";
import { Slide09Cta } from "./slides/Slide09Cta";

const noop = { next: () => {}, restart: () => {} };

export function Deck() {
  const steps = useMemo(buildDemoSteps, []);

  const hero = useMemo(() => steps[0].render(noop), [steps]);
  const pickupLoop = useMemo(() => steps.slice(1, 4), [steps]);
  const shortageLoop = useMemo(() => steps.slice(4, 7), [steps]);
  const packingLoop = useMemo(() => steps.slice(11, 16), [steps]);
  const interactiveSlice = useMemo(() => steps.slice(0, 10), [steps]);

  const slides: DeckSlide[] = useMemo(
    () => [
      { id: "cover", label: "الغلاف", Component: ({ active }) => <Slide01Cover active={active} hero={hero} /> },
      { id: "problem", label: "المشكلة", Component: Slide02Problem },
      {
        id: "pickup",
        label: "جمع المنتجات بالباركود",
        Component: ({ active }) => <Slide03Pickup active={active} loopSteps={pickupLoop} />,
      },
      {
        id: "shortage",
        label: "معالجة النقص",
        Component: ({ active }) => <Slide04Shortage active={active} loopSteps={shortageLoop} />,
      },
      {
        id: "packing",
        label: "التعبئة والشحن",
        Component: ({ active }) => <Slide05Packing active={active} loopSteps={packingLoop} />,
      },
      {
        id: "interactive",
        label: "جرّب بنفسك",
        Component: ({ active }) => <Slide06Interactive active={active} steps={interactiveSlice} />,
      },
      { id: "impact", label: "الأثر التجاري", Component: Slide07Impact },
      { id: "integration", label: "التكامل", Component: Slide08Integration },
      { id: "cta", label: "ابدأ الآن", Component: Slide09Cta },
    ],
    [hero, pickupLoop, shortageLoop, packingLoop, interactiveSlice],
  );

  return <SlideDeck slides={slides} />;
}
