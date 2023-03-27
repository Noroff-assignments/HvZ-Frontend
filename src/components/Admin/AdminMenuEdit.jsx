import AdminMenuEditGames from "./AdminMenuEditGames";
import { useGetAllGamesAPI } from "../Hooks/APIGames";

const AdminMenuEdit = () => {
  const { games, isLoading } = useGetAllGamesAPI();

  return (
    <div style={{ display: "flex" }}>
      Edit Games
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <AdminMenuEditGames games={games} />
        )}
      </div>
    </div>
  );
};

export default AdminMenuEdit;