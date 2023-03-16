import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./GameMap.module.css";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Circle } from "react-leaflet";
import { GiPirateGrave } from "react-icons/gi";
import { MarkerLayer, Marker } from "react-leaflet-marker";
import L from 'leaflet';
const GameMap = () => {
  const location = useLocation();
  const mapCoordinatesX = 55.642779272205274;
  const mapCoordinatesY = 12.271510716977884;
  const deathLocations = [
    [mapCoordinatesX + 0.0003, mapCoordinatesY + 0.0003],
    [mapCoordinatesX - 0.0004, mapCoordinatesY + 0.00083],
    [mapCoordinatesX + 0.000664, mapCoordinatesY - 0.00032],
    [mapCoordinatesX - 0.00096, mapCoordinatesY + 0.00023],
    [mapCoordinatesX + 0.0003, mapCoordinatesY + 0.0003],
    [mapCoordinatesX + 0.0015, mapCoordinatesY + 0.00383],
    [mapCoordinatesX + 0.000664, mapCoordinatesY - 0.00032],
    [mapCoordinatesX - 0.00036, mapCoordinatesY + 0.00423],
  ];
  //const mapCoordinatesX = 55.642779272205274;
  //const mapCoordinatesY = 12.271510716977884;
  

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

  function MapPlaceholder() {
    return (
      <p>
        Map. <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }
  function SetBoundsCircle() {
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
        <Circle
          center={mapCoordinates}
          radius={150} // change this to adjust the size of the circle
          eventHandlers={outerHandlers}
          pathOptions={bounds === outerBounds ? redColor : whiteColor}
        />
        <Circle
          center={mapCoordinates}
          radius={50} // change this to adjust the size of the circle
          eventHandlers={innerHandlers}
          pathOptions={bounds === innerBounds ? redColor : whiteColor}
        />
      </>
    );
  }

  return (
    <Col lg={12} xs={12} className={styles.mapCol}>
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
        <MarkerLayer>
  {deathLocations.map((death, index) => {
    return (
      <Marker key={index} position={death}>
        <GiPirateGrave className={styles.graveStone} />
      </Marker>
    );
  })}
</MarkerLayer>

        <TileLayer
          className={styles.mapImg}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetBoundsCircle />
      </MapContainer>
    </Col>
  );
};

export default GameMap;
