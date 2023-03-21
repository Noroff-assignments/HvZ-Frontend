import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./GameLobbyInfo.module.css";

import { useLocation, useNavigate} from "react-router-dom";

const GameLobby = () => {
  const location = useLocation();
  
  const currentGame = location.state.currentGame;
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  const handleJoin = () => {
    navigate("/currentGame",{ state: { currentGame: currentGame } });
  }
    
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
          <Row>
            <Col lg={4} xs={4}>
              <Button
                type="submit"
                className={styles.JoinBtn}
                onClick={handleJoin}
              >
                Join
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GameLobby;
