import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import LoginPage from './views/LoginPage';
import GameLobbyPage from './views/GameLobbyPage';
import GamePage from './views/GamePage';
import LandingPage from './views/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KeycloakRoute from './keycloak/KeycloakRoute';
import RegisterPage from './views/RegisterPage';
import keycloakInit from './keycloak/Keycloak';

function App() {
  const [kc, setKc] = React.useState(null);

  React.useEffect(() => {
    keycloakInit()
      .then((keycloak) => {
        setKc(keycloak);
      })
      .catch((error) => {
        console.log("Failed to initialize Keycloak: ", error);
      });
  }, []);

  if (!kc) {
    return <p>Loading...</p>;
  }

  return (
    <ReactKeycloakProvider authClient={kc}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/gameLobby" element={<KeycloakRoute><GameLobbyPage /></KeycloakRoute>} />
            <Route path="/currentGame" element={<KeycloakRoute><GamePage/></KeycloakRoute>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;