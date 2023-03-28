import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import useGeolocation from "../Hooks/useGeolocation";
import styles from "./LandingPageHeader.module.css";
import { useState, useEffect } from "react";
import keycloak from "../../keycloak/keycloak";

const LandingPageHeader = () => {

  const { latitude, longitude, error } = useGeolocation();
  const [updatedLatitude, setUpdatedLatitude] = useState(null);
  const [updatedLongitude, setUpdatedLongitude] = useState(null);

  keycloak
  .init({
    onLoad: "check-sso",
    silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
  })
  .then((authenticated) => {
    if (authenticated) {
      console.log(`User ${keycloak.authenticated ? keycloak.tokenParsed.preferred_username : 'unknown'} is authenticated`);
    } else {
      console.log("User is not authenticated");
    }
  });

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
      <Row>
        {/*<img src="./resources/LandingBackGround.jpg" className={styles.LandingPageHeaderImage} alt="Landing Page" />*/}
        <Col lg={4} className={`d-lg-block d-xs-none`}></Col>
        <Col lg={4} xs={12} className={styles.colHeaderText}>
          <div>
          {updatedLatitude} : {updatedLongitude}
          <div>
            {keycloak.tokenParsed && keycloak.tokenParsed.preferred_username ? keycloak.tokenParsed.preferred_username : null}

          </div>
          </div>
        </Col>
        <Col lg={1} className={`d-xs-none d-lg-block`}></Col>
        <Col xs={2} className={`d-lg-none d-xs-block ${styles.colTestSides}`}></Col>        
        <Col xs={2} className={`d-lg-none d-xs-block ${styles.colTestSides}`}></Col>
      </Row>
    </Container>
  );
};

export default LandingPageHeader;

//55.642925074626866:12.270545074626867