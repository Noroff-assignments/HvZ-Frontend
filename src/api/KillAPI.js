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
  export const postKill = async (killCode, gameId, timeDead, deadStory, latitude, longitude, killerId ) => {
    try {
      const response = await fetch(gameURL + gameId + "/kill",{ 
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          biteCode: killCode,
          timeDead: timeDead,
          deadStory: deadStory,
          latitude: latitude,
          longitude: longitude,
          killerId: killerId
        })
      });
      if (!response.ok){
        throw new Error("Could not add Kill");
      }
      const data = await response.json();
      return [null,data];
    }
    catch (error){
      return [error.message, []];
    }
  };