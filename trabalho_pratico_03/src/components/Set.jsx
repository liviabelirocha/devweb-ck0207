import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useMatch } from "../hooks/match";
import "../styles/components/Set.css";

const Set = ({ scoreTeam1, scoreTeam2, winner }) => {
  const { matchState } = useMatch();

  const [teamOne, setTeamOne] = useState("tbd");
  const [teamTwo, setTeamTwo] = useState("tbd");

  useEffect(() => {
    if (matchState.pair1SetPoints.length <= 1) {
      setTeamOne("t");
      setTeamTwo("t");

      return;
    }

    if (winner === "pair1") {
      setTeamOne("teamWon");
      setTeamTwo("teamLost");
    }
    if (winner === "pair2") {
      setTeamOne("teamLost");
      setTeamTwo("teamWon");
    }
  }, [winner, matchState]);

  return (
    <div className="set">
      <p className={teamOne}>{scoreTeam1}</p>
      <p className={teamTwo}>{scoreTeam2}</p>
    </div>
  );
};

export { Set };
