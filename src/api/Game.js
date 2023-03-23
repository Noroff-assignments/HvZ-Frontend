
import { createHeaders } from "./Index";

const apiUrl = process.env.REACT_APP_API_URL



export const getGames = async () => {
    try {
    const response = await fetch(apiUrl+"/game");
        if (!response.ok) {
          throw new Error("Could not complete request");
        }
        const data = await response.json();
        return [null, data];
      } catch (error) {
        return [error.message, []];
      }
}