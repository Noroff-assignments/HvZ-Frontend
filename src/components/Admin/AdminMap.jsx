import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { updateMap } from '../../api/MapAPI';
import AdminMapPopup from './AdminMapPopup';

const AdminMap = ( map ) => {
  const [mapData, setMapData] = useState(null);
  const mapRef = useRef(null);
  const [leafletMap, setLeafletMap] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);

  const handleSave = (mapName, mapDescription, radius) => {
    // Call the API function with the gathered information
    updateMap(mapName, mapDescription, radius);
  };

  useEffect(() => {
    const map = L.map(mapRef.current).setView([55.6761, 12.5683], 12);
    setLeafletMap(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    map.on('click', (e) => {
      setPopupPosition(e.latlng);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <div ref={mapRef} style={{ height: '100vh', width: '100vw' }} />
      {leafletMap && popupPosition && (
        <AdminMapPopup map={leafletMap} position={popupPosition} onSave={handleSave} />
      )}
    </>
  );
};

export default AdminMap;