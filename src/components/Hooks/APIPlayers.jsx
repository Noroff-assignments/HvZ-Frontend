import { useEffect, useState } from "react";
import { getPlayer } from "../../api/PlayerAPI";
import { getPlayers } from "../../api/PlayerAPI";

export const useGetAllPlayersAPI = (gameId) => {
    const [players, setPlayers] = useState(null);
  
    useEffect(() => {
      async function fetchPlayers() {
        const [error, response] = await getPlayers(gameId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setPlayers(response);
        }
      }
      fetchPlayers();
    }, []);
    return { players};
  };