import React, { useState } from "react";
import AdminMap from "./AdminMap";


const AdminMapCreate = (onSave) => {
  const [mapId, setMapId] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [mapCreated, setMapCreated] = useState(false);
  const [mapData, setMapData] = useState({
    mapName: "Default Map",
    mapDescription: "This is a default map.",
    latitude: 0,
    longitude: 0,
    radius: 0
  });

  const handleMapIdUpdate = (newMapId) => {
    setMapId(newMapId);
    console.log("adminmapcreate: " + mapId);
  };

  return (
    <>

          <AdminMap onSave={handleMapIdUpdate}  />

    </>
  );
};
export default AdminMapCreate;