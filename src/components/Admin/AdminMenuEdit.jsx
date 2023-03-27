import AdminMenuEditMaps from "./AdminMenuEditMaps";
import AdminMenuEditGames from "./AdminMenuEditGames";

const AdminMenuEdit = () => {
  return (
      <div style={{ display: "flex" }}>
        Edit Games & Maps
      <div>
        <AdminMenuEditGames />
      </div>
      <div>
        <AdminMenuEditMaps />
      </div>
    </div>
  );
};

export default AdminMenuEdit;