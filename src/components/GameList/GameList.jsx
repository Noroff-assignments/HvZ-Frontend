import { Container, Col, Row } from "react-bootstrap";
import styles from "./GameList.module.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation, useNavigate, Link } from "react-router-dom";

const GameList = () => {
  const [clickedGame, setClickedGame] = useState(null);
  const navigate = useNavigate();
  let gameListArray = [
    {
      gameTitle: "VegetablesVsZombies (Handicapped)",
      players: 20,
      ends: new Date("2023-08-03"),
    },
    {
      gameTitle: "ReneRoyale",
      players: 35,
      ends: new Date("2023-08-03"),
    },
    {
      gameTitle: "zzzzZZZZzzzzZ",
      players: 8000000000,
      ends: new Date("2175-01-09"),
    },
    {
      gameTitle: "RealGunsAllowed",
      players: 20,
      ends: new Date("2023-08-03"),
    },
    {
      gameTitle: "Just me. lonesome me...",
      players: 1,
      ends: new Date("2023-08-03"),
    },
  
  ];
  useEffect(() => {
    if (clickedGame !==null) {
      navigate("/gameLobby", { state: { currentGame: clickedGame } });
    }
  }, [clickedGame, navigate]);
  
  return (
    <Container fluid>
      <Row className={styles.gameRowBox}>
      <table className={styles.gameTable}></table>
        <Col
          lg={4}
          className={`${styles.colTestSides} d-none d-sm-block`}
        ></Col>
        <Col lg={4} xs={12} className={styles.GameList}>
          {gameListArray.map((game, index) => {
            return (
              <Link
                key={index}
                onClick={() => {
                  setClickedGame(game);
                }}
      
              >
                <Container className={styles.gameRow}>
                  <Row>
                    <Col xs={12}>
                      <span className={styles.gameTitle}>
                        Game: {game.gameTitle}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <span className={styles.players}> - Players: </span>
                      {game.players}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <span className={styles.ends}> - ending Date: </span>
                      {game.ends.toLocaleDateString()}
                    </Col>
                  </Row>
                </Container>
              </Link>
            );
          })}
        </Col>
        <Col
          lg={4}
          className={`${styles.colTestSides} d-none d-sm-block`}
        ></Col>
      </Row>
    </Container>
  );
};

export default GameList;
