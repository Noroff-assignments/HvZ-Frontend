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
import AdminPage from './views/AdminPage';
import { ROLES } from './consts/roles';
import KeycloakRoute from './keycloak/KeycloakRoute';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak/keycloak';
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
    <ReactKeycloakProvider authClient={keycloak}>
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
          <Route path="/admin" element={
            <KeycloakRoute role={ ROLES.Admin }>
              <AdminPage />
            </KeycloakRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;