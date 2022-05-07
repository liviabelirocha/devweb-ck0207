import { Col, Row } from "antd";
import "../styles/components/Set.css"

const Set = ({ scoreTeam1, scoreTeam2, won = "tbd" }) => {
  let teamOne = "tbd";
  let teamTwo = "tbd";
  if (won === "teamOne") {
    teamOne = "teamWon";
    teamTwo = "teamLost";
  } else if (won === "teamTwo") {
    teamOne = "teamLost";
    teamTwo = "teamWon";
  }
  return (
    <div className="set">
      <p className={teamOne}>{scoreTeam1}</p>
      <p className={teamTwo}>{scoreTeam2}</p>
    </div>
  );
};

export { Set };
