import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminMenuCreate from "./AdminMenuCreate";
import AdminMenuEdit from "./AdminMenuEdit";
import AdminMenuDelete from "./AdminMenuDelete";
import { Container, Col, Row } from "react-bootstrap";

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
      case "edit":
        return <AdminMenuEdit key={refreshKey} />;
      case "delete":
        return <AdminMenuDelete key={refreshKey} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </Link>
        <div>
          <button onClick={() => handleClick("create")}>Create</button>
          <button onClick={() => handleClick("edit")}>Edit</button>
          <button onClick={() => handleClick("delete")}>Delete</button>
        </div>
      </div>
      {activeButton === null && <div>Please select an option above</div>}
      <div>{renderComponent()}</div>
    </>
  );
};

export default AdminMenu;