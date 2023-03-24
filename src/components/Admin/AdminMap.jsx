import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const AdminMap = () => {
    const mapRef = useRef(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      // Initialize the Leaflet map
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
  
      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors'
      }).addTo(map);
  
      // Add a marker on click
      function onMapClick(e) {
        // Open the dropdown menu at the click location
        dropdownRef.current.style.display = 'block';
        dropdownRef.current.style.left = e.originalEvent.clientX + 'px';
        dropdownRef.current.style.top = e.originalEvent.clientY + 'px';
      }
      map.on('click', onMapClick);
  
      return () => {
        // Cleanup when the component unmounts
        map.off('click', onMapClick);
        map.remove();
      };
    }, []);
  
    return (
      <div style={{ position: 'relative' }}>
        <div ref={mapRef} style={{ height: '400px' }} />
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            display: 'none',
            zIndex: 1000,
          }}
        >
          <button
            style={{
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => {
              // Create mission here
            }}
          >
            Create mission here
          </button>
        </div>
      </div>
    );
};

export default AdminMap;