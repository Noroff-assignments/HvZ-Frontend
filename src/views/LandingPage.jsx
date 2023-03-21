import LandingPageHeader from "../components/Landing/LandingPageHeader";
import LoginSignUpButtons from "../components/LoginSignUpButton/LoginSignUpButtons";
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
          height: "100vh"
        }}
      >
        <LoginSignUpButtons/>
        <LandingPageHeader />
        <GameList />
      </Container>
    </>
  );
};

export default LandingPage;
