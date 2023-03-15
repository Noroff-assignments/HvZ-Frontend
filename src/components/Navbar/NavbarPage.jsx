import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./NavbarPage.module.css";

const NavbarPage = () => {
    return (
        <Container fluid>
            <Row>
               <Col lg={3} hidden-xs className={styles.navbarSide1}>
               </Col>
               <Col lg={6} xs={12} className={styles.navbarTextBox}>
               </Col>
               <Col lg={3} hidden-xs className={styles.navbarSide2}>
               </Col> 
            </Row>

        </Container>

    );

};

export default NavbarPage;
