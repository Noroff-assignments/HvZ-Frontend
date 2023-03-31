import { useEffect, useState } from "react";
import { getMap } from "../../api/MapAPI";
import { getGame } from "../../api/GameAPI";
import { getPlayers } from "../../api/PlayerAPI";

/**
 * A custom React hook that fetches the game and players associated with a given game ID.
 * @param {string} gameId - The ID of the game to fetch.
 * @returns {Object} - An object containing the game and players fetched from the API.
 */
export const useGetOneGamePlayersAPI = (gameId) => {
  const [game, setGame] = useState(null);
  const [players, setPlayers] = useState(null);
  useEffect(() => {
    async function fetchGame() {
      const [error, response] = await getGame(gameId);

      if (error !== null) {
        alert(error);
      } else if (response !== undefined) {
        setGame(response);
      }
    }
    fetchGame();
  }, [gameId]);

  useEffect(() => {
    if (game !== null) {
      async function fetchPlayers() {
        const [error, response] = await getPlayers(gameId);

        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setPlayers(response);
        }
      }
      fetchPlayers();
    }
  }, [game]);

  return { game, players };
};

/**
 * A custom React hook that fetches the game and map associated with a given game ID.
 * @param {string} gameId - The ID of the game to fetch.
 * @returns {Object} - An object containing the game and map fetched from the API.
 */
export const useGetOneGameMapAPI = (gameId) => {
  const [game, setGame] = useState(null);
  const [indexMap, setMap] = useState(null);
  useEffect(() => {
    async function fetchGame() {
      const [error, response] = await getGame(gameId);

      if (error !== null) {
        alert(error);
      } else if (response !== undefined) {
        setGame(response);
      }
    }
    fetchGame();
  }, [gameId]);

  useEffect(() => {
    if (game !== null) {
      async function fetchMap() {
        const [error, response] = await getMap(game.mapId);

        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setMap(response);
        }
      }
      fetchMap();
    }
  }, [game]);

  return { game, indexMap };
};

/**
 * A custom React hook that fetches the game, map, and players associated with a given game ID.
 * @param {string} gameId - The ID of the game to fetch.
 * @returns {Object} - An object containing the game, map, and players fetched from the API.
 */
export const useGetOneGameMapPlayersAPI = (gameId) => {
  const [game, setGame] = useState(null);
  const [indexMap, setMap] = useState(null);
  const [players, setPlayers] = useState(null);
  useEffect(() => {
    async function fetchGame() {
      const [error, response] = await getGame(gameId);

      if (error !== null) {
        alert(error);
      } else if (response !== undefined) {
        setGame(response);
      }
    }
    fetchGame();
  }, [gameId]);

  useEffect(() => {
    if (game !== null) {
      async function fetchMap() {
        const [error, response] = await getMap(game.mapId);

        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setMap(response);
        }
      }
      fetchMap();
    }
  }, [game]);

  useEffect(() => {
    if (game !== null) {
      async function fetchPlayers() {
        const [error, response] = await getPlayers(gameId);

        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setPlayers(response);
        }
      }
      fetchPlayers();
    }
  }, [game]);

  return { game, indexMap, players };
};