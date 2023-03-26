import { useState, useEffect } from "react";
import { getMaps } from "../../api/MapAPI";
import AdminMap from "./AdminMap";
import AdminDelete from "./AdminDelete";

const AdminEdit = ({ selectedMap, onMapSelect }) => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    getMaps()
      .then(([error, data]) => {
        if (error) {
          throw new Error(error);
        }
        setMaps(data);
      })
      .catch((error) => {
        console.log(error);
        // Handle the error case here
      });
  }, []);

  const handleMapSelect = (map) => {
    onMapSelect(map);
  };

  const handleDeleteMap = (id) => {
    setMaps((prevMaps) => prevMaps.filter((map) => map.id !== id));
    onMapSelect(null);
  };

  return (
    <>
      <h2>Edit Existing Maps</h2>
      {maps.map((map) => (
        map.mapName && (
          <div key={map.id}>
            <button
              id={`map-${map.id}`}
              onClick={() => handleMapSelect(map)}
              disabled={selectedMap && selectedMap.id === map.id}
              aria-label={`Select ${map.mapName}`}
            >
              {map.mapName} - {map.mapDescription} ({map.id})
            </button>
            {selectedMap && selectedMap.id === map.id && (
              <AdminDelete map={map} onDelete={handleDeleteMap} />
            )}
          </div>
        )
      ))}
      {selectedMap && <AdminMap existingMap={selectedMap} />}
    </>
  );
};

export default AdminEdit;