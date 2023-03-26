
import { useEffect, useState } from "react";
import { getGames } from "../../api/GameAPI";
import { getGame } from "../../api/GameAPI";


export const useGetAllGamesAPI = () => {
  const [games, setGames] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      const [error, response] = await getGames();
      
      if (error !== null) {
        alert(error);
      } else if (response !== undefined) {
        setGames(response);
        
      }

      setIsLoading(false);
    }
    
    fetchGames();
  }, []);
  return { games, isLoading };
};


export const useGetOneGameAPI = (gameId) => {
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchGame() {
        const [error, response] = await getGame(gameId);
  
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setGame(response);
        }
        setIsLoading(false);
      }
      fetchGame();
    }, [gameId]);
  
    return { game, isLoading };
  };

