import { Game } from "./Game";
import { Set } from "./Set";
import { Team } from "./Team"

import '../styles/components/Scoreboard.css'

import "../styles/components/Scoreboard.css"
import { useMatch } from "../hooks/match";

const Scoreboard = ({teams}) => {

  const { matchState } = useMatch()

  return (
    <div className="scoreboard">
      <div className="teams">
          {teams.map((team, indexTeam) => (
              <Team 
                player1={team[0]}
                player2={team[1]}
              />
          ))}
      </div>
      <div className="sets">
        {matchState.pair1SetPoints.map((set, index) => {
          return (
            <Set
              scoreTeam1={set}
              scoreTeam2={matchState.pair2SetPoints[index]}
            />
          );
        })}
      </div>
      <Game/>
    </div>
  );
};

export { Scoreboard };
