import { Navigate } from "react-router-dom";
import keycloak from "./keycloak";
import { useEffect, useState } from "react";

function KeycloakRoute({ children, role, redirectTo }) {
  const [isAuthenticated, setIsAuthenticated] = useState(keycloak.authenticated);

  useEffect(() => {
    const checkAuthentication = () => {
      setIsAuthenticated(keycloak.authenticated);
    };

    checkAuthentication();

    const checkRoles = () => {
      if (!keycloak.hasRealmRole(role)) {
        navigateTo(redirectTo);
      }
    };

    checkRoles();

    const keycloakUpdate = () => {
      keycloak.onAuthRefreshSuccess = () => {
        setIsAuthenticated(true);
      };
    };

    keycloakUpdate();

    return () => {
      keycloak.onAuthRefreshSuccess = null;
    };
  }, [role, redirectTo]);

  const navigateTo = (path) => {
    return <Navigate replace to="/" />;
  };

  return isAuthenticated && keycloak.hasRealmRole(role) ? <>{children}</> : navigateTo();
}

export default KeycloakRoute;