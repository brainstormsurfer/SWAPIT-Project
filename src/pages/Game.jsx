import { useEffect } from "react";
import { Loading, EndGame } from "./index";
// import '../components/styles/sharedUI.css'
// import '../components/styles/Showcase.css'
import {
  CounterUI,
  ScoreUI,
  Filmbar,
  Showcase,
} from "../components/index";
import { GAME_OVER, LOADING } from "../ACTIONS";
import { useGameContext } from "../context/context";

const Game = () => {
  const {
    state: { isLoading, displayedScene, counter, isGameOver },
    dispatch,
  } = useGameContext();
    console.log("loading", isLoading)

  console.log("GAME displayedScene: ", displayedScene)
  useEffect(() => {
    if (displayedScene) {
      const delay1 = setTimeout(() => {
        dispatch({ type: LOADING, payload: false });
      }, 6000);
      return () => clearTimeout(delay1);
    }
  }, [displayedScene]);

  useEffect(() => {
    if (counter === 0) {
      const delay2 = setTimeout(() => {
        dispatch({ type: GAME_OVER, payload: true });
      }, 5000);
      return () => clearTimeout(delay2);
    }
  }, [counter]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!isGameOver ? (
            <>
              <Filmbar />
              <div className="showcase">
              <ScoreUI />
                <Showcase />
              <CounterUI />
              </div>
            </>
          ) : (
            <EndGame />
          )}
        </>
      )}
    </>
  );
};

export default Game;
