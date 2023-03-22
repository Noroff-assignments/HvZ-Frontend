import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './views/LoginPage';
import GameLobbyPage from './views/GameLobbyPage';
import GamePage from './views/GamePage';
import LandingPage from './views/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Pusher from './utils/Pusher';

function App() {

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    // Use the pusher instance imported from pusher.js
    var channel = Pusher.subscribe('HvZApp');
    channel.bind('rene', function(data) {
      alert(JSON.stringify(data));
    });
  }, []);
  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/gameLobby" element={<GameLobbyPage />} />
          <Route path="/currentGame" element={<GamePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
