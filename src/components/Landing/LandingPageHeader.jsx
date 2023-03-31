import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import useGeolocation from "../Hooks/useGeolocation";
import styles from "./LandingPageHeader.module.css";
import { useState, useEffect } from "react";
import { initKeycloak } from "../../keycloak/keyCloakInit";
const LandingPageHeader = () => {
  const { latitude, longitude, error } = useGeolocation();
  const [updatedLatitude, setUpdatedLatitude] = useState(null);
  const [updatedLongitude, setUpdatedLongitude] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    initKeycloak();
    //getUsernameAsync();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const interval = setInterval(() => {
        setUpdatedLatitude(latitude);
        setUpdatedLongitude(longitude);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [latitude, longitude]);

  return (
    <Container fluid className={styles.LandingPageHeaderContainer}>
      <Row className={styles.colHeaderRow}>
        <Col lg={3} className={`d-lg-block d-xs-none`}></Col>
        <Col lg={6} xs={12} className={styles.colHeaderText}>
          <h2 className={styles.colHeaderText}>HUMAN VS ZOMBIE</h2>
        </Col>
        <Col lg={3} className={`d-lg-block d-xs-none`}></Col>
      </Row>
    </Container>
  );
};

export default LandingPageHeader;


