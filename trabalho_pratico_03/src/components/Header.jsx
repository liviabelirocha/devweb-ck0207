import { Col, Row, Button } from "antd";
import { useState, useRef } from "react";

const Header = ({ children, title }) => {

  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)

    return `${getMinutes} : ${getSeconds}`
  }

  const handleProgressMatch = () => {
    if (isActive) handleStart()

    console.log("Insert match progression logic")
  }

  const handleUndoPoint = () => {
    console.log("Insert undo point logic")
  }

  const handleResetMatch = () => {
    console.log("Insert reset match logic")
  }

  
  return (
    <>
      <Row justify="space-between">
        <Col span={20}>
          <h1>{title}</h1>
        </Col>
        <Col span={4} style={{ display: "contents" }}>
          <h2>{formatTime()}</h2>
        </Col>
      </Row>
      <hr></hr>
      <br />
      {children}
      <br />

      <div className="controls">
        <Button onClick={handleProgressMatch} type="primary">Marcar Time1</Button>
        <Button onClick={handleProgressMatch} type="primary">Marcar Time2</Button>
        <Button onClick={handleUndoPoint}>Desfazer Marcação</Button>
        <Button onClick={handleResetMatch} danger>Reiniciar Partida</Button>
      </div>
    </>
  );
};

export { Header };
