import React, { useState, useEffect } from 'react';
import AdminCreate from '../components/Admin/AdminCreate';
import AdminEdit from '../components/Admin/AdminEdit';
import AdminMap from '../components/Admin/AdminMap';
import { getMaps } from '../api/MapAPI';

const AdminPage = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [maps, setMaps] = useState([]);
  const [mapSaved, setMapSaved] = useState(false);

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
    setSelectedMap(map);
    setMapSaved(false);
  };

  const handleSave = () => {
    setMapSaved(true);
    setSelectedMap(null);
  };

  return (
    <>
      {!mapSaved && <AdminCreate onSave={handleSave} />}
      {!mapSaved && <AdminEdit selectedMap={selectedMap} onMapSelect={handleMapSelect} maps={maps} />}
      {!mapSaved && selectedMap && <AdminMap map={selectedMap} />}
    </>
  );
};

export default AdminPage;