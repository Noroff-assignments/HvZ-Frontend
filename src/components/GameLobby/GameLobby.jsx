import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./GameLobby.module.css";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Rectangle } from "react-leaflet";
const GameLobby = () => {
  const location = useLocation();
  //const mapCoordinatesX = 55.642779272205274;
  //const mapCoordinatesY = 12.271510716977884;
  const mapCoordinatesX = 55.642779272205274;
  const mapCoordinatesY = 12.271510716977884;

  const mapCoordinates = [mapCoordinatesX, mapCoordinatesY];

  const innerBounds = [
    [mapCoordinatesX + 0.003, mapCoordinatesY + 0.005],
    [mapCoordinatesX - 0.003, mapCoordinatesY - 0.005],
  ];
  const outerBounds = [
    [mapCoordinatesX + 0.003, mapCoordinatesY + 0.005],
    [mapCoordinatesX - 0.003, mapCoordinatesY - 0.005],
  ];
  const redColor = { color: "red" };
  const whiteColor = { color: "white" };
  const currentGame = location.state.currentGame;
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };

  function MapPlaceholder() {
    return (
      <p>
        Map of London.{" "}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }
  function SetBoundsRectangles() {
    const [bounds, setBounds] = useState(outerBounds);
    const map = useMap();

    const innerHandlers = useMemo(
      () => ({
        click() {
          setBounds(innerBounds);
          map.fitBounds(innerBounds);
        },
      }),
      [map]
    );
    const outerHandlers = useMemo(
      () => ({
        click() {
          setBounds(outerBounds);
          map.fitBounds(outerBounds);
        },
      }),
      [map]
    );

    return (
      <>
        <Rectangle
          bounds={outerBounds}
          eventHandlers={outerHandlers}
          pathOptions={bounds === outerBounds ? redColor : whiteColor}
        />
        <Rectangle
          bounds={innerBounds}
          eventHandlers={innerHandlers}
          pathOptions={bounds === innerBounds ? redColor : whiteColor}
        />
      </>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={6} xs={12} className={styles.GameCol}>
          <Row>
            <Col lg={4} xs={4}>
              <Button
                type="submit"
                className={styles.ReturnBtn}
                onClick={handleReturn}
              >
                return
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
        <Col lg={6} xs={12} className={styles.mapCol}>
          <MapContainer
            bounds={outerBounds}
            maxBounds={outerBounds}
            minZoom={16}
            maxZoom={18}
            className={styles.mapContainer}
            center={mapCoordinates}
            zoom={18}
            scrollWheelZoom={false}
            placeholder={<MapPlaceholder />}
          >
            <TileLayer
              className={styles.mapImg}
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SetBoundsRectangles />
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default GameLobby;
