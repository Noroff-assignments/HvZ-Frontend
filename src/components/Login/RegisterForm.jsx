import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row} from "react-bootstrap";
import styles from "./RegisterForm.module.css";
const RegisterForm = () => {
    return (
        <Container fluid>
            <Row>
            <Col lg={3} hidden-xs className={styles.colTestSides}></Col>
                <Col lg={6} xs={12} className={styles.colTestMid}> test</Col>
            <Col lg={3} hidden-xs className={styles.colTestSides}></Col>
            </Row>
        </Container>
    );
};

export default RegisterForm;