import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./LandingPageHeader.module.css";
import { useKeycloak } from "@react-keycloak/web";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Keycloak from "keycloak-js";


const LandingPageHeader = () => {
  //import { SecretClient } from "@azure/keyvault-secrets";
  //import { DefaultAzureCredential } from "@azure/identity";
  // const credential = new DefaultAzureCredential();

  // const vaultName = "hvzvault"
  // const vaultURL = `https://${vaultName}.vault.azure.net/`
  
  // const client = new SecretClient(vaultURL, credential);
  
  // const secretName = "";

  // async function test(){
  //    secretName = await client.getSecret("KeyURI");
  // }

  // test()
  // useEffect(() => {
  //   keycloak.init({ onLoad: 'login-required' })
  //     .then((authenticated) => {
  //       console.log(authenticated);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  
  // const handleLogin = () => {
  //   keycloak.login();
  // }
  // const { keycloak, initialized } = useKeycloak();

  return (
    <Container fluid className={styles.LandingPageHeaderContainer}>
      <Row>
        <Col lg={9} xs={12} className={styles.colHeaderText}>
            {/* <p>{secretName}</p> */}
        </Col>

        <Col xs={2} className={`d-lg-none d-xs-block ${styles.colTestSides}`}></Col>

        <Col lg={1} xs={4} className={styles.colLoginSignup}>

            <Button className={styles.loginBtn}>
              <Link to="/login">LOGIN</Link>
            </Button>

        </Col>
      
        <Col lg={1} xs={4} className={styles.colLoginSignup}>

            <Button className={styles.signupBtn}>
              <Link to="/register">REGISTER</Link>
            </Button>

        </Col> 

        <Col xs={2} className={`d-lg-none d-xs-block ${styles.colTestSides}`}></Col>
      </Row>
    </Container>
  );
};

export default LandingPageHeader;
