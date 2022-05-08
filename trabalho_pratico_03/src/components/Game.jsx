import { useMatch } from "../hooks/match";
import "../styles/components/Game.css"

const Game = () => {

  const { matchState } = useMatch();

  return (
    <div className="game">
      <p>{matchState.pair1GamePoints}</p>
      <p>{matchState.pair2GamePoints}</p>
    </div>
  );
};

export { Game };
