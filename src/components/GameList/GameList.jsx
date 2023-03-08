import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row} from "react-bootstrap";
import styles from "./GameList.module.css";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom";
const GameList = () => {
    const navigate = useNavigate();
    useEffect(() => {
        
          navigate("/login");
    });
    return (
        <Container fluid>
            <Row>
            <Col lg={4} hidden-xs className={styles.colTestSides}></Col>
                <Col lg={4} xs={12} className={styles.colTestMid}> test</Col>
            <Col lg={4} hidden-xs className={styles.colTestSides}></Col>
            </Row>
            
        </Container>
    );
};

export default GameList;