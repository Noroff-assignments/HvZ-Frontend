import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./KeyCloakLogin.module.css";

const LoginSignUpButtons = () => {
    return (
        <Container fluid>
            <Row>
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
            </Row>

        </Container>

    );

};

export default LoginSignUpButtons;
