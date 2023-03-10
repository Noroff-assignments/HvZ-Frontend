import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row, Form, FormGroup, FormControl} from "react-bootstrap";
import styles from "./LoginForm.module.css";
import React, {useState} from "react";

const LoginForm = () => {
    const handleClick = ( ) => {
        console.log("clicked");
    };
    return (
        <Container fluid className={styles.LoginFormHeaderContainer}>
            <div>
                <Form>
                    <Row>
                        <Col lg={3} hidden-xs className={styles.colLoginFormSides}></Col>

                        <Col lg={3} xs={12} className={styles.Login}><h2>Login</h2></Col>

                        <Col lg={3} hidden-xs className={styles.colLoginFormSides}></Col>

                        <Col lg={3} xs={8}>
                            <FormGroup controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <FormControl type="text" placeholder="Enter your username"/>
                                </FormGroup>
                        </Col>    
                    </Row>
                    <Row>
                        
                        <Col>
                        <FormGroup controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <FormControl type="text" placeholder="Enter your password"/>
                                </FormGroup>
                        </Col>
                        
                    </Row>
                    <Row>
                    <Col lg={4} xs={12}>
                            <button onClick={handleClick} className={styles.LoginButton}>Login</button>
                        </Col>
                    </Row>
                    
                </Form>
            </div>
        </Container>
        
        
    );
};

export default LoginForm;

