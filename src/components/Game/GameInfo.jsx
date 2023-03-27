import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./GameInfo.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useGetOneGameAPI } from "../Hooks/APIGames";

const GameInfo = () => {
  const location = useLocation();
  const currentMission =
    location.state && location.state.currentMission != null
      ? location.state.currentMission
      : {};
  const currentGameId = location.state.currentGameId;
  const { game, gamesIsLoading } = useGetOneGameAPI(currentGameId);
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  useEffect(() => {
    if (game !== null) {
      console.log("should be Test")
      console.log(game)
    }
  }, [game]);
  return (
    <Container fluid className={styles.GameCol}>
      {game !== null && (
        <Row className={styles.InfoRow}>
          <Col lg={1} className={`d-none d-sm-block`}></Col>
          <Col lg={10} xs={12} className={styles.gameInfoColContainer}>
            <Row className={styles.headerRow}>
              <Col lg={1} xs={1} className={styles.headerReturnCol}>
                <BsArrowLeftSquare
                  className={styles.returnIcon}
                  onClick={handleReturn}
                />
              </Col>

              <Col lg={10} xs={10} className={styles.gameTitleCol}>
                <h3 className={styles.gameTitle}>{game?.title}</h3>
              </Col>
              <Col lg={1} xs={1} className={styles.headerReturnCol}></Col>
            </Row>
            <Row>
              <Col lg={12} xs={12} className={styles.gameInfoElementTop}>
                <p>Number of players: {game?.players}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={12} className={styles.gameInfoElementMid}>
                <p>End date: {game.endTime}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={12} className={styles.gameInfoElementMid}>
                {currentMission &&
                  currentMission.title &&
                  currentMission.title.length > 0 && (
                    <h4>Selected mission: {currentMission.title}</h4>
                  )}
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={12} className={styles.gameInfoElementBottom}>
                {currentMission &&
                  currentMission.title &&
                  currentMission.title.length > 0 && (
                    <p>Description: {currentMission.description}</p>
                  )}
              </Col>
            </Row>
          </Col>
          <Col lg={1} className={`d-none d-sm-block`} />
        </Row>
      )}
    </Container>
  );
};

export default GameInfo;
