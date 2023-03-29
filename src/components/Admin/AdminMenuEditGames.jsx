import React, { useState } from 'react';
import { useGetAllGamesAPI } from '../Hooks/APIGames';
import AdminEdit from './AdminEdit';

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