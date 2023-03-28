const apiUrl = process.env.REACT_APP_API_URL;
const chatURL = apiUrl+"/game/";


export const postMessage = async (gameId,message, category, event) => {
  try {
    const response = await fetch(chatURL+gameId + "/chat/" +category, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        message: message,
        eventName: event
      })
    });
    if (!response.ok){
      throw new Error("Could create chat message!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};