import { Button } from "antd";

import { Scoreboard } from "../components/Scoreboard";
import { Header } from "../components/Header";

import "../styles/pages/Match.css";

const Match = () => {
  const title = "Open DC de Beach Tennis"
  const constructTeam = (playerOne, playerTwo, plunder1, plunder2) => {
    return [{name: playerOne, plunder: plunder1}, {name: playerTwo, plunder: plunder2}];
  }
  const teams = [
    constructTeam("Fernando Trinta", "Lincoln Rocha", true, false),
    constructTeam("João Paulo Pordeus", "Paulo Rêgo", false, false),
  ];

  return (
    <div className="content_container">
      <img width="100vw" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Brasao4_vertical_cor_300dpi.png" alt="ufc"></img>
      <Header title={title}>
      <Scoreboard teams={teams} />
      </Header>
    </div>
  );
};

export { Match };
