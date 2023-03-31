import React, { useState } from "react";
import AdminMap from "./AdminMap";

// Intended for the configurations of default maps, essentially
// a pass-through component at the moment.
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

  return (
    <>
          <AdminMap />
    </>
  );
};
export default AdminMapCreate;