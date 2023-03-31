import { useEffect, useState } from "react";
import styles from "./GameMap.module.css";
import { useMap } from "react-leaflet/hooks";
import { Pane } from "react-leaflet";
import { GiPirateGrave } from "react-icons/gi";
import { Marker } from "react-leaflet-marker";
import L from "leaflet";
import { useGetAllKillsAPI } from "../Hooks/APIKills";

// renders the death locations on the leaflet map 
const DeathLocations = (id) => {
  const { kills } = useGetAllKillsAPI(id.id);
  //ensures death locations are being updated every 30 seconds
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(() => {
        setCount((count) => count + 1);
      });
    }, 30000);
    return () => clearTimeout(timeoutId);
  });

  const MyMarker = ({ position, deadStory  }) => {
    const map = useMap();
    const [markerLatLng, setMarkerLatLng] = useState(null);

    useEffect(() => {
      if (map && position) {
        const markerPosition = map.project(position);
        const markerPixelCoords = L.point(markerPosition.x, markerPosition.y);
        const markerLatLng = map.unproject(markerPixelCoords);
        setMarkerLatLng(markerLatLng);
      }
    }, [map, position]);

    if (!markerLatLng) {
      return null;
    }

    return (
        <Pane zIndex={500}>
          <Marker position={markerLatLng}>
            <GiPirateGrave className={styles.graveStone} />
            <p className={styles.deadStoryP}>{deadStory}</p>
          </Marker>
        </Pane>
      );
    };

  return (
    <div>
    {kills &&
      kills.map((kill, index) => {
        return (
          <MyMarker
            key={index}
            position={[kill.latitude, kill.longitude]}
            deadStory={kill.deadStory}
          />
        );
      })}
  </div>
  );
};

export default DeathLocations;
