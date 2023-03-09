import { Container, Col, Row } from "react-bootstrap";
import styles from "./GameLobby.module.css";
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
const GameLobby = () => {
  const location = useLocation();
  console.log(location);
  const currentGame = location.state.currentGame;
  useEffect(() => {
    console.log(currentGame); // make sure game is not null
  }, [currentGame]);
  return (
    <Container fluid>
      <h1>{currentGame.gameTitle}</h1>
      <p>Number of players: {currentGame.players}</p>
      <p>End date: {currentGame.ends.toLocaleDateString()}</p>
    </Container>
  );
};

export default GameLobby;
