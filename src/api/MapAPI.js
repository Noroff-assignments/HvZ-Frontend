const apiUrl = process.env.REACT_APP_API_URL;
const mapURL = apiUrl+"/map";

export const getMap = async (id) => {
    try {
      const response = await fetch(mapURL + "/" + id);
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };
  export const getMaps = async () => {
    try {
      const response = await fetch(mapURL);
      if (!response.ok) {
        throw new Error("Could not complete request");
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, []];
    }
  };