import { useGetOneMapAPI } from "../Hooks/APIMaps";

const AdminEditMap = (mapId) => {

    const [map, setMap] = useGetOneMapAPI(mapId);

    return (
        <>
            
        </>
    )
}
export default AdminEditMap