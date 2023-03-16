import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row} from "react-bootstrap";
import styles from "./LoginForm.module.css";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";



const LoginForm = () => {
    const { keycloak, initialized } = useKeycloak();

        useEffect(() => {
        const authenticated = keycloak.authenticated;

        if(authenticated) {
            window.location.href = "/gameLobby";
        } else {
            keycloak.login();
        }
    })

    // return (
    //     <Container fluid>
    //         <Row>
    //         <Col lg={3} hidden-xs className={styles.colTestSides}></Col>
    //             <Col lg={6} xs={12} className={styles.colTestMid}>KEYCLOAK AUTH</Col>
    //         <Col lg={3} hidden-xs className={styles.colTestSides}></Col>
    //         </Row>
    //     </Container>
    // );
};

export default LoginForm;