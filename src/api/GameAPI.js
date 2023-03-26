const apiUrl = process.env.REACT_APP_API_URL;
const gameURL = apiUrl+"/game";


export const postGame = async (title, description, beginTime, endTime, mapId, adminId) => {
  try {
    const response = await fetch(gameURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        beginTime: beginTime,
        endTime: endTime,
        mapId: mapId,
        adminId: adminId
      })
    });
    if (!response.ok){
      throw new Error("Could not create game!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};


export const getGames = async () => {
  try {
    const response = await fetch(gameURL);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const getGame = async (id) => {
  try {
    const response = await fetch(gameURL + "/" + id);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const putGame = async (id,title, description, beginTime, endTime, mapId, adminId) => {
  try {
    const response = await fetch(gameURL + "/" + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        beginTime: beginTime,
        endTime: endTime,
        mapId: mapId,
        adminId: adminId
      })
    });
    if (!response.ok){
      throw new Error("Could not update game!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};

export const patchGameTitle = async (id,title) => {
  try {
    const response = await fetch(gameURL + "/" + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title
      })
    });
    if (!response.ok){
      throw new Error("Could not update title of game!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};

export const patchGameDescription = async (id,description) => {
  try {
    const response = await fetch(gameURL + "/" + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        description: description
      })
    });
    if (!response.ok){
      throw new Error("Could not update description of game!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};

export const patchGamePeriod = async (id, beginTime, endTime) => {
  try {
    const response = await fetch(gameURL + "/" + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        beginTime: beginTime,
        endTime: endTime
      })
    });
    if (!response.ok){
      throw new Error("Could not update time period of game!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};

export const patchGameMap = async (id, mapId) => {
  try {
    const response = await fetch(gameURL + "/" + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        mapId: mapId
      })
    });
    if (!response.ok){
      throw new Error("Could not update map of game!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};

export const patchGameAdmin = async (id, adminId) => {
  try {
    const response = await fetch(gameURL + "/" + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        adminId: adminId
      })
    });
    if (!response.ok){
      throw new Error("Could not update admin of game!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};


export const deleteGame = async (id) => {
  try {
    const response = await fetch(gameURL + "/" + id, {
      method: 'DELETE'
    });
    if (!response.ok){
      throw new Error("Could not delete game!");
    }
    const data = await response.json();
    return [null,data];
  }
  catch (error){
    return [error.message, []];
  }
};

