import GameLobbyInfo from "../components/GameLobby/GameLobbyInfo";
import GameLobbyMap from "../components/GameLobby/GameLobbyMap";
import { Container, Row, Col } from "react-bootstrap";

const GameLobbyPage = () => {
    return (
        <>
            <Container fluid>
        <Row style={{padding: "0px"}}>
          <Col lg={6} xs={12}style={{padding: "0px"}}>
          <GameLobbyInfo/>
          </Col>
          <Col lg={6} xs={12}style={{padding: "0px"}}>
          <GameLobbyMap/>
          </Col>
        </Row>
      </Container>
            
            
        </>
    );
};

export default GameLobbyPage;