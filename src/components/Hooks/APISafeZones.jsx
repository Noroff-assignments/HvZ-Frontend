import { useEffect, useState } from "react";
import { getSafeZone, getSafeZones } from "../../api/SafeZoneAPI";

/**
 * A custom React hook to fetch all safe zones for a given map.
 * @param {string} mapId - The ID of the map for which to fetch safe zones.
 * @returns {object} An object containing the fetched safe zones.
 */
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
  
/**
 * A custom React hook to fetch a specific safe zone for a given map and safe zone ID.
 * @param {string} mapId - The ID of the map for which to fetch the safe zone.
 * @param {string} SafeZoneId - The ID of the safe zone to fetch.
 * @returns {object} An object containing the fetched safe zone.
 */
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