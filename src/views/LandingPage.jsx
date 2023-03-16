import LandingPageHeader from "../components/Landing/LandingPageHeader";
import GameList from "../components/GameList/GameList";
import LoginForm from "../components/Login/LoginForm";
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
          height:"auto !important",
          height: "100%",
          height: "100vh"
        }}
      >
        <LandingPageHeader />
        <GameList />
      </Container>
    </>
  );
};

export default LandingPage;
