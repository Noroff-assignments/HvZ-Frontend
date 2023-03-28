const apiUrl = process.env.REACT_APP_API_URL;
const gameURL = apiUrl+"/game/";

export const getPlayers = async (gameId) => {
    try {
      const response = await fetch(gameURL + "/" + gameId + "/player");
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };
  
export const getPlayer = async (gameId, playerId) => {
    try {
      const response = await fetch(gameURL + "/" + gameId + "/player/" + playerId);
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };
  export const getPlayerByUserId = async (gameId, userId) => {
    try {
      const response = await fetch(gameURL + gameId + "/user/" + userId);
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };
  export const getPlayerIsZombie = async (gameId, playerId) => {
    try {
      const response = await fetch(gameURL + "/" + gameId + "/player/" + playerId + "/iszombie");
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };