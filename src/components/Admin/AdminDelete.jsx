import { deleteMap } from "../../api/MapAPI";

const AdminDelete = ({ map, onDelete }) => {
  const handleDelete = () => {
    deleteMap(map.id)
      .then(([error, data]) => {
        if (error) {
          throw new Error(error);
        }
        onDelete(map.id);
      })
      .catch((error) => {
        console.log(error);
        // Handle the error case here
      });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default AdminDelete;