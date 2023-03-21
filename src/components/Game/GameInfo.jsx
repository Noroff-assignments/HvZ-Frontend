import { Col, Row, Button } from "react-bootstrap";
import styles from "./GameInfo.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";

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
    <Col lg={12} xs={12} className={styles.GameCol}>
      <Row>
        <Col lg={4} xs={4}>
          <Button
            type="submit"
            className={styles.ReturnBtn}
            onClick={handleReturn}
          >
            <IoReturnDownBack className={styles.ReturnIcon} />
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
          <p>End date: {currentGame.ends && currentGame.ends.toLocaleDateString()}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={12} xs={12}>
          {currentMission && currentMission.length > 0 ? (
            <h4>Selected mission: {currentMission[0]}</h4>
          ) : (
            <p></p>
          )}
        </Col>
      </Row>
      <Row>
        <Col lg={12} xs={12}>
          {currentMission && currentMission.length > 0 ? (
            <p>Description: {currentMission[1]}</p>
          ) : (
            <p>empty</p>
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default GameInfo;