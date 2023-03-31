
import { useEffect, useState } from "react";
import { getMissions, getMission } from "../../api/MissionAPI";

/**
 * A custom React hook to fetch all missions for a given map.
 * @param {string} mapId - The ID of the map for which to fetch the missions.
 * @returns {object} An object containing the fetched missions.
 */
export const useGetAllMissionsAPI = (mapId) => {
  console.log("HOOK: " + mapId);
  const [missions, setMissions] = useState(null);

  useEffect(() => {
    async function fetchMissions() {
      const [error, response] = await getMissions(mapId);
      if (error !== null) {
        alert(error);
      } else if (response !== undefined) {
        setMissions(response);
      }
    }
    fetchMissions();
  }, [mapId]); // Add mapId as a dependency

  return { missions };
};

/**
 * A custom React hook to fetch a specific mission for a given map.
 * @param {string} mapId - The ID of the map for which to fetch the mission.
 * @param {string} missionId - The ID of the mission to fetch.
 * @returns {object} An object containing the fetched mission.
 */
export const useGetMissionAPI = (mapId, missionId) => {
    const [missions, setMission] = useState(null);
    useEffect(() => {
      async function fetchMission() {
        const [error, response] = await getMission(mapId, missionId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setMission(response);
        }
      }
      fetchMission();
    }, []);
    return { missions};
  };