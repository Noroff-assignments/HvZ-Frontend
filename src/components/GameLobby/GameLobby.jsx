import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./GameLobby.module.css";
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
const GameLobby = () => {
  const location = useLocation();
  
  const currentGame = location.state.currentGame;
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/"); 
  };
  return (
    <Container fluid>
      <Row>
        <Col lg={6} xs={12}className={styles.GameCol}>
          <Row>
          <Col lg={4} xs={4}>
          <Button type="submit" className={styles.ReturnBtn} onClick={handleReturn}>return</Button>
          </Col>
          </Row>
          <Row>
            <Col lg={12} xs={12}>
              <h1>{currentGame.gameTitle}</h1>
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
        </Col>
        <Col lg={6} xs={12} className={styles.mapCol}>
        <img src="https://i2-prod.corkbeo.ie/incoming/article18189170.ece/ALTERNATES/s810/0_Screen-Shot-2020-05-02-at-132900.png" className={styles.mapImg} alt="A beautiful sunset"></img>
        </Col>
      </Row>
      
    </Container>
  );
};

export default GameLobby;
