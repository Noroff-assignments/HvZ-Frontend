// AdminMenuEditGames component
import React, { useState } from 'react';
import { useGetAllGamesAPI } from '../Hooks/APIGames';
import AdminMapEdit from './AdminMapEdit';

const AdminMenuEditGames = () => {
  const { games, isLoading } = useGetAllGamesAPI();
  const [selectedGame, setSelectedGame] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  return (
    <div>
      {games && games.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <button onClick={() => handleGameClick(game)}>
                <h3>{game.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No games found</div>
      )}
      {selectedGame && <AdminMapEdit game={selectedGame} />}
    </div>
  );
};

export default AdminMenuEditGames;