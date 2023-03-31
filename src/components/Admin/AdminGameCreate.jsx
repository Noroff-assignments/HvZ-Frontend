import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { usePostGameAPI } from '../Hooks/APIGames';
import './AdminGameCreate.css'; // import the custom CSS file
//AdminGameCreate is a React component for creating a game using form inputs. 
//It uses state to manage the input values and submits the data to an API endpoint.
const AdminGameCreate = ({ mapId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [beginTime, setBeginTime] = useState(new Date().toISOString().slice(0, 16)); // set default beginTime to current day and hour
  const oneDay = 86400000; // in milliseconds
  const [endTime, setEndTime] = useState(new Date(new Date().getTime() + oneDay).toISOString().slice(0, 16)); // set default endTime to one day later than beginTime
  const [adminID, setAdminID] = useState('');
  const [createGame] = usePostGameAPI();

  //creates a game object using the form data and calls the createGame API function to save the game to the server.
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
    <div className="text-center"> {/* wrap the form and the button in a div with the text-center class */}
      <Form onSubmit={handleSubmit} className="custom-form mx-auto">
        <Form.Group controlId="title">
          <Form.Label style={{ color:"White"}}>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label style={{ color:"White"}}>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="beginTime">
          <Form.Label style={{ color:"White"}}>Begin Time</Form.Label>
          <Form.Control type="datetime-local" value={beginTime} onChange={(e) => setBeginTime(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="endTime">
          <Form.Label style={{ color:"White"}}>End Time</Form.Label>
          <Form.Control type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </Form.Group>
        <Button className='createBtn' variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default AdminGameCreate;