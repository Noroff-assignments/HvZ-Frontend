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

export const saveMap = async (mapData) => {
  try {
    const method = mapData.id ? "PUT" : "POST"; // determine whether to create or update the map
    const response = await fetch(mapURL + (mapData.id ? `/${mapData.id}` : ""), {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mapName: mapData.mapName,
        mapDescription: mapData.mapDescription,
        latitude: mapData.latitude,
        longitude: mapData.longitude,
        safezones: mapData.safezones,
        missions: mapData.missions,
        supplies: mapData.supplies,
      }),
    });
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, null];
  }
};