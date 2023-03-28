import { useEffect, useState } from "react";
import { getPlayer } from "../../api/PlayerAPI";
import { getPlayers } from "../../api/PlayerAPI";
import { getPlayerByUserId } from "../../api/PlayerAPI";
import { getPlayerIsZombie } from "../../api/PlayerAPI";

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
  