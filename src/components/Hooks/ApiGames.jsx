import { getGames } from "../../api/GameAPI";
import { getGame } from "../../api/GameAPI";


export const getAllGamesAPI = (options = {}) => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    async function fetchGames() {
      const [error, response] = await getGames();
      if (error !== null) {
        alert(error);
        if (response !== null) {
          setGames(response);
        }
      }
    }
    fetchGames();
  }, [options]);
  return games;
};

export const getOneGameAPI = (options = {}, gameId) => {
  const [game, setGame] = useState([]);
  useEffect(() => {
    async function fetchGame(id) {
      const [error, response] = await getGame();
      if (error !== null) {
        alert(error);
        if (response !== null) {
          setGame(response);
        }
      }
    }
    fetchGame(gameId);
  }, [options]);
  return game;
};

