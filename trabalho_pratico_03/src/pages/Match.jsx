import { Button } from "antd";

import { Scoreboard } from "../components/Scoreboard";
import { Header } from "../components/Header";

import "../styles/pages/Match.css";
import { useMatch } from "../hooks/match";
import Footer from "../components/Footer";

const Match = () => {
  const { matchState } = useMatch();

  const title = matchState.description;

  const constructTeam = (playerOne, playerTwo, plunder1, plunder2) => {
    return [
      { name: playerOne, plunder: plunder1 },
      { name: playerTwo, plunder: plunder2 },
    ];
  };

  let firstTeam = matchState.whichPairBegins === "Par 1" ? true : false;
  let secondTeam = !firstTeam;

  const teams = [
    constructTeam(
      matchState.pair1player1,
      matchState.pair1player2,
      firstTeam,
      false
    ),
    constructTeam(
      matchState.pair2player1,
      matchState.pair2player2,
      secondTeam,
      false
    ),
  ];

  return (
    <div className="content_container">
      <img
        width="100vw"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Brasao4_vertical_cor_300dpi.png"
        alt="ufc"
      ></img>
      <Header title={title}>
        <Scoreboard teams={teams} />
      </Header>

      <Footer />
    </div>
  );
};

export { Match };
