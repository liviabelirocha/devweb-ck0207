import { Row, Col } from "antd";
import { Game } from "./Game";
import { Set } from "./Set";

const Scoreboard = ({teams}) => {

  const sets = [
    { team1: 3, team2: 2 },
    { team1: 3, team2: 2 },
  ];

  return (
    <Row style={{ width: "100%" }} justify="start" align="middle">
      {/* teams */}
      <Col span={12}>
        {teams.map((team, indexTeam) => (
          <>
            <Row>
              {team.map((player, index) => (
                <Col>
                  <p>{player}</p>
                </Col>
              ))}
            </Row>
          </>
        ))}
      </Col>
      {/* sets */}
      {sets.map((set, index) => {
        return (
          <Col span={4}>
            <Set></Set>
          </Col>
        );
      })}
      {/* game */}
      <Col span={4}>
        <Game></Game>
      </Col>
    </Row>
  );
};

export { Scoreboard };
