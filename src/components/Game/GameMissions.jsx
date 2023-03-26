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
import { useGetAllMissionsAPI } from "../Hooks/APIMissions";

const GameMissions = (id) => {
    
  const { missions } = useGetAllMissionsAPI(id.id);
  const location = useLocation();
  const navigate = useNavigate();

  const currentMission = location.state.currentMission;
  const [clickedMission, setClickedMission] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);

  const handleMissionClick = (mission) => {
    navigate("/currentGame", {
      state: { currentGameId: id.id, currentMission: mission },
    });
    setSelectedMission(mission);
  };

  useEffect(() => {
    if (clickedMission !== null) {
      setClickedMission(null);
      location.state = {
        currentGameId: id.id,
        mission: currentMission,
      };
    }
  }, [clickedMission, currentMission, location, location.state]);

  return (
    <div>
          {missions.map((mission, index) => {
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
          </div>
  );
};

export default GameMissions;
