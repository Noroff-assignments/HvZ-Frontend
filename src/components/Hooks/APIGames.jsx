
import { useEffect, useState } from "react";
import { getGames } from "../../api/GameAPI";
import { getGame } from "../../api/GameAPI";
import { postGame } from "../../api/GameAPI";
import { deleteGame } from "../../api/GameAPI";

/**
 * Custom hook that retrieves all games from the server.
 * @returns {Object} Object containing the games array and a boolean isLoading flag.
 */
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

/**
 * Custom hook that retrieves a single game from the server based on its ID.
 * @param {string} gameId - The ID of the game to retrieve.
 * @returns {Object} Object containing the game object and a boolean isLoading flag.
 */
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

/**
 * Custom hook that creates a new game on the server.
 * @returns {Array} Array containing a function to create a new game, an error object, and a data array.
 */
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

/**
 * Custom hook that deletes a game from the server based on its ID.
 * @param {string} id - The ID of the game to delete.
 * @returns {Promise<void>} A promise that resolves once the game is deleted or rejects with an error.
 */
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