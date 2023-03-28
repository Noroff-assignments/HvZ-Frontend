import React, { useState, useEffect } from 'react';
import AdminMapCreate from '../components/Admin/AdminMapCreate';
import AdminMapEdit from '../components/Admin/AdminMapEdit';
import AdminMap from '../components/Admin/AdminMap';
import AdminGameCreate from '../components/Admin/AdminMenuCreate';
import AdminMenu from '../components/Admin/AdminMenu';
import { getMaps } from '../api/MapAPI';
import keycloak from '../keycloak/keycloak';

const AdminPage = () => {
  // const [selectedMap, setSelectedMap] = useState(null);
  // const [maps, setMaps] = useState([]);
  // const [mapSaved, setMapSaved] = useState(false);

  // useEffect(() => {
  //   getMaps()
  //     .then(([error, data]) => {
  //       if (error) {
  //         throw new Error(error);
  //       }
  //       setMaps(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // Handle the error case here
  //     });
  // }, []);

  // const handleMapSelect = (map) => {
  //   setSelectedMap(map);
  //   setMapSaved(false);
  // };

  // const handleSave = () => {
  //   setMapSaved(true);
  //   setSelectedMap(null);
  // };

  return (
    <>
      { keycloak.tokenParsed &&
      <AdminMenu />
      // {/* <AdminGameCreate /> */}
      // {/* {!mapSaved && <AdminMapCreate onSave={handleSave} />}
      // {!mapSaved && <AdminMapEdit selectedMap={selectedMap} onMapSelect={handleMapSelect} maps={maps} />}
      // {!mapSaved && selectedMap && <AdminMap map={selectedMap} />} */}
      }
    </>
  );
};

export default AdminPage;