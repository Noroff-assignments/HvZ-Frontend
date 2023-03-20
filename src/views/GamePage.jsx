import GameInfo from "../components/Game/GameInfo";
import GameMap from "../components/Game/GameMap";
import GameChat from "../components/Game/GameChat";
import { Container, Row, Col } from "react-bootstrap";

const GameLobbyPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
        <Col lg={6} xs={12}style={{padding: "0px"}}>
            <GameInfo />
            <GameChat />
          </Col>
          <Col lg={6} xs={12}style={{padding: "0px"}}>
            <GameMap />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GameLobbyPage;
