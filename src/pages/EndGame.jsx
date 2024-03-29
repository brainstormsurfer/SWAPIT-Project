import './styles/endgame-mq.css';
import Carousel from "../components/Carousel";
import { useGameContext } from "../context/context";
import { Link } from "react-router-dom";
import './styles/Endgame.css';

const EndGame = () => {
  const { state: {quizSummary} } = useGameContext()

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  }
  return (
    <>
      { quizSummary ? (        
        <div className="endgame-container">
          <div className="button-container">
            <button
              className="btn-endgame pulse-endgame"
              onClick={refreshPage} >
              <Link to="/quiz">
              Start New Game
              </Link>
            </button>
          </div>
          <Carousel />
        </div>
        ) : (
        <NotFound />
      )}
    </>
  );
};

export default EndGame;
