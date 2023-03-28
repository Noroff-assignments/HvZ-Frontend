import React, { useState } from "react";

const AdminMapSave = ({ mapData, onSave }) => {
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    // Make the API call to save the map
    // Replace with your own implementation of the API call
    const savedData = { ...mapData }; // Make a copy of the map data
    // Update the savedData with any modifications needed
    onSave(savedData);
    setSaving(false);
  };

  return (
    <>
      <button onClick={handleSave} disabled={saving}>
        {saving ? "Saving..." : "Save Map"}
      </button>
    </>
  );
};
export default AdminMapSave