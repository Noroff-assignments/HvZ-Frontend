import { useGetAllMapsAPI } from "../Hooks/APIMaps";

const AdminMenuEditMaps = () => {
  const { maps, isLoading } = useGetAllMapsAPI();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {maps && maps.length > 0 ? (
        <ul>
          {maps.map((map) => (
            <li key={map.id}>
              <button>
                <h3>{map.mapName}</h3>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No maps found</div>
      )}
    </div>
  );
};

export default AdminMenuEditMaps;