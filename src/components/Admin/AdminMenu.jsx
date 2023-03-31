import { Container, Col, Row, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminMenuCreate from "./AdminMenuCreate";
import AdminMenuEdit from "./AdminMenuEdit";
import AdminMenuDelete from "./AdminMenuDelete";
import styles from "./Buttons.module.css"

// Admin Navbar, containing 4 buttons:
// Back - Leads to website root
// Create - Loads the Create Map and Game components
// Deletes - Loads the Delete Map and Game components
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
    <Container style={{ width: "100%"}}>
      
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", backgroundColor:"rgb(67, 95, 114)" }}>
        <div style={{color:"blue"}}></div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button className={styles.backBtn} >Back</Button>
        </Link>
        <div>
          <Button onClick={() => handleClick("create")} className={styles.createBtn} >Create</Button>
          <Button onClick={() => handleClick("edit")}className={styles.editBtn}>Edit</Button>
          <Button onClick={() => handleClick("delete")}className={styles.deleteBtn}>Delete</Button>
        </div>
      </div>
      {activeButton === null}
      <div>{renderComponent()}</div>
    </Container>

    </>
  );
};

export default AdminMenu;