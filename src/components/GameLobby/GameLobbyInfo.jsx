import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./GameLobbyInfo.module.css";
import { BsArrowLeftSquare} from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const GameLobby = () => {
  const location = useLocation();
  const [gameStatus, setGameStatus] = useState("Open for Registration");
  const currentGame = location.state.currentGame;
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  const handleJoin = () => {
    navigate("/currentGame", { state: { currentGame: currentGame } });
  };

  return (
    <Container fluid className={styles.GameCol}>
      
        
        <Row className={styles.InfoRow}>
          <Col lg={1} className={`d-none d-sm-block`}>
            
          </Col>
          <Col lg={10} xs={12} className={styles.gameInfoColContainer}>
          <Row className={styles.headerRow}>
          <Col lg={2} xs={2} className={styles.headerReturnCol}>
            <Button className={styles.headerReturnBtn}
              type="submit"
              onClick={handleReturn}
            >
              <BsArrowLeftSquare className={styles.returnIcon} />
            </Button>
          </Col>
        
          <Col lg={8} xs={8} className={styles.gameTitleCol}>
            <h6 className={styles.gameTitle}>{currentGame.gameTitle}</h6>
          </Col>
          <Col lg={2} xs={2} className={styles.headerReturnCol}></Col>
        </Row>
            <Row>
              <Col lg={12} xs={12} className={styles.gameInfoElementTop}>
                <p>Number of players: {currentGame.players}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={12} className={styles.gameInfoElementBottom}>
                <p>End date: {currentGame.ends.toLocaleDateString()}</p>
              </Col>
            </Row>
            <Row>
              
              <Col lg={12} xs={12} style={{padding: "0px"}}>
                <Button
                  type="none"
                  className={styles.statusBtn}
                  style={{
                    color:
                      gameStatus === "Open for Registration"
                        ? "rgb(0, 255, 21)"
                        : "rgb(110, 26, 26)",
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
                  <Button type="submit" className={styles.CantJoinBtn}>
                    Closed
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
          <Col lg={1} className={`d-none d-sm-block`} />
        </Row>
      
    </Container>
  );
};

export default GameLobby;
