import React, { useState } from "react";
import AdminMap from "./AdminMap";
import AdminSave from "./AdminSave";

const AdminCreate = () => {
  const [showMap, setShowMap] = useState(false);
  const [mapCreated, setMapCreated] = useState(false);
  const [mapData, setMapData] = useState({
    // initial map data
    mapName: "",
    mapDescription: "",
    latitude: 55.64278,
    longitude: 12.271445,
    safezones: [],
    missions: [],
    supplies: []
  });

  const handleClick = () => {
    setShowMap(true);
    setMapCreated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMapData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <h2>Create New Map</h2>
      {mapCreated && <AdminSave mapData={mapData} />}
      {showMap ? (
        <AdminMap mapData={mapData} handleChange={handleChange} />
      ) : (
        <button onClick={handleClick}>Create Map</button>
      )}
    </>
  );
};

export default AdminCreate;