import { useEffect, useState } from "react";
import { getMaps } from "../../api/MapAPI";
import { getMap } from "../../api/MapAPI";
import { deleteMap } from "../../api/MapAPI";
import { createMap } from "../../api/MapAPI";

/**
 * A hook that returns all maps and loading status.
 * @returns {Object} An object containing maps and loading status.
 */
export const useGetAllMapsAPI = () => {
  const [maps, setMaps] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMaps() {
      const [error, response] = await getMaps();
      
      if (error !== null) {
        alert(error);
      } else if (response !== undefined) {
        setMaps(response);
      }

      setIsLoading(false);
    }
    
    fetchMaps();
  }, []);
  return { maps, isLoading };
};

/**
 * A hook that returns a specific map and loading status.
 * @param {number} mapId - The ID of the map to fetch.
 * @returns {Object} An object containing the specific map and loading status.
 */
export const useGetOneMapAPI = (mapId) => {
  const [indexMap, setMap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMap() {
      const [error, response] = await getMap(mapId);

      if (error !== null) {
        alert(error);
      } else if (response !== undefined) {
        setMap(response);
      }
      setIsLoading(false);
    }
    fetchMap();
  }, [mapId]);

  return { indexMap, isLoading };
};

/**
 * A hook that returns a function to delete a map.
 * @param {number} mapId - The ID of the map to delete.
 * @param {Function} onDelete - A callback function to be called after the map is deleted.
 * @returns {Function} A function to delete the map.
 */
export const useDeleteMapAPI = (mapId, onDelete) => {
  const handleDelete = async () => {
    try {
      await deleteMap(mapId);
      onDelete(mapId);
    } catch (error) {
      console.log(error);
      // Handle the error case here
    }
  };

  return handleDelete;
}

/**
 * A hook that returns a function to create a new map and its loading and error status.
 * @returns {Object} An object containing a function to create a new map and its loading and error status.
 */
export const useCreateMapAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const createNewMap = async (mapData) => {
    setIsLoading(true);
    const { error, data } = await createMap(mapData);
    setIsLoading(false);

    if (error) {
      setError(error);
    } else {
      setData(data);
    }
  };

  return { createNewMap, isLoading, error, data };
};