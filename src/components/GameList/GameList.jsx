import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./GameList.module.css";
import { useNavigate, Link } from "react-router-dom";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import React from "react";
import { useGetAllGamesAPI } from "../Hooks/APIGames";

const GameList = () => {
  const { games, gamesIsLoading } = useGetAllGamesAPI();

  const [clickedGame, setClickedGame] = useState(null);
  const navigate = useNavigate();
 

  useEffect(() => {
    if (clickedGame !== null) {
      
      navigate("/gameLobby", { state: { currentGameId: clickedGame.id } });
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
          {games !== null &&
            games.map((game, index) => {
              return (
                <Link
                  className={styles.Link}
                  key={index}
                  onClick={() => {
                    setClickedGame(game);
                  }}
                >
                  <Container className={styles.gameListElementContainer}>
                    <Row>
                      <Col xs={12}>
                        <h4 className={styles.gameTitle}>{game.title}</h4>
                      </Col>
                    </Row>
                    <Row className={styles.gameListElementRow}>
                      <Col xs={4}>
                        <FaUserAlt className={styles.userIcon} />:
                        {game.amountPlayers}
                      </Col>
                      <Col xs={5}>
                      <p><FaCalendarAlt className={styles.calenderIcon} />{" "} End date: {new Date(game.endTime).toLocaleString("en-GB", {dateStyle: "short", timeStyle: "short"})}</p> 
                      </Col>
                      <Col xs={3}></Col>
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
