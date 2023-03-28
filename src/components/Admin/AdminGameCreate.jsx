import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { usePostGameAPI } from '../Hooks/APIGames';

const AdminGameCreate = ({ mapId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [beginTime, setBeginTime] = useState(new Date().toISOString().slice(0, 16)); // set default beginTime to current day and hour
  const oneDay = 86400000; // in milliseconds
  const [endTime, setEndTime] = useState(new Date(new Date().getTime() + oneDay).toISOString().slice(0, 16)); // set default endTime to one day later than beginTime
  const [adminID, setAdminID] = useState('');
  const [createGame, error, data] = usePostGameAPI();


  const handleSubmit = (event) => {
    event.preventDefault();
    const gameData = { title, description, beginTime, endTime, mapId, adminID };
    createGame(
      gameData.title,
      gameData.description,
      gameData.beginTime,
      gameData.endTime,
      gameData.mapId = mapId,
      gameData.adminID = "Admin"
    ).then(() => {
      // Reset form fields to their initial values
      setTitle('');
      setDescription('');
      setBeginTime(new Date().toISOString().slice(0, 16));
      setEndTime(new Date(new Date().getTime() + oneDay).toISOString().slice(0, 16));
      setAdminID('');
    });
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
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default AdminGameCreate;