import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./GameInfo.module.css";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Rectangle } from "react-leaflet";
import { IoReturnDownBack } from "react-icons/io5";
const GameInfo = () => {
  const location = useLocation();

  const currentGame = location.state.currentGame;
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };

  return (
    <Col lg={12} xs={12} className={styles.GameCol}>
      <Row>
        <Col lg={4} xs={4}>
          <Button
            type="submit"
            className={styles.ReturnBtn}
            onClick={handleReturn}
          >
            <IoReturnDownBack className={styles.ReturnIcon}/>
            
          </Button>
        </Col>
      </Row>
      <Row>
        <Col lg={12} xs={12}>
          <h1>{currentGame.gameTitle}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12} xs={12}>
          <p>Number of players: {currentGame.players}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={12} xs={12}>
          <p>End date: {currentGame.ends.toLocaleDateString()}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default GameInfo;
