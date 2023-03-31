import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";
import styles from "./GameMap.module.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Circle } from "react-leaflet";
import PlayerLocations from "./GameMapPlayerLocations";
import DeathLocations from "./GameMapKills";
import GameMissions from "./GameMapMissions";
import GameSafeZones from "./GameMapSafeZones";
import useGeolocation from "../Hooks/useGeolocation";
import { useGetOneGameMapAPI } from "../Hooks/APIGameMapPlayer";


// the component for the current games leaflet map  
const GameMap = () => {
  const { latitude, longitude, error } = useGeolocation();
  const [updatedLatitude, setUpdatedLatitude] = useState(0);
  const [updatedLongitude, setUpdatedLongitude] = useState(0);
  const location = useLocation();
  const currentGameId = location.state.currentGameId;
  const { game, indexMap } = useGetOneGameMapAPI(currentGameId);
  const mapCoordinatesX = indexMap ? indexMap.latitude : 0;
  const mapCoordinatesY = indexMap ? indexMap.longitude : 0;
  const mapCoordinates = [mapCoordinatesX, mapCoordinatesY];
  const circleBounds = [
    [mapCoordinatesX - 0.0025, mapCoordinatesY - 0.0025],
    [mapCoordinatesX + 0.0025, mapCoordinatesY + 0.0025],
  ];

  //Set the geoLocation of the users player
  useEffect(() => {
    if (latitude && longitude) {
      const interval = setInterval(() => {
        setUpdatedLatitude(latitude);
        setUpdatedLongitude(longitude);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [latitude, longitude]);

  return (
    <Col lg={12} xs={12} className={styles.mapCol}>
      {indexMap !== null && (
        <MapContainer
          bounds={circleBounds}
          maxBounds={circleBounds}
          minZoom={1}
          maxZoom={24}
          className={styles.mapContainer}
          center={mapCoordinates}
          zoom={16}
          scrollWheelZoom={false}
        >
          <Circle
            center={mapCoordinates}
            radius={150}
            pathOptions={{ color: "rgba(184, 48, 48, 0.8)" }}
          />
          {game && <PlayerLocations id={game.id} />}
          {game && <GameMissions id={indexMap.id} gameId={currentGameId} />}
          {game && <GameSafeZones id={indexMap.id} />}
          {game && <DeathLocations id={game.id} />}
          {
            //Your location
            <Circle
              center={[updatedLatitude, updatedLongitude]}
              radius={5}
              pathOptions={{ color: "pink" }}
            />
          }
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      )}
    </Col>
  );
};

export default GameMap;
