import GameInfo from "../components/Game/GameInfo";
import GameMap from "../components/Game/GameMap";
import BiteCode from "../components/Game/BiteCode";
import GameChat from "../components/Game/GameChat";
import { Container, Row, Col } from "react-bootstrap";
import keycloak from "../keycloak/keycloak";

const GameLobbyPage = () => {


  return (
    <>
      <Container fluid
      style={{
        backgroundImage: `url(${"https://e0.pxfuel.com/wallpapers/884/480/desktop-wallpaper-post-apocalypse-background-apocalypse-city.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100%",
        height: "100%",
        backgroundColor: "rgb(255,255,255)",
        borderBottom: "2vh solid rgba(190, 157, 87)",
      }}>
        <Row>
        <Col sm={12}md={6}lg={{order: 1}} xs={{order: 2}}style={{padding: "0px"}}>
            <GameInfo />
            <GameChat />
            {keycloak.tokenParsed && <BiteCode/>}
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
