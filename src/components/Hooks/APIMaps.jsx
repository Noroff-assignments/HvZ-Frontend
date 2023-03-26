
import { useEffect, useState } from "react";
import { getMaps } from "../../api/MapAPI";
import { getMap } from "../../api/MapAPI";


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

