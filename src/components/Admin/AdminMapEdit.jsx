import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { patchGameEndTime, patchGameTitle, patchGameDescription, patchGameBeginTime } from '../../api/GameAPI';

const AdminMapEdit = ({ game }) => {
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
      <div>GAME ID: {game.id}</div>
      <label htmlFor="gameName">Game Name:</label>
      <input
        type="text"
        id="gameName"
        value={gameName}
        onChange={handleInputChange}
      />
      {gameNameEdited && <button onClick={handleSave}>✓</button>}

      <label htmlFor="gameDescription">Game Description:</label>
      <textarea
        id="gameDescription"
        value={gameDescription}
        onChange={handleInputChange}
      />
      {gameDescriptionEdited && <button onClick={handleSave}>✓</button>}

      <label htmlFor="beginTime">Begin Time:</label>
      <input
        type="datetime-local"
        id="beginTime"
        value={beginTime}
        onChange={handleInputChange}
      />
      {beginTimeEdited && <button onClick={handleSave}>✓</button>}

      <label htmlFor="endTime">End Time:</label>
      <input
        type="datetime-local"
        id="endTime"
        value={endTime}
        onChange={handleInputChange}
      />
      {endTimeEdited && <button onClick={handleSave}>✓</button>}
      
      <label htmlFor="mapId">Map Id:</label>
      <input
        type="text"
        id="mapId"
        value={mapId}
        onChange={handleInputChange}
      />
      {mapIdEdited && <button onClick={handleSave}>✓</button>}
    </div>
    );
};

export default AdminMapEdit;