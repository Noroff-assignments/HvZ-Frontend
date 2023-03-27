import LandingPageHeader from "../components/Landing/LandingPageHeader";
import KeyCloakLogin from "../components/KeyCloakLogin/KeyCloakLogin";
import GameList from "../components/GameList/GameList";
import { Container } from "react-bootstrap";

const LandingPage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${"https://e0.pxfuel.com/wallpapers/884/480/desktop-wallpaper-post-apocalypse-background-apocalypse-city.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100%",
          height: "100vh",
          backgroundColor: "rgb(255,255,255)",
          borderBottom: "2vh solid rgba(190, 157, 87)",
          
        }}
      >
        <KeyCloakLogin/>
        <LandingPageHeader />
        <GameList />
      </Container>
    </>
  );
};

export default LandingPage;
