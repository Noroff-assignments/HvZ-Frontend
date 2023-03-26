
import { useEffect, useState } from "react";
import { getMissions, getMission } from "../../api/MissionAPI";


export const useGetAllMissionsAPI = (mapId) => {
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
  }, []);
  return { missions};
};

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