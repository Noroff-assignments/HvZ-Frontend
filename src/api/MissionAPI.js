const apiUrl = process.env.REACT_APP_API_URL;
const mapURL = apiUrl+"/map";


  export const getMission = async (mapId, missionId) => {
    try {
      const response = await fetch(mapURL + "/" + mapId + "/mission/"+ missionId);
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };
  
  export const getMissions = async (mapId) => {
    try {
      const response = await fetch(mapURL + "/" + mapId + "/mission");
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };