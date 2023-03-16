import LandingPageHeader from "../components/Landing/LandingPageHeader";
import GameList from "../components/GameList/GameList";
import LoginForm from "../components/Login/LoginForm";
import useEffect from "react";
import { useKeycloak } from "@react-keycloak/web";

const LandingPage = () => {

    return (
        <>
            <LandingPageHeader/>
            <GameList/>
        </>
    );
};

export default LandingPage;