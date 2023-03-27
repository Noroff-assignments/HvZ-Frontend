import React, { useEffect, useRef, onCreate } from 'react';
import L from 'leaflet';

const AdminMapPopup = ({ map, position, onSave, resetChildren }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (map && position) {
      const popup = L.popup({ closeButton: false })
        .setLatLng(position)
        .setContent(popupRef.current)
        .openOn(map);

      return () => {
        map.closePopup(popup);
      };
    }
  }, [map, position]);

  const handleCreateClick = () => {
    const mapNameInput = document.getElementById('mapName');
    const mapDescriptionInput = document.getElementById('mapDescription');
    const radiusInput = document.getElementById('radius');
  
    if (mapNameInput.value && mapDescriptionInput.value && radiusInput.value) {
      onSave(mapNameInput.value, mapDescriptionInput.value, radiusInput.value);
      map.closePopup();
    }
  };
  
  return (
    <div ref={popupRef} style={{ display: 'inline-block' }}>
      <div style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => map.closePopup()}>
        X
      </div>
      <h3>Add a new point</h3>
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