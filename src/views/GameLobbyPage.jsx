import GameLobbyInfo from "../components/GameLobby/GameLobbyInfo";
import GameLobbyMap from "../components/GameLobby/GameLobbyMap";
import { Container, Row, Col } from "react-bootstrap";

const GameLobbyPage = () => {
    return (
        <>
            <Container fluid>
        <Row>
          <Col lg={6} xs={12}>
          <GameLobbyInfo/>
          </Col>
          <Col lg={6} xs={12}>
          <GameLobbyMap/>
          </Col>
        </Row>
      </Container>
            
            
        </>
    );
};

export default GameLobbyPage;