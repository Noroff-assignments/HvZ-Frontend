import GameInfo from "../components/Game/GameInfo";
import GameMap from "../components/Game/GameMap";
import GameChat from "../components/Game/GameChat";
import { Container, Row, Col } from "react-bootstrap";
import keycloak from "../keycloak/keycloak";

const GameLobbyPage = () => {
  console.log("GAME PAGE");

  // return (
  //   <>
    
  //   { keycloak.tokenParsed &&
  //     <Container fluid>
  //       <Row>
  //       <Col sm={12}md={6}lg={{order: 1}} xs={{order: 2}}style={{padding: "0px"}}>
  //           <GameInfo />
  //           <GameChat />
  //         </Col>
  //         <Col sm={12}md={6}lg={{order: 2}} xs={{order: 1}}style={{padding: "0px"}}>
  //           <GameMap />
  //         </Col>
  //       </Row>
  //     </Container>
  //   }
  //   </>
  // );
};

export default GameLobbyPage;
