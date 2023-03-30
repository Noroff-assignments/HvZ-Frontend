import AdminEditMap from './AdminEditMap';
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { patchGameEndTime, patchGameTitle, patchGameDescription, patchGameBeginTime } from '../../api/GameAPI';

const AdminEdit = ({ game }) => {
  const [gameName, setGameName] = useState('');
  const [gameNameEdited, setGameNameEdited] = useState(false);
  const [gameDescription, setGameDescription] = useState('');
  const [gameDescriptionEdited, setGameDescriptionEdited] = useState(false);
  const [beginTime, setBeginTime] = useState('');
  const [beginTimeEdited, setBeginTimeEdited] = useState(false);
  const [endTime, setEndTime] = useState('');
  const [endTimeEdited, setEndTimeEdited] = useState(false);
  const [mapId, setMapId] = useState('');
  const [mapIdEdited, setMapIdEdited] = useState(false);

  useEffect(() => {
    if (game) {
      setGameName(game.title || '');
      setGameDescription(game.description || '');
      setBeginTime(game.beginTime.replace("T", " ") || '');
      setEndTime(game.endTime.replace("T", " ") || '');
      setMapId(game.mapId || '');
      console.log("ID:" + mapId)
    }
  }, [game]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    switch (e.target.id) {
      case 'gameName':
        setGameName(value);
        setGameNameEdited(true);
        break;
      case 'gameDescription':
        setGameDescription(value);
        setGameDescriptionEdited(true);
        break;
      case 'beginTime':
        setBeginTime(value);
        setBeginTimeEdited(true);
        break;
      case 'endTime':
        setEndTime(value);
        setEndTimeEdited(true);
        break;
      case 'mapId':
        setMapId(value);
        setMapIdEdited(true);
        break;
      default:
        break;
    }
  };

  const handleSave = async () => {
    setGameNameEdited(false);
    setGameDescriptionEdited(false);
    setBeginTimeEdited(false);
    setEndTimeEdited(false);
    setMapIdEdited(false);
    
    patchGameTitle(game.id, gameName)
    patchGameDescription(game.id, gameDescription)
    patchGameBeginTime(game.id, beginTime.replace(" ", "T"))
    patchGameEndTime(game.id, endTime.replace(" ", "T"))

  };

  return (
    <div>
      <div><h2 style={{ color:"White"}}>GAME ID: {game.id}</h2></div>
      <div>
        <label htmlFor="gameName" style={{ color:"White"}}>Game Name:</label>
        <input
          type="text"
          id="gameName"
          value={gameName}
          onChange={handleInputChange}
        />
        {gameNameEdited && <button onClick={handleSave}>✓</button>}
      </div>
  
      <div>
        <label htmlFor="gameDescription" style={{ color:"White"}}>Game Description:</label>
        <textarea
          id="gameDescription"
          value={gameDescription}
          onChange={handleInputChange}
        />
        {gameDescriptionEdited && <button onClick={handleSave}>✓</button>}
      </div>
  
      <div>
        <label htmlFor="beginTime" style={{ color:"White"}}>Begin Time:</label>
        <input
          type="datetime-local"
          id="beginTime"
          value={beginTime}
          onChange={handleInputChange}
        />
        {beginTimeEdited && <button onClick={handleSave}>✓</button>}
      </div>
  
      <div>
        <label htmlFor="endTime" style={{ color:"White"}}>End Time:</label>
        <input
          type="datetime-local"
          id="endTime"
          value={endTime}
          onChange={handleInputChange}
        />
        {endTimeEdited && <button onClick={handleSave}>✓</button>}
      </div>
  
      <div>
        <label htmlFor="mapId" style={{ color:"White"}}>Map Id:</label>
        <input
          type="text"
          id="mapId"
          value={mapId}
          onChange={handleInputChange}
        />
        {mapIdEdited && <button onClick={handleSave}>✓</button>}
      </div>

      <div>
        {mapId && <AdminEditMap mapId={mapId} />}
      </div>
    </div>
  );
};

export default AdminEdit;