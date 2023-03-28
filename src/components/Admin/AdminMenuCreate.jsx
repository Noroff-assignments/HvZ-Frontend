import { useState } from "react";
import AdminGameCreate from "./AdminGameCreate";
import AdminMapCreate from "./AdminMapCreate";

const AdminMenuCreate = () => {
    const [mapId, setMapId] = useState(null);

    const handleMapIdUpdate = (newMapId) => {
        setMapId(newMapId);
        console.log("adminmenucreate: " + mapId);
    };

    return(
        <>
            Create Menu  
            <AdminMapCreate onSave={handleMapIdUpdate} />  
            <AdminGameCreate />
        </>
    );
};
export default AdminMenuCreate