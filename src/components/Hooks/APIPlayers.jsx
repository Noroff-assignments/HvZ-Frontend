import { useEffect, useState } from "react";
import { getPlayer } from "../../api/PlayerAPI";
import { getPlayers } from "../../api/PlayerAPI";
import { getPlayerByUserId } from "../../api/PlayerAPI";
import { getPlayerIsZombie } from "../../api/PlayerAPI";
import { getBiteCode } from "../../api/PlayerAPI";

/**
 * A custom React hook to fetch all players for a given game.
 * @param {string} gameId - The ID of the game for which to fetch players.
 * @returns {object} An object containing the fetched players.
 */
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

/**
 * A custom React hook to fetch a specific player for a given game.
 * @param {string} gameId - The ID of the game in which the player exists.
 * @param {string} playerId - The ID of the player to fetch.
 * @returns {object} An object containing the fetched player.
 */
  export const useGetPlayerAPI = (gameId,playerId) => {
    const [player, setPlayer] = useState(null);
  
    useEffect(() => {
      async function fetchPlayer() {
        const [error, response] = await getPlayer(gameId,playerId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setPlayer(response);
        }
      }
      fetchPlayer();
    }, []);
    return { player};
  };

 /**
 * A custom React hook to fetch a player by user ID.
 * @param {string} userId - The ID of the user associated with the player to fetch.
 * @returns {object} An object containing the fetched player.
 */
  export const useGetPlayerByUserId = (userId) => {
    const [player, setPlayerId] = useState(null);
  
    useEffect(() => {
      async function fetchPlayer() {
        const [error, response] = await getPlayerByUserId(userId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setPlayerId(response);
        }
      }
      fetchPlayer();
    }, []);
    return { player};
  };

/**
 * A custom React hook to fetch the bite code for a player in a game.
 * @param {string} gameId - The ID of the game in which the player exists.
 * @param {string} playerId - The ID of the player for which to fetch the bite code.
 * @returns {object} An object containing the fetched bite code.
 */
  export const useGetBiteCode = (gameId,playerId) => {
    const [biteCode, setBiteCode] = useState(null);
  
    useEffect(() => {
      async function fetchBiteCode() {
        const [error, response] = await getBiteCode(gameId,playerId);
        if (error !== null) {
          //alert(error);
        } else if (response !== undefined) {
          setBiteCode(response);
        }
      }
      fetchBiteCode();
    }, []);
    return { biteCode};
  };

/**
 * A custom React hook to fetch whether a given player is a zombie in a game.
 * @param {string} gameId - The ID of the game in which the player exists.
 * @param {string} playerId - The ID of the player for which to fetch the zombie status.
 * @returns {object} An object containing whether the player is a zombie.
 */
  export const useGetPlayerIsZombieAPI = (gameId, playerId) => {
    const [isZombie, setZombie] = useState(null);
  
    useEffect(() => {
      async function fetchPlayerIsZombie() {
        const [error, response] = await getPlayerIsZombie(gameId, playerId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setZombie(response.isZombie);
        }
      }
      fetchPlayerIsZombie();
    }, [gameId, playerId]);
  
    useEffect(() => {
      console.log("APIZOMBIE");
      console.log(isZombie);
    }, [isZombie]);
  
    return { isZombie};
  };

/**
 * A custom React hook to fetch the player and whether they are a zombie by user ID.
 * @param {string} gameId - The ID of the game in which the player exists.
 * @param {string} userId - The ID of the user associated with the player to fetch.
 * @returns {object} An object containing the fetched player and whether they are a zombie.
 */
  export const useGetUserIsZombie = (gameId, userId) => {
    const [player, setPlayer] = useState(null);
    const [isZombie, setZombie] = useState(null);
  
    useEffect(() => {
      async function fetchUser() {
        const [error, response] = await getPlayerByUserId(gameId, userId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setPlayer(response);
        }
      }
      fetchUser();
    }, []);
  
    useEffect(() => {
      async function fetchPlayerIsZombie() {
        if (player !== null && player.id !== null) {
          const [error, response] = await getPlayerIsZombie(gameId, player.id);
          if (error !== null) {
            alert(error);
          } else if (response !== undefined) {
            setZombie(response.isZombie);
          }
        }
      }
      fetchPlayerIsZombie();
    }, [gameId, player]);
  
    return { isZombie, player };
  };
  