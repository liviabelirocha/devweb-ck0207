import { Button } from "antd";

import { Scoreboard } from "../components/Scoreboard";
import { Header } from "../components/Header";

import "../styles/pages/Match.css";

const Match = () => {
  const title = "Open DC de Beach Tennis"
  const constructTeam = (playerOne, playerTwo) => {
    return [{name: playerOne, plunder: false}, {name: playerTwo, plunder: true}];
  }
  const teams = [
    constructTeam("Fernando Trinta", "Lincoln Rocha"),
    constructTeam("João Paulo Pordeus", "Paulo Rêgo"),
  ];

  return (
    <div className="content_container">
      <Header title={title}>
      <Scoreboard teams={teams} />
      </Header>
    </div>
  );
};

export { Match };
