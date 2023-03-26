const apiUrl = process.env.REACT_APP_API_URL;
const gameURL = apiUrl+"/game/";

export const getKills = async (gameId) => {
    try {
      const response = await fetch(gameURL + "/" + gameId + "/kill");
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };
  
export const getKill = async (gameId, killId) => {
    try {
      const response = await fetch(gameURL + "/" + gameId + "/kill/" + killId);
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };