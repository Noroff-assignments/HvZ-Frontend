import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useGeolocation from '../Hooks/useGeolocation';
import AdminMapPopup from './AdminMapPopup';

const AdminMap = (onSave) => {
  const [mapId, setMapId] = useState(null);
  const [mapCreated, setMapCreated] = useState(false);
  const [mapData, setMapData] = useState(null);
  const mapRef = useRef(null);
  const [leafletMap, setLeafletMap] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const { latitude, longitude, error } = useGeolocation();

  const handleMapCreated = (onSave) => {
    setMapCreated(true);
  };

  const handleMapIdUpdate = (newMapId) => {
    setMapId(newMapId);
    console.log("adminmap: " + mapId);
  };

  useEffect(() => {
    let defaultLocation = [55.6761, 12.5683];
    if (latitude !== 0 && longitude !== 0) {
      defaultLocation = [latitude, longitude];
    }
    const map = L.map(mapRef.current).setView(defaultLocation, 12);
    setLeafletMap(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    map.on('click', (e) => {
      setPopupPosition(e.latlng);
    });

    if (userLocation) {
      const circle = L.circle(userLocation, {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 75,
      }).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [latitude, longitude, userLocation]);

  useEffect(() => {
    if (latitude && longitude) {
      setUserLocation([latitude, longitude]);
    }
  }, [latitude, longitude]);

  return (
    <>
    <div>
      <div ref={mapRef} style={{ height: '50vh', width: '80vw' }} />
          {leafletMap && popupPosition && (
            <AdminMapPopup onSave={handleMapIdUpdate} map={leafletMap} position={popupPosition} />
          )}
    </div>
    </>
  );
};

export default AdminMap;