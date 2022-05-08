import { Col, Row } from "antd";
import { useState } from "react";
import { useMatch } from "../hooks/match";

import "../styles/components/Header.css";

const Header = ({ children, title }) => {
  const { matchState } = useMatch();

  return (
    <>
      {matchState.pair1HasWon ? <p className="won">Dupla 1 venceu!</p> : null}
      {matchState.pair2HasWon ? <p className="won">Dupla 2 venceu!</p> : null}
      <Row justify="space-between">
        <Col span={20}>
          <h1 className="title">{title}</h1>
        </Col>
      </Row>
      {/* <br /> */}
      <div className="content">{children}</div>
      {/* <br /> */}
    </>
  );
};

export { Header };
