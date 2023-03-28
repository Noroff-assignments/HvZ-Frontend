import React, { useState } from 'react';
import { useGetAllGamesAPI } from '../Hooks/APIGames';
import AdminMapEdit from './AdminMapEdit';

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
    <div>
      {visibleButtons && games && games.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {games.map((game) => (
            <button key={game.id} onClick={() => handleGameClick(game)}>
              <h3>{game.title}</h3>
            </button>
          ))}
        </div>
      ) : (
        <div>Editing game:</div>
      )}
      {selectedGame && <AdminMapEdit game={selectedGame} />}
    </div>
  );
};

export default AdminMenuEditGames;