import React, { useState } from "react";
import AdminMap from "./AdminMap";
import AdminMapSave from "./AdminMapSave";
import { useCreateMapAPI } from "../Hooks/APIMaps";

const AdminMapCreate = () => {
  const [showMap, setShowMap] = useState(false);
  const [mapCreated, setMapCreated] = useState(false);
  const [mapData, setMapData] = useState({
    mapName: "Default Map",
    mapDescription: "This is a default map.",
    latitude: 0,
    longitude: 0,
    radius: 10000
  });
  const { createNewMap, isLoading, error, data } = useCreateMapAPI();

  const handleSave = async (savedData) => {
    setMapData(savedData);
    await createNewMap(savedData);
    setShowMap(true);
    setMapCreated(true);
  };

  return (
    <>
      <h2>Create New Map</h2>
      {isLoading && <p>Creating map...</p>}
      {error && <p>Error creating map: {error.message}</p>}
      {data && <p>Map created with ID: {data.id}</p>}
      {showMap ? (
        <>
          <AdminMapSave mapData={mapData} onSave={handleSave} />
          <AdminMap mapData={mapData} />
        </>
      ) : (
        <>
          <button onClick={() => setShowMap(true)}>Create Map</button>
        </>
      )}
    </>
  );
};
export default AdminMapCreate;