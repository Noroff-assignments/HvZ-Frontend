import { deleteMap } from "../../api/MapAPI";

const AdminMapDelete = ({ map, onDelete }) => {
  console.log(`AdminMapDelete for map ${map.id}`);
  const handleDelete = () => {
    console.log(`Deleting map ${map.id}`);
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

export default AdminMapDelete;