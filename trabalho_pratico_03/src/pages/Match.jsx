import { Scoreboard } from "../components/Scoreboard";
import { Timer } from "../components/Timer";
import { Button } from "../components/Button";

import "../styles/pages/Match.css"

const Match = () => {
  const constructTeam = (playerOne, playerTwo) => {
    return [playerOne, playerTwo];
  }
  const teams = [
    constructTeam("Fernando Trinta", "Lincoln Rocha"),
    constructTeam("João Paulo Pordeus", "Paulo Rêgo"),
  ];
  return (
    <div className="content_container">
      <Scoreboard teams={teams} />
      <Timer />

      <div className="controls">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
};

export { Match };
