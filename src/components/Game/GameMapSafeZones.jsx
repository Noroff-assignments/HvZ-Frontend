import { useEffect, useState } from "react";
import styles from "./GameMap.module.css";
import { Circle, Pane } from "react-leaflet";
import { Marker } from "react-leaflet-marker";
import { useGetAllSafeZonesAPI } from "../Hooks/APISafeZones";

const GameSafeZones = (id) => {
  const { safeZones } = useGetAllSafeZonesAPI(id.id);

  //ensures missions are being updated every 1 minute
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(() => {
        setCount((count) => count + 1);
      });
    }, 60000);
    return () => clearTimeout(timeoutId);
  });

  return (
    <div>
      {safeZones &&
        safeZones.map((safeZone, index) => {
          return (
            <Pane zIndex={500} key={index}>
              <Marker position={[safeZone.latitude, safeZone.longitude]}>
                <h5 className={styles.safeZoneTitle}>{safeZone.title}</h5>
              </Marker>
              <Circle
                center={[safeZone.latitude, safeZone.longitude]}
                radius={safeZone.radius}
                pathOptions={{ color: "rgba(0, 102, 255, 0.8)" }}
              />
            </Pane>
          );
        })}
    </div>
  );
};

export default GameSafeZones;
