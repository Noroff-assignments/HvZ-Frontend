import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./GameInfo.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import { BsArrowLeftSquare} from "react-icons/bs";

const GameInfo = () => {
  const location = useLocation();
  const currentMission =
    location.state && location.state.currentMission != null ? location.state.currentMission : {};
  const currentGame = location.state && location.state.currentGame;
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };

  return (
    <Container fluid className={styles.GameCol}>
      
        
        <Row className={styles.InfoRow}>
          <Col lg={1} className={`d-none d-sm-block`}>
            
          </Col>
          <Col lg={10} xs={12} className={styles.gameInfoColContainer}>
          <Row className={styles.headerRow}>
          <Col lg={1} xs={1} className={styles.headerReturnCol}>
            
              <BsArrowLeftSquare className={styles.returnIcon} onClick={handleReturn} />
            
          </Col>
        
          <Col lg={10} xs={10} className={styles.gameTitleCol}>
            <h3 className={styles.gameTitle}>{currentGame.gameTitle}</h3>
          </Col>
          <Col lg={1} xs={1} className={styles.headerReturnCol}></Col>
        </Row>
            <Row>
              <Col lg={12} xs={12} className={styles.gameInfoElementTop}>
                <p>Number of players: {currentGame.players}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={12} className={styles.gameInfoElementMid}>
                <p>End date: {currentGame.ends.toLocaleDateString()}</p>
              </Col>
            </Row>
            <Row>
        <Col lg={12} xs={12} className={styles.gameInfoElementMid}>
          {currentMission && currentMission.length > 0 ? (
            <h4>Selected mission: {currentMission[0]}</h4>
          ) : (
            <p></p>
          )}
        </Col>
      </Row>
      <Row>
        <Col lg={12} xs={12} className={styles.gameInfoElementBottom}>
          {currentMission && currentMission.length > 0 ? (
            <p>Description: {currentMission[1]}</p>
          ) : (
            <p>empty</p>
          )}
        </Col>
      </Row>
          </Col>
          <Col lg={1} className={`d-none d-sm-block`} />
        </Row>
      
    </Container>


    
  );
};

export default GameInfo;