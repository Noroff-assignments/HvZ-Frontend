
import { useEffect, useState } from "react";
import { getGames } from "../../api/GameAPI";
import { getGame } from "../../api/GameAPI";
import { putGame } from "../../api/GameAPI";
import { postGame } from "../../api/GameAPI";
import { deleteGame } from "../../api/GameAPI";


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

export const usePostGameAPI = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const createGame = async (title, description, beginTime, endTime, mapId, adminId) => {
    const [err, res] = await postGame(title, description, beginTime, endTime, mapId, adminId);
    if (err) {
      setError(err);
    } else {
      setData(res);
    }
  };

  return [createGame, error, data];
};

export const useDeleteGame = async (id) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  try {
    const [err, response] = await deleteGame(id);
    if (err) {
      throw new Error(err.message);
    }
    setData(response);
  } catch (err) {
    setError(err.message);
  }
};