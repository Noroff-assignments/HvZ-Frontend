import { Container, Row, Col } from "react-bootstrap";
import GameLobbyInfo from "../components/GameLobby/GameLobbyInfo";
import GameLobbyMap from "../components/GameLobby/GameLobbyMap";

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
              height: "100%"
            }}
            >
        <Row style={{padding: "0px"}}>
          <Col lg={6} xs={12}style={{padding: "0px"}}>
          <GameLobbyInfo/>
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