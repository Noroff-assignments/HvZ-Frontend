import { useEffect, useState } from "react";
import { Circle} from "react-leaflet";
import { useGetAllPlayersAPI } from "../Hooks/APIPlayer";
const PlayerLocations = (id) => {
    const { players } = useGetAllPlayersAPI(id.id);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount(count => count + 1);
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, []);
    
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