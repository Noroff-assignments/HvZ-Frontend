import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";
import styles from "./GameMap.module.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Circle, Pane } from "react-leaflet";
import { GiPirateGrave } from "react-icons/gi";
import { Marker } from "react-leaflet-marker";
import L from "leaflet";
import PlayerLocations from './PlayerLocations';
import GameMissions from './GameMissions'
import useGeolocation from "../Hooks/useGeolocation";
import { useGetOneGameMapAPI } from "../Hooks/APIGameMapPlayer";
const GameMap = () => {
  // GEOLOCATION:
  const { latitude, longitude, error } = useGeolocation();
  const [updatedLatitude, setUpdatedLatitude] = useState(0);
  const [updatedLongitude, setUpdatedLongitude] = useState(0);

  const location = useLocation();
  const currentGameId = location.state.currentGameId;
  const { game, indexMap} = useGetOneGameMapAPI(currentGameId);

  useEffect(() => {
    if (indexMap !== null) {
      // REMOVE ME BEFORE RELEASE
    }
  }, [game, indexMap]);
  
  const mapCoordinatesX = indexMap ? indexMap.latitude : 0;
  const mapCoordinatesY = indexMap ? indexMap.longitude : 0;
  
  const deathLocations = [
    [mapCoordinatesX + 0.0003, mapCoordinatesY + 0.0003],
    [mapCoordinatesX - 0.0004, mapCoordinatesY + 0.00083],
    [mapCoordinatesX + 0.000664, mapCoordinatesY - 0.00032],
    [mapCoordinatesX - 0.00096, mapCoordinatesY + 0.00023],
    [mapCoordinatesX + 0.0007, mapCoordinatesY + 0.0001],
    [mapCoordinatesX + 0.0015, mapCoordinatesY + 0.00383],
    [mapCoordinatesX + 0.0003, mapCoordinatesY - 0.00032],
    [mapCoordinatesX - 0.00036, mapCoordinatesY + 0.00423],
  ];
  const mapCoordinates = [mapCoordinatesX, mapCoordinatesY];
  const circleBounds = [
    [mapCoordinatesX - 0.0025, mapCoordinatesY - 0.0025],
    [mapCoordinatesX + 0.0025, mapCoordinatesY + 0.0025],
  ];

  //GEOLOCATION:
  useEffect(() => {
    if (latitude && longitude) {
      const interval = setInterval(() => {
        setUpdatedLatitude(latitude);
        setUpdatedLongitude(longitude);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [latitude, longitude]);

  const MyMarker = ({ position }) => {
    const map = useMap();
    const markerPosition = map.project(position);
    const markerPixelCoords = L.point(markerPosition.x, markerPosition.y);
    const markerLatLng = map.unproject(markerPixelCoords);
    return (
      <Pane zIndex={500}>
        <Marker position={markerLatLng}>
          <GiPirateGrave className={styles.graveStone} />
        </Marker>
      </Pane>
    );
  };

  return (
    <Col lg={12} xs={12} className={styles.mapCol}>
      {indexMap !== null && (
        <MapContainer
          bounds={circleBounds}
          maxBounds={circleBounds}
          minZoom={8}
          maxZoom={24}
          className={styles.mapContainer}
          center={mapCoordinates}
          zoom={1}
          scrollWheelZoom={false}
        >
          <Circle
            center={mapCoordinates}
            radius={150}
            pathOptions={{ color: "rgba(184, 48, 48, 0.8)" }}
          />
          {game && <PlayerLocations id={game.id} />}
          {game && <GameMissions id={indexMap.id} />}
          {deathLocations.map((death, index) => {
            return <MyMarker key={index} position={death} />;
          })}
          {
            <Circle
              center={[updatedLatitude, updatedLongitude]}
              radius={10}
              pathOptions={{ color: "rgba(0, 0, 255, 0.8)" }}
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
