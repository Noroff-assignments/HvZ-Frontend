const apiUrl = process.env.REACT_APP_API_URL;
const mapURL = apiUrl+"/map";


  export const getSafeZone = async (mapId, safeZoneId) => {
    try {
      const response = await fetch(mapURL + "/" + mapId + "/safezone/"+ safeZoneId);
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };
  
  export const getSafeZones = async (mapId) => {
    try {
      const response = await fetch(mapURL + "/" + mapId + "/safezone");
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };