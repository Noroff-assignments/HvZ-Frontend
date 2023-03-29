import { Container, Col, Row, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminMenuCreate from "./AdminMenuCreate";
import AdminMenuEdit from "./AdminMenuEdit";
import AdminMenuDelete from "./AdminMenuDelete";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./Buttons.module.css"

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
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>Back</Button>
        </Link>
        <div>
          <Button onClick={() => handleClick("create")}>Create</Button>
          <Button onClick={() => handleClick("edit")}>Edit</Button>
          <Button onClick={() => handleClick("delete")}>Delete</Button>
        </div>
      </div>
      {activeButton === null}
      <div>{renderComponent()}</div>
    </Container>

    </>
  );
};

export default AdminMenu;