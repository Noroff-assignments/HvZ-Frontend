import { useState, useEffect } from "react";
import { useGetAllMapsAPI } from "../Hooks/APIMaps";
import { FaTrash } from "react-icons/fa";
import { deleteMap } from "../../api/MapAPI";

const AdminMapDelete = () => {
  const { maps, isLoading } = useGetAllMapsAPI();
  const [selectedMaps, setSelectedMaps] = useState([]);
  const [displayedMaps, setDisplayedMaps] = useState([]);

  useEffect(() => {
    if (maps) {
      setDisplayedMaps(maps);
    }
  }, [maps]);

  const handleMapClick = (map) => {
    if (selectedMaps.includes(map)) {
      deleteMap(map.id)
        .then(() => {
          const updatedMaps = displayedMaps.filter((m) => m.id !== map.id);
          setDisplayedMaps(updatedMaps);
        })
        .catch((error) => console.log(error));
    } else {
      setSelectedMaps([...selectedMaps, map]);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>List of Maps:</h1>
      <div style={{ display: "flex", flexDirection: "column", width: "60vw" }}>
        {displayedMaps.map((map) => (
          <div key={map.id} style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: selectedMaps.includes(map) ? "red" : "",
                width: "100%",
                height: "3rem",
              }}
              onClick={() => handleMapClick(map)}
            >
              {selectedMaps.includes(map) ? <FaTrash style={{ margin: "auto" }} /> : map.mapName}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminMapDelete;