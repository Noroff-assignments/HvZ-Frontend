import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row} from "react-bootstrap";
import styles from "./RegisterForm.module.css";

import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";

const RegisterForm = () => {
    const { keycloak, initialized } = useKeycloak();

    useEffect(() => {
        const authenticated = keycloak.authenticated;

        if(authenticated) {
            window.location.href = "/gameLobby";
        } else {
            keycloak.register();
        }
    })
};
          
export default RegisterForm;