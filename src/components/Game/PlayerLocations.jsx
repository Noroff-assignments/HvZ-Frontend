import { Circle} from "react-leaflet";
import { useGetOneGamePlayersAPI } from "../Hooks/APIGameMapPlayer";
const PlayerLocations = (id) => {
    const { game, indexMap, players } = useGetOneGameMapPlayersAPI(currentGameId);
  return (
    <div>
    {players &&
        players.map((player, index) => {
          if (player) {
            return (
              <Circle
                key={index}
                center={[player.latitude, player.longitude]}
                radius={20}
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