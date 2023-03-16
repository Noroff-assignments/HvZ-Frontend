import LandingPageHeader from "../components/Landing/LandingPageHeader";
import GameList from "../components/GameList/GameList";
import LoginForm from "../components/Login/LoginForm";

const LandingPage = () => {
    return (
        <>
            <LandingPageHeader/>
            <GameList/>
            <div style={{backgroundImage: `url(${"https://cdn.pixabay.com/photo/2015/05/26/16/26/zombie-784914_960_720.jpg"})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        height: '500px' }}>
        </div>
        </>
    );
};

export default LandingPage;