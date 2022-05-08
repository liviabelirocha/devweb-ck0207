import { Button, Col } from "antd";
import React, { useRef, useState } from "react";
import { useMatch } from "../hooks/match";

function Footer(props) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const increment = useRef(null);

  const { addGamePoint, resetMatch, matchState } = useMatch();

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  const handleStart = () => {
    setIsActive(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(increment.current);
    setIsActive(false);
  };

  React.useEffect(() => {
    if (matchState.pair1HasWon || matchState.pair2HasWon) handleStop();
  }, [matchState.pair1HasWon, matchState.pair2HasWon]);

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setTimer(0);
  };

  const handleTeam1Score = () => {
    if (!isActive) handleStart();
    addGamePoint(1);
  };

  const handleTeam2Score = () => {
    if (!isActive) handleStart();
    addGamePoint(2);
  };

  const handleUndoPoint = () => {
    console.log("Insert undo point logic");
  };

  const handleResetMatch = () => {
    handleReset();
    resetMatch();
  };

  return (
    <>
      <div className="controls">
        <Button onClick={handleTeam1Score} type="primary">
          Marcar Time1
        </Button>
        <Button onClick={handleTeam2Score} type="primary">
          Marcar Time2
        </Button>
        <Button onClick={handleUndoPoint}>Desfazer Marcação</Button>
        <Button onClick={handleResetMatch} danger>
          Reiniciar Partida
        </Button>
      </div>
      <Col span={4} style={{ display: "contents" }}>
        <h2>{formatTime()}</h2>
      </Col>
    </>
  );
}

export default Footer;
