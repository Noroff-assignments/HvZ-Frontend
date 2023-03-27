import React, { useState } from "react";
import { updateMap } from "../../api/MapAPI";

const AdminMapUpdate = ({
    mapName,
    mapDescription,
    latitude,
    longitude,
    radius
  }) => {
    const [saveStatus, setSaveStatus] = useState(null);
  
    const handleSave = async () => {
      setSaveStatus("Saving...");
      const [error, data] = await updateMap({
        mapName,
        mapDescription,
        latitude,
        longitude,
        radius
      });
      if (error) {
        setSaveStatus("Save failed!");
        console.error(error);
      } else {
        setSaveStatus("Save successful!");
        console.log(data);
      }
    };
  
    return (
      <div>
        <button onClick={handleSave}>Save</button>
        {saveStatus && <span>{saveStatus}</span>}
      </div>
    );
  };
  export default AdminMapUpdate