import { Container, Col, Row } from "react-bootstrap";
import styles from "./GameList.module.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import React from "react";

const GameList = () => {
  const [clickedGame, setClickedGame] = useState(null);
  const navigate = useNavigate();
  let gameListArray = [
    {
      gameTitle: "Vegetables Vs Zombies (Handicapped)",
      players: 20,
      ends: new Date("2023-08-03"),
    },
    
    {
      gameTitle: "Rene Royale",
      players: 35,
      ends: new Date("2023-08-03"),
    },
    {
      gameTitle: "zzzzZZZZzzzzZ",
      players: 800,
      ends: new Date("2175-01-09"),
    },
    {
      gameTitle: "Real Guns Allowed",
      players: 20,
      ends: new Date("2023-11-14"),
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
    <Container fluid className={styles.GameListContainerFluid}>
      <Row className={styles.gameRowBox}>
        <Col
          lg={2}
          className={`${styles.colTestSides} d-none d-sm-block`}
        ></Col>
        <Col lg={8} xs={12} className={styles.GameList}>
          {gameListArray.map((game, index) => {
            return (

              <Link className={styles.Link}
                key={index}
                onClick={() => {
                  setClickedGame(game);
                }}>
                <Container className={styles.gameListElementContainer}>
                  <Row >
                    <Col xs={12}>
                      <h4 className={styles.gameTitle}>
                      {game.gameTitle}
                      </h4>    
                      </Col>
                  </Row>
                  <Row className={styles.gameListElementRow}>
                    <Col xs={4}>
                      <FaUserAlt className={styles.userIcon}/>: {game.players}                        
                    </Col>
                    <Col xs={5}>
                    <FaCalendarAlt className={styles.calenderIcon}/> {game.ends.toLocaleDateString()}
                    </Col>
                      <Col xs={3}>
                      </Col>
                    </Row>
                </Container>
              </Link>
            );
          })}
        </Col>
        <Col
          lg={2}
          className={`${styles.colTestSides} d-none d-sm-block`}
        ></Col>
      </Row>
    </Container>
  );
};

export default GameList;
