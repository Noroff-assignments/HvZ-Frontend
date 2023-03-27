import React, { useState } from "react";
import AdminMenuCreate from "./AdminMenuCreate";
import AdminMenuEdit from "./AdminMenuEdit";
import AdminMenuDelete from "./AdminMenuDelete";

const AdminMenu = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const renderComponent = () => {
    switch (activeButton) {
      case "create":
        return <AdminMenuCreate key={refreshKey} />;
      case "change":
        return <AdminMenuEdit key={refreshKey} />;
      case "delete":
        return <AdminMenuDelete key={refreshKey} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => handleClick("create")}>Create</button>
        <button onClick={() => handleClick("change")}>Change</button>
        <button onClick={() => handleClick("delete")}>Delete</button>
      </div>
      {activeButton === null}
      <div>{renderComponent()}</div>
    </>
  );
};

export default AdminMenu;