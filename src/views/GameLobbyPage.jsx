import { Container, Row, Col } from "react-bootstrap";
import GameLobbyInfo from "../components/GameLobby/GameLobbyInfo";
import GameLobbyMap from "../components/GameLobby/GameLobbyMap";

const GameLobbyPage = () => {
  console.log("GAME LOBBY PAGE");
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} xs={12} style={{ padding: "0px" }}>
            <GameLobbyInfo />
          </Col>
          <Col lg={6} xs={12} style={{ padding: "0px" }}>
            <GameLobbyMap />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GameLobbyPage;