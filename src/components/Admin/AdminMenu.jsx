import { Container, Col, Row, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminMenuCreate from "./AdminMenuCreate";
import AdminMenuEdit from "./AdminMenuEdit";
import AdminMenuDelete from "./AdminMenuDelete";
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
      
      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor:"rgb(67, 95, 114)" }}>
        <div style={{color:"blue"}}></div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button style={{backgroundColor:"rgb(103, 131, 150)",
            color: "white",
            padding: "10px 20px",
            border: "solid 2px rgb(190, 157, 87)",
            borderColor: "rgb(190, 157, 87)",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out"}} >Back</Button>
        </Link>
        <div>
          <Button onClick={() => handleClick("create")} style={{ 
            backgroundColor:"rgb(103, 131, 150)",
            color: "white",
            padding: "10px 20px",
            border: "solid 2px rgb(190, 157, 87)",
            borderColor: "rgb(190, 157, 87)",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out"
  }}>Create</Button>
          <Button onClick={() => handleClick("edit")}style={{ 
            backgroundColor:"rgb(103, 131, 150)",
            color: "white",
            padding: "10px 20px",
            border: "solid 2px rgb(190, 157, 87)",
            borderColor: "rgb(190, 157, 87)",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out"}}>Edit</Button>
          <Button onClick={() => handleClick("delete")}style={{ 
            backgroundColor:"rgb(103, 131, 150)",
            color: "white",
            padding: "10px 20px",
            border: "solid 2px rgb(190, 157, 87)",
            borderColor: "rgb(190, 157, 87)",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out"}}>Delete</Button>
        </div>
      </div>
      {activeButton === null}
      <div>{renderComponent()}</div>
    </Container>

    </>
  );
};

export default AdminMenu;