import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./LandingPageHeader.module.css";
const LandingPageHeader = () => {
  return (
    <Container fluid className={styles.LandingPageHeaderContainer}>
      <Row>
        <Col lg={9} xs={12} className={styles.colHeaderText}>
          header message
        </Col>

        <Col xs={2} className={`d-lg-none d-xs-block ${styles.colTestSides}`}></Col>

        <Col lg={1} xs={4} className={styles.colLoginSignup}>
          <Button className={styles.loginBtn}>
            Login
          </Button>
        </Col>
        <Col lg={1} xs={4} className={styles.colLoginSignup}>
          <Button className={styles.signupBtn}>
            Sign Up
          </Button>
        </Col>
        <Col xs={2} className={`d-lg-none d-xs-block ${styles.colTestSides}`}></Col>
      </Row>
    </Container>
  );
};

export default LandingPageHeader;
