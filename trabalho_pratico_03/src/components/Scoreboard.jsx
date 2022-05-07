import { Row, Col } from "antd";
import { Game } from "./Game";
import { Set } from "./Set";

import "../styles/components/Scoreboard.css"

const Scoreboard = ({teams}) => {

  const sets = [
    { team1: 3, team2: 2 },
    { team1: 3, team2: 2 },
  ];

  return (
    <Row
      style={{ width: "100%" }}
      justify="start"
      align="middle"
      className="teams"
    >
      {/* teams */}
      <Col span={12}>
        {teams.map((team, indexTeam) => (
          <>
            <Row>
              {team.map((player, index) => (
                <>
                {player.plunder ?
                  <Col span={1}>
                    <img
                      width="10px"
                      src="https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/10663/26965/beach_ball__43475.1527023620.png?c=2"
                      alt="ball"
                    />
                  </Col>
                  : ""}
                  <Col span={11}>
                    <p>{player.name}</p>
                  </Col>
                </>
              ))}
            </Row>
          </>
        ))}
      </Col>
      {/* sets */}
      {sets.map((set, index) => {
        return (
          <Col span={3}>
            <Set></Set>
          </Col>
        );
      })}
      {/* game */}
      <Col span={3}>
        <Game></Game>
      </Col>
    </Row>
  );
};

export { Scoreboard };
