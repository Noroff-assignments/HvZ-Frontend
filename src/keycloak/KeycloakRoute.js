import { useKeycloak } from "@react-keycloak/web";

const KeycloakRoute = ({ children }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return isLoggedIn ? children : null;
};

export default KeycloakRoute;