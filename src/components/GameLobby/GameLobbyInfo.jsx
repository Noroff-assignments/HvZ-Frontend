import React, { useState } from 'react';
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./GameLobbyInfo.module.css";

import { useLocation, useNavigate} from "react-router-dom";

const GameLobby = () => {
  const location = useLocation();
  const [gameStatus, setGameStatus] = useState('Open for Registration');
  const currentGame = location.state.currentGame;
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  const handleJoin = () => {
    navigate("/currentGame",{ state: { currentGame: currentGame } });
  };
    
  return (
    <Container fluid className={styles.InfoContainer}>
      <Row>
        <Col lg={12} xs={12} className={styles.GameCol}>
          <Row>
            <Col lg={4} xs={4}>
              <Button
                type="submit"
                className={styles.ReturnBtn}
                onClick={handleReturn}
              >
                return
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={12} xs={12}>
              <h1 className={styles.gameTitle}>{currentGame.gameTitle}</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={12} xs={12}>
              <p>Number of players: {currentGame.players}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={12} xs={12}>
              <p>End date: {currentGame.ends.toLocaleDateString()}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={2} className={`${styles.joinFillerCol} d-none d-sm-block`}></Col>
            <Col lg={8} xs={12}>
              <Button
                type="none"
                className={styles.statusBtn}
                style={{ 
                  color: gameStatus === "Open for Registration" ? "rgb(0, 255, 21)" : "rgb(110, 26, 26)",
                  
                }}
              >
                Game Status: {gameStatus}
              </Button>
              {gameStatus === "Open for Registration" ? (
                <Button
                  type="submit"
                  className={styles.joinBtn}
                  onClick={handleJoin}
                >
                  Join
                </Button>
              ) : (
                <Button
                  type="submit"
                  className={styles.CantJoinBtn}
                  
                >
                  Closed
                </Button>
              ) }
            </Col>
            <Col lg={2} className={`${styles.joinFillerCol} d-none d-sm-block`}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GameLobby;