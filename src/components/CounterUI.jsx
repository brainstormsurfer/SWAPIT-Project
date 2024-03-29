import './styles/sharedUI.css'
import './styles/CounterUI.css'

import { useEffect, useState } from "react";
import { useGameContext } from "../context/context";

const CounterUI = () => {
  const {
    state: { counter },
  } = useGameContext();
  const [counterEffect, setCounterEffect] = useState("");

  useEffect(() => {
    if (counter > 0) {
      setCounterEffect("blueCounterEffect");

      const timer = setTimeout(() => {
          if (counter > 0) {
        setCounterEffect("");
        }
      }, 2500);

      return () => clearTimeout(timer);
    } else if (counter === 0) {
      setCounterEffect("final-blue-effect");
      const timer = setTimeout(() => {
        setCounterEffect("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <div className={`counter-container ${counter === 0 && counterEffect === "" ? "dis-play" : "shared-container"}`}>
      <h2 className={`counter-value shared-value ${counterEffect}`}>{counter}</h2>    
      <h2 className={`counter-title shared-title ${counter > 0 ? "" : "effect-vertical"}`}>
        Scenes left
      </h2>
    </div>
  );
  // return (
  //   <div className={`counter-container ${counter === 0 && counterEffect === "" ? "dis-play" : "shared-container"}`}>
  //     <h2 className={`counter-value shared-value ${counterEffect}`}>{counter}</h2>
  //     <h2 className={`counter-title shared-title ${counter > 0 ? "" : "effect-vertical"}`}>
  //       Scenes left
  //     </h2>
  //   </div>
  // );
};

export default CounterUI;