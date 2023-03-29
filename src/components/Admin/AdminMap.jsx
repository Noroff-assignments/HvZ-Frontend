import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useGeolocation from '../Hooks/useGeolocation';
import AdminMapPopup from './AdminMapPopup';
import AdminGameCreate from './AdminGameCreate';

const AdminMap = (onSave) => {
  const [showMap, setShowMap] = useState(true);
  const [mapId, setMapId] = useState("");
  const mapRef = useRef(null);
  const [leafletMap, setLeafletMap] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const { latitude, longitude, error } = useGeolocation();

  const handleMapIdUpdate = (newMapId) => {
    console.log("adminmap" + newMapId)
    setMapId(newMapId);
  };

  useEffect(() => {
    let defaultLocation = [55.6761, 12.5683]; //Copenhagen
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
      {!showMap && <div>Map created!</div>}
      {showMap && (
        <div>
          <div ref={mapRef} style={{ height: '50vh', width: '80vw' }} />
          {leafletMap && popupPosition && (
            <AdminMapPopup onSave={handleMapIdUpdate} map={leafletMap} position={popupPosition} onMapCreated={() => setShowMap(false)} />
          )}
        </div>
      )}
      <div>
        <AdminGameCreate mapId={mapId} onSave={onSave} />
      </div>
    </>
  );
};

export default AdminMap;