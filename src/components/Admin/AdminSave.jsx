import React, { useState } from "react";
import { saveMap } from "../../api/MapAPI";

const AdminSave = ({
    mapName,
    mapDescription,
    latitude,
    longitude,
    safezones,
    missions,
    supplies
  }) => {
    const [saveStatus, setSaveStatus] = useState(null);
  
    const handleSave = async () => {
      setSaveStatus("Saving...");
      const [error, data] = await saveMap({
        mapName,
        mapDescription,
        latitude,
        longitude,
        safezones,
        missions,
        supplies
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
  export default AdminSave