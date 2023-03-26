import { useEffect, useState } from "react";
import { getSafeZone, getSafeZones } from "../../api/SafeZoneAPI";

export const useGetAllSafeZonesAPI = (mapId) => {
    const [safeZones, setSafeZones] = useState(null);
    useEffect(() => {
      async function fetchSafeZones() {
        const [error, response] = await getSafeZones(mapId);
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setSafeZones(response);
        }
      }
      fetchSafeZones();
    }, []);
    return { safeZones};
  };
  
  export const useGetSafeZoneAPI = (mapId, SafeZoneId) => {
      const [safeZone, setSafeZone] = useState(null);
      useEffect(() => {
        async function fetchSafeZone() {
          const [error, response] = await getSafeZone(mapId, SafeZoneId);
          if (error !== null) {
            alert(error);
          } else if (response !== undefined) {
            setSafeZone(response);
          }
        }
        fetchSafeZone();
      }, []);
      return { safeZone};
    };