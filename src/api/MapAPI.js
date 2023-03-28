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

export const deleteMap = async (id) => {
  try {
    const response = await fetch(mapURL + "/" + id, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const createMap = async (mapData) => {
  try {
    const response = await fetch(mapURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mapName: mapData.mapName,
        mapDescription: mapData.mapDescription,
        latitude: mapData.latitude,
        longitude: mapData.longitude,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    return { error: null, data };
  } catch (error) {
    return { error: error.message, data: null };
  }
};

export const updateMap = async (mapData) => {

}