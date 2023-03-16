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
import { LatLng } from "leaflet";

const GameMap = () => {
  const location = useLocation();
  const mapCoordinatesX = 55.642779272205274;
  const mapCoordinatesY = 12.271510716977884;
  const deathLocations = [
    [mapCoordinatesX + 0.0003, mapCoordinatesY + 0.0003],
    [mapCoordinatesX + 0.000664, mapCoordinatesY - 0.00032],
    [mapCoordinatesX - 0.00096, mapCoordinatesY + 0.00023],
    [mapCoordinatesX + 0.0015, mapCoordinatesY + 0.00383],
    [mapCoordinatesX + 0.000824, mapCoordinatesY - 0.00032],
    [mapCoordinatesX - 0.00036, mapCoordinatesY + 0.00423],
  ];

  const mapCoordinates = [mapCoordinatesX, mapCoordinatesY];
  const circleBounds = [
    [mapCoordinatesX, mapCoordinatesY],
    [mapCoordinatesX, mapCoordinatesY],
  ];

  const map = useMap();

  // Calculate an offset based on the current zoom level
  const zoom = map.getZoom();
  const offset = zoom >= 17 ? 0.00015 : 0.00005;

  return (
    <Col lg={12} xs={12} className={styles.mapCol}>
      <MapContainer
        bounds={circleBounds}
        maxBounds={circleBounds}
        minZoom={16}
        maxZoom={18}
        className={styles.mapContainer}
        center={mapCoordinates}
        zoom={18}
        scrollWheelZoom={false}
      >
        <Circle
          center={mapCoordinates}
          radius={150}
          pathOptions={{ color: "red" }}
        />
        <MarkerLayer>
          {deathLocations.map((death, index) => {
            const offsetDeath = [death[0] + offset, death[1] - offset];
            return (
              <Marker key={index} position={offsetDeath}>
                <GiPirateGrave className={styles.graveStone} />
              </Marker>
            );
          })}
        </MarkerLayer>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Col>
  );
};

export default GameMap;