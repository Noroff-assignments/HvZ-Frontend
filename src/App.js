// React
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styling
import "bootstrap/dist/css/bootstrap.min.css";
// App
import './App.css';
import GameLobbyPage from './views/GameLobbyPage';
import LandingPage from './views/LandingPage';
import GamePage from './views/GamePage';
import { ROLES } from './consts/roles';
import KeycloakRoute from './keycloak/KeycloakRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gameLobby" element= { 
            <KeycloakRoute role={ ROLES.User }> 
              <GameLobbyPage />
            </KeycloakRoute>} />
          <Route path="/currentGame" element={
            <KeycloakRoute role={ ROLES.User }>
              <GamePage/>
            </KeycloakRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;