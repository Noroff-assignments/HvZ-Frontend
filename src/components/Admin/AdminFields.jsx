import React from "react";

const AdminFields = () => {
    return (
        <div className="admin-fields">
            <div>
                <label htmlFor="post-game">POST A GAME</label>
                <input id="post-game" type="text" />
            </div>
            
            <div>
                <label htmlFor="create-map">CREATE MAP</label>
                <input id="create-map" type="text" />
            </div>
            
            <div>
                <label htmlFor="create-mission">CREATE MISSION</label>
                <input id="create-mission" type="text" />
            </div>
            
            <div>
                <label htmlFor="create-safezone">CREATE SAFEZONE</label>
                <input id="create-safezone" type="text" />
            </div>
            
            <div>
                <label htmlFor="create-supplies">CREATE SUPPLIES</label>
                <input id="create-supplies" type="text" />
            </div>
        </div>
    );
}
export default AdminFields