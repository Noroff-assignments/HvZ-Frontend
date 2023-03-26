import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import AdminSave from './AdminSave';
import { saveMap } from '../../api/MapAPI';

const AdminMap = ({ existingMap }) => {
  const mapRef = useRef(null);
  const [gameName, setGameName] = useState(existingMap?.mapName || '');
  const [description, setDescription] = useState(existingMap?.mapDescription || '');
  const [latLng, setLatLng] = useState([existingMap?.latitude || 55.6761, existingMap?.longitude || 12.5683]); // Copenhagen, Denmark
  const [zoom, setZoom] = useState(existingMap?.zoom || 12);
  const [radius, setRadius] = useState(existingMap?.radius || '');
  const [mapData, setMapData] = useState(existingMap);

  useEffect(() => {
    // Initialize map
    const map = L.map(mapRef.current, {
      center: latLng,
      zoom: zoom,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      ],
    });

    // Save the initial zoom level
    setZoom(map.getZoom());

    // Add marker and menu
    map.on('click', function(e) {
      const latlng = e.latlng;
      const popup = L.popup()
        .setLatLng(latlng)
        .setContent(`
          <form>
            <label for="game-name">Game Name:</label>
            <input type="text" id="game-name" name="game-name" required>
            <br>
            <label for="radius">Radius:</label>
            <input type="text" id="game-radius" name="game-radius" required>
            <br>
            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
            <br>
            <button type="submit">Save</button>
          </form>
          <p>Coordinates: ${latlng.lat.toFixed(5)}:${latlng.lng.toFixed(5)}</p>
        `)
        .openOn(map);

      // Save game name, description, radius and latlng
      const form = popup.getElement().querySelector('form');
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        setGameName(form.elements['game-name'].value);
        setDescription(form.elements['description'].value);
        setRadius(form.elements['game-radius'].value);
        setLatLng([latlng.lat, latlng.lng]); // store the new latlng
        setZoom(map.getZoom()); // store the new zoom level
        popup.remove();
        setMapData({
          mapName: form.elements['game-name'].value,
          mapDescription: form.elements['description'].value,
          latitude: latlng.lat,
          longitude: latlng.lng,
          safezones: [],
          missions: [],
          supplies: [],
        });
      });
    });

    // Display game name, radius and description in top right of map
    const infoControl = L.control();
    infoControl.onAdd = function(map) {
      const div = L.DomUtil.create('div', 'info');
      div.innerHTML = `
        <p><strong>Game Name:</strong> ${gameName}</p
        <p><strong>Radius:</strong> ${radius} meters</p>
        <p><strong>Description:</strong> ${description}</p>
        `;
        return div;
      };
      infoControl.addTo(map);
      
      // Add circle marker
      const circle = L.circle(latLng, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: radius
      }).addTo(map);
      
      // Cleanup
      return () => {
        map.remove();
      };
    }, [gameName, description, latLng, radius, zoom]);

      const handleSave = async () => {
      const { mapName, mapDescription, latitude, longitude, safezones, missions, supplies } = mapData;

      await saveMap({ mapName, mapDescription, latitude, longitude, safezones, missions, supplies });
    };

    return (
      <>
        <div ref={mapRef} style={{ height: '100vh', width: '100vw' }} />
        {mapData && <AdminSave {...mapData} onSave={handleSave} />}
      </>
    );
  };
    
  export default AdminMap;