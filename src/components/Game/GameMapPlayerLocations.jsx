import { useEffect, useState } from "react";
import { Circle } from "react-leaflet";
import { useGetAllPlayersAPI } from "../Hooks/APIPlayers";
const PlayerLocations = (id) => {
  const { players } = useGetAllPlayersAPI(id.id);
  
  //ensures player locations are being updated every 5 second
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(() => {
        setCount((count) => count + 1);
      });
    }, 5000);
    return () => clearTimeout(timeoutId);
  });

  return (
    <div>
      {players &&
        players.map((player, index) => {
          if (player) {
           
            return (
              <Circle
                key={index}
                center={[player.latitude, player.longitude]}
                radius={2}
                pathOptions={{ color: "yellow" }}
              />
            );
          } else {
            return null;
          }
        })}
    </div>
  );
};
export default PlayerLocations;
