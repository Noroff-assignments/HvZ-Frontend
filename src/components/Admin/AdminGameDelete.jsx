import { useState, useEffect } from "react";
import { useGetAllGamesAPI } from "../Hooks/APIGames";
import { FaTrash } from "react-icons/fa";
import { deleteGame } from "../../api/GameAPI";

const AdminGameDelete = () => {
  const { games, isLoading } = useGetAllGamesAPI();
  const [selectedGames, setSelectedGames] = useState([]);
  const [displayedGames, setDisplayedGames] = useState([]); // <-- Initialize with an empty array

  useEffect(() => {
    if (games) {
      setDisplayedGames(games); // <-- Update only when games is not null
    }
  }, [games]);

  const handleGameClick = (game) => {
    if (selectedGames.includes(game)) {
      deleteGame(game.id)
        .then(() => {
          const updatedGames = displayedGames.filter((g) => g.id !== game.id);
          setDisplayedGames(updatedGames);
        })
        .catch((error) => console.log(error));
    } else {
      setSelectedGames([...selectedGames, game]);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 style={{ color:"White"}}>List of Games:</h1>
      <div style={{ display: "flex", flexDirection: "column", width: "60vw" }}>
        {displayedGames.map((game) => (
          <div key={game.id} style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: selectedGames.includes(game) ? "red" : "",
                width: "100%",
              }}
              onClick={() => handleGameClick(game)}
            >
              {selectedGames.includes(game) ? <FaTrash style={{ margin: "auto" }} /> : game.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminGameDelete;