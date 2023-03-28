const apiUrl = process.env.REACT_APP_API_URL;
const chatURL = apiUrl+"/game/";


export const postMessage = async (gameId,message, category) => {
  try {
    const response = await fetch(chatURL+gameId + "/chat/" +category, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        message: message,
      })
    });
    if (!response.ok){
      throw new Error("Could not create chat message!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};