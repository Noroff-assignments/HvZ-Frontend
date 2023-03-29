import React, { useEffect, useState, useRef, onCreate } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { createMap } from "../../api/MapAPI";
import useGeolocation from '../Hooks/useGeolocation';

const AdminMapPopup = ({ map, position, onSave }) => {
  
  const popupRef = useRef(null);
  const { latitude, longtitude, error } = useGeolocation;
  const [mapId, setMapId] = useState();

  useEffect(() => {
    let popup = null;
    if (map && position) {
      popup = L.popup({ closeButton: false })
        .setLatLng(position)
        .setContent(popupRef.current)
        .openOn(map);
    }
  
    return () => {
      if (popup) {
        map.closePopup(popup);
        popup.setContent('');
      }
    };
  }, [map, position]);

  const handleCreateClick = async () => {
    const mapNameInput = document.getElementById('mapName');
    const mapDescriptionInput = document.getElementById('mapDescription');
    const radiusInput = document.getElementById('radius');
  
    if (mapNameInput.value && mapDescriptionInput.value && radiusInput.value) {
      const mapData = {
        mapName: mapNameInput.value,
        mapDescription: mapDescriptionInput.value,
        latitude: position.lat,
        longitude: position.lng,
        radius: radiusInput.value
      };
  
      try {
        // Pass map details to API
        const response = await createMap(mapData);
        console.log("RESPONSE: " + response.data.id)
        setMapId(response.data.id);
  
        // Create a new circle object
        const circle = L.circle(position, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: radiusInput.value
        }).addTo(map);
  
        map.closePopup();
      } catch (error) {
        console.log(error);
      }
    }
  };

  onSave(mapId);
  
  return (
    <div ref={popupRef} style={{ display: 'inline-block' }}>
      <div style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => map.closePopup()}>
        X
      </div>
      <h3>Create Zone:</h3>
      <label htmlFor="mapName">Map Name:</label>
      <input type="text" id="mapName" />
      <br />
      <label htmlFor="mapDescription">Map Description:</label>
      <input type="text" id="mapDescription" />
      <br />
      <label htmlFor="radius">Radius:</label>
      <input type="number" id="radius" />
      <br />
      <button onClick={handleCreateClick}>Create</button>
    </div>
  );
};

export default AdminMapPopup;