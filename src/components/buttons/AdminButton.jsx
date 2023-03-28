import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import keycloak from "../../keycloak/keycloak";
import { Link } from "react-router-dom";

import styles from "./Buttons.module.css";

const AdminButton = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={1} xs={4} className={styles.colLoginSignup}>
          {keycloak.authenticated && keycloak.hasRealmRole("admin") && (
            <Link to="/admin">
              <Button className={styles.loginBtn}>Admin</Button>
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminButton;