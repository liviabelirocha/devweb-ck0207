import { Col, Row, Button } from "antd";
import { useState, useRef } from "react";
import { useMatch } from "../hooks/match";

import "../styles/components/Header.css"

const Header = ({ children, title }) => {

  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const increment = useRef(null)

  const { addGamePoint } = useMatch()

  const handleStart = () => {
    setIsActive(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)

    return `${getMinutes} : ${getSeconds}`
  }

  const handleTeam1Score = () => {
    if (!isActive) handleStart()
    addGamePoint(1)
  }

  const handleTeam2Score = () => {
    if (!isActive) handleStart()
    addGamePoint(2)
  }

  const handleUndoPoint = () => {
    console.log("Insert undo point logic")
  }

  const handleResetMatch = () => {
    handleReset()
    console.log("Insert reset match logic")
  }

  
  return (
    <>
      <Row justify="space-between">
        <Col span={20}>
          <h1 className="title">{title}</h1>
        </Col>
        <Col span={4} style={{ display: "contents" }}>
          <h2>{formatTime()}</h2>
        </Col>
      </Row>
      {/* <br /> */}
      <div className="content">
        {children}
      </div>
      {/* <br /> */}

      <div className="controls">
        <Button onClick={handleTeam1Score} type="primary">Marcar Time1</Button>
        <Button onClick={handleTeam2Score} type="primary">Marcar Time2</Button>
        <Button onClick={handleUndoPoint}>Desfazer Marcação</Button>
        <Button onClick={handleResetMatch} danger>Reiniciar Partida</Button>
      </div>
    </>
  );
};

export { Header };
