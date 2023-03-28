import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import useGeolocation from "../Hooks/useGeolocation";
import styles from "./LandingPageHeader.module.css";
import { useState, useEffect } from "react";
import keycloak, {
  initKeycloak,
} from "../../keycloak/keyCloakInit";
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
        {/*<img src="./resources/LandingBackGround.jpg" className={styles.LandingPageHeaderImage} alt="Landing Page" />*/}
        <Col lg={4} className={`d-lg-block d-xs-none`}>
          <p className={styles.userText}>
            {keycloak.tokenParsed && keycloak.tokenParsed.preferred_username
              ? keycloak.tokenParsed.preferred_username
              : null}
          </p>
          
        </Col>
        <Col lg={4} xs={12} className={styles.colHeaderText}>
          <h2 className={styles.colHeaderText}>HUMAN VS ZOMBIE</h2>
        </Col>
        <Col lg={4} className={`d-lg-block d-xs-none`}>
        <p className={styles.userText}>
            {keycloak.tokenParsed && keycloak.tokenParsed.sub
              ? keycloak.tokenParsed.sub
              : null}
          </p>
        </Col>
        Feature/AdminPage
      </Row>
    </Container>
  );
};

export default LandingPageHeader;

//55.642925074626866:12.270545074626867
