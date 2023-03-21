import GameLobbyInfo from "../components/GameLobby/GameLobbyInfo";
import GameLobbyMap from "../components/GameLobby/GameLobbyMap";
import { Container, Row, Col } from "react-bootstrap";
import keycloak from "../keycloak/keycloak";

const GameLobbyPage = () => {
    return (
        <>
        { keycloak.tokenParsed &&
            <Container fluid>
        <Row>
          <Col lg={6} xs={12}style={{padding: "0px"}}>
          <GameLobbyInfo/>
          </Col>
          <Col lg={6} xs={12}style={{padding: "0px"}}>
          <GameLobbyMap/>
          </Col>
        </Row>
      </Container>
        
        }
            
            
        </>
    );
};

export default GameLobbyPage;