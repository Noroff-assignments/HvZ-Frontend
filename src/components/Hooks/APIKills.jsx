import { useEffect, useState } from "react";
import { getKill,getKills } from "../../api/KillAPI";

/**
 * Custom React hook that fetches all the kills for a given game using the KillAPI.
 * @param {string} gameId - The ID of the game to fetch the kills for.
 * @returns {object} - Returns an object containing an array of kills or null if the request is still being made.
 */
export const useGetAllKillsAPI = (gameId) => {
    const [kills, setKills] = useState(null);
  
    useEffect(() => {
      async function fetchKills() {
        const [error, response] = await getKills(gameId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
            setKills(response);
        }
      }
      fetchKills();
    }, []);
    return { kills};
  };

  /**
 * Custom React hook that fetches a specific kill for a given game and kill ID using the KillAPI.
 * @param {string} gameId - The ID of the game to fetch the kill for.
 * @param {string} killId - The ID of the kill to fetch.
 * @returns {object} - Returns an object containing the kill or null if the request is still being made.
 */
  export const useGetKillAPI = (gameId, killId) => {
    const [kill, setKill] = useState(null);
  
    useEffect(() => {
      async function fetchKill() {
        const [error, response] = await getKill(gameId, killId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
            setKill(response);
        }
      }
      fetchKill();
    }, []);
    return { kill};
  };