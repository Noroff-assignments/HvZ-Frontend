import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useGetOneMapAPI } from '../Hooks/APIMaps';

const AdminMap = ({ game }) => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [mapData, setMapData] = useState(null);
  const mapRef = useRef(null);
  const [leafletMap, setLeafletMap] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);
  const [showGameInfo, setShowGameInfo] = useState(false);
  const { indexMap } = useGetOneMapAPI(game.mapId);

  useEffect(() => {
    if (indexMap) {
      setSelectedMap(indexMap);
    }
  }, [indexMap]);

  useEffect(() => {
    if (selectedMap) {
      const map = L.map(mapRef.current).setView([selectedMap.latitude, selectedMap.longitude], 12);
      setLeafletMap(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      // Add a marker for each safezone
      selectedMap.safezones.forEach((safezone) => {
        L.circle([safezone.latitude, safezone.longitude], {
          color: 'green',
          fillColor: 'green',
          fillOpacity: 0.5,
          radius: safezone.radius,
        }).addTo(map);
      });

      // Add a marker for each mission
      selectedMap.missions.forEach((mission) => {
        L.marker([mission.latitude, mission.longitude]).addTo(map);
      });

      // Add a marker for each supply
      selectedMap.supplies.forEach((supply) => {
        L.marker([supply.latitude, supply.longitude], { icon: supply.icon }).addTo(map);
      });

      // Add a red circle for the map location
      L.circle([selectedMap.latitude, selectedMap.longitude], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: selectedMap.radius,
      }).addTo(map);

      // Move the map view to the map location
      map.setView([selectedMap.latitude, selectedMap.longitude], 12);

      return () => {
        map.remove();
      };
    }
  }, [selectedMap]);

  const handleToggleGameInfo = () => {
    setShowGameInfo(!showGameInfo);
  };

  return (
    <>
      <div ref={mapRef} style={{ height: '100vh', width: '100vw' }} />
      <div className="game-info-toggle" onClick={handleToggleGameInfo}>
        {showGameInfo ? 'Hide Game Info' : 'Show Game Info'}
      </div>
      {showGameInfo && (
        <div className="game-info">
          <div>ID: {game.id}</div>
          <div>Title: {game.title}</div>
          <div>Description: {game.description}</div>
          <div>Begin Time: {game.beginTime}</div>
          <div>End Time: {game.endTime}</div>
          <div>Status: {game.status}</div>
          <div>Amount of Players: {game.amountPlayers}</div>
          <div>Kills: {JSON.stringify(game.kills)}</div>
          <div>Players: {JSON.stringify(game.players)}</div>
          <div>Squads: {JSON.stringify(game.squads)}</div>
          <div>Map ID: {game.mapId}</div>
        </div>
      )}
      <style>{`
        .game-info-toggle {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: rgba(255, 255, 255, 0.8);
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          z-index: 1000;
          }
          .game-info {
          position: absolute;
          top: 50px;
          right: 10px;
          background-color: rgba(255, 255, 255, 0.8);
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 5px;
          z-index: 1000;
        }`}</style>
      </>
  );
};
export default AdminMap;
