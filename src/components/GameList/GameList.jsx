import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./GameList.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const GameList = () => {
  let gameListArray = [
    {
      gameTitle: "VegetablesVsZombies (Handicapped)",
      players: 20,
      ends: new Date("2023-08-03"),
    },
    {
      gameTitle: "ReneRoyale",
      players: 20,
      ends: new Date("2023-08-03"),
    },
    {
      gameTitle: "zzzzZZZZzzzzZ",
      players: 20,
      ends: new Date("2023-08-03"),
    },
    {
      gameTitle: "RealGunsAllowed",
      players: 20,
      ends: new Date("2023-08-03"),
    },
  ];

  //gameListArray.push()
  //const navigate = useNavigate();
  //useEffect(() => {

  //      navigate("/login");
  //});

  return (
    <Container fluid>
      <Row>
        <Col lg={1} hidden-xs className={styles.colTestSides}></Col>
        <Col lg={10} xs={12} className={styles.GameList}>
          {gameListArray.map((game, index) => {
            return (
              
                <Container key={index} className={styles.gameRow}>
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
              
            );
          })}
        </Col>
        <Col lg={1} hidden-xs className={styles.colTestSides}></Col>
      </Row>
    </Container>
  );
};

export default GameList;
