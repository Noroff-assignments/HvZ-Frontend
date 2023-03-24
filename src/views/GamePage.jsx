import GameInfo from "../components/Game/GameInfo";
import GameMap from "../components/Game/GameMap";
import KillCodeQR from "../components/Game/KillCodeQR";
import KillCodeQRScanner from "../components/Game/KillCodeQRScanner";
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
  return (
    <>
      <Container fluid
      style={{
        backgroundImage: `url(${"https://e0.pxfuel.com/wallpapers/884/480/desktop-wallpaper-post-apocalypse-background-apocalypse-city.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100%",
        height: "100%"
      }}>
        <Row>
        <Col sm={12}md={6}lg={{order: 1}} xs={{order: 2}}style={{padding: "0px"}}>
            <GameInfo />
            <GameChat />
            <KillCodeQR />
            <KillCodeQRScanner />
          </Col>
          <Col sm={12}md={6}lg={{order: 2}} xs={{order: 1}}style={{padding: "0px"}}>
            <GameMap />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GameLobbyPage;
