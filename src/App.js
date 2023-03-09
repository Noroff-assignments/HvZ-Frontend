import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './views/LoginPage';
import GameLobbyPage from './views/GameLobbyPage';
import LandingPage from './views/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/gameLobby" element={<GameLobbyPage />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
