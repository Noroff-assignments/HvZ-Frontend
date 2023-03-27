import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateGameAPI } from '../Hooks/APIGames';

const AdminGameCreate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [beginTime, setBeginTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [mapId, setMapId] = useState('');

  const { createNewGame } = useCreateGameAPI();

  const handleSubmit = (event) => {
    event.preventDefault();
    const gameData = { title, description, beginTime, endTime, mapId };
    createNewGame(gameData);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="beginTime">
        <Form.Label>Begin Time</Form.Label>
        <Form.Control type="datetime-local" value={beginTime} onChange={(e) => setBeginTime(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="endTime">
        <Form.Label>End Time</Form.Label>
        <Form.Control type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="mapId">
        <Form.Label>Map ID</Form.Label>
        <Form.Control type="text" value={mapId} onChange={(e) => setMapId(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};
export default AdminGameCreate