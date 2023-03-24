import { Col} from "react-bootstrap";
import styles from "./GameLobbyMap.module.css";
import { useLocation } from "react-router-dom";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Circle } from "react-leaflet";

const GameLobbyMap = () => {
  const location = useLocation();
  const currentGame = location.state.currentGame;
  
  const mapCoordinatesX = 1;
  const mapCoordinatesY = 2;
  
  
  const mapCoordinates = [mapCoordinatesX, mapCoordinatesY];
  const circleBounds = [
    [mapCoordinatesX - 0.0025, mapCoordinatesY - 0.0025],
    [mapCoordinatesX + 0.0025, mapCoordinatesY + 0.0025],
  ];

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
          pathOptions={{ color: "rgba(184, 48, 48, 0.8)" }}
        />
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Col>
  );
};

export default GameLobbyMap;
