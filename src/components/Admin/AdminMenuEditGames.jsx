import React, { useState } from 'react';
import { useGetAllGamesAPI } from '../Hooks/APIGames';
import AdminEdit from './AdminEdit';

// Displays a list of games as buttons, which can be clicked, when a game is clicked
// it is sent to the AdminEdit which handles the actual editing of the game and map
const AdminMenuEditGames = () => {
  const { games, isLoading } = useGetAllGamesAPI();
  const [visibleButtons, setVisibleButtons] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setVisibleButtons(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
        {visibleButtons && games && games.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {games.map((game) => (
              <button key={game.id} onClick={() => handleGameClick(game)}>
                <h3>{game.title}</h3>
              </button>
            ))}
          </div>
        ) : (
          <div>Editing game:</div>
        )}
        {selectedGame && <AdminEdit game={selectedGame} />}
      </div>
    </div>
  );
};

export default AdminMenuEditGames;