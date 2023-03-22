import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import styles from "./GameMap.module.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Circle, Pane } from "react-leaflet";
import { GiPirateGrave } from "react-icons/gi";
import { Marker } from "react-leaflet-marker";
import L from "leaflet";
import useGeolocation from "../Hooks/useGeolocation";

const GameMap = () => {
  // GEOLOCATION:
  const { latitude, longitude, error } = useGeolocation();
  const [updatedLatitude, setUpdatedLatitude] = useState(0);
  const [updatedLongitude, setUpdatedLongitude] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const currentGame = location.state.currentGame;
  const currentMission = location.state.currentMission;
  const [clickedMission, setClickedMission] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);
  const mapCoordinatesX = currentGame.x;
  const mapCoordinatesY = currentGame.y;
  const missionLocations = [
    [
      "Free Cars (Keys not included)",
      "Lots of fancy cars free for the taking if you can get inside",
      mapCoordinatesX + 0.0008,
      mapCoordinatesY - 0.0002,
      40,
    ],
    [
      "Rene's Drug stash",
      "Intricate description of all Rene's expensive drugs from his stash ",
      mapCoordinatesX - 0.00096,
      mapCoordinatesY + 0.00083,
      10,
    ],
  ];
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
  const handleMissionClick = (mission) => {
    navigate("/currentGame", {
      state: { currentGame: currentGame, currentMission: mission },
    });
    setSelectedMission(mission);
  };

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

  useEffect(() => {
    if (clickedMission !== null) {
      setClickedMission(null);
      location.state = {
        currentGame: currentGame,
        mission: currentMission,
      };
    }
  }, [clickedMission, currentGame, currentMission, location, location.state]);

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


        {missionLocations.map((mission, index) => {
          const isSelectedMission =
            selectedMission && selectedMission[0] === mission[0];
          const circleColor = isSelectedMission
            ? "yellow"
            : "rgba(50, 197, 57, 0.8)";
          return (
            <Pane zIndex={500} key={index}>
              <Marker position={[mission[2], mission[3]]}>
                <h5
                  className={styles.missionTitle}
                  style={{
                    color:
                      selectedMission && selectedMission[0] === mission[0]
                        ? "orange"
                        : "limeGreen",
                  }}
                >
                  {mission[0]}
                </h5>
              </Marker>
              <Circle
                eventHandlers={{
                  click: () => handleMissionClick(mission),
                }}
                center={[mission[2], mission[3]]}
                radius={mission[4]}
                pathOptions={{ color: circleColor }}
              />
            </Pane>
          );
        })}
        {deathLocations.map((death, index) => {
          return <MyMarker key={index} position={death} />;
        })}
                { <Circle
          center={[updatedLatitude, updatedLongitude]}
          radius={10}
          pathOptions={{ color: "rgba(0, 0, 255, 0.8)" }}
        /> }
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </MapContainer>
    </Col>
  );
};

export default GameMap;
