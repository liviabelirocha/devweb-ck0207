import { Game } from "./Game";
import { Set } from "./Set";
import { Team } from "./Team"

import '../styles/components/Scoreboard.css'

import "../styles/components/Scoreboard.css"

const Scoreboard = ({teams}) => {

  const sets = [
    { team1: 3, team2: 3 },
  ];

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
        {sets.map((set, index) => {
          return (
            <Set
              scoreTeam1={set.team1}
              scoreTeam2={set.team2}
            />
          );
        })}
      </div>
      <Game/>
    </div>
  );
};

export { Scoreboard };
