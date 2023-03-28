import Keycloak from "keycloak-js";

const keycloak = new Keycloak("/keycloak.json");

// Retrieve token from localStorage, if available
const storedToken = localStorage.getItem("keycloak-token");
if (storedToken) {
  keycloak.token = storedToken;
  keycloak.refreshToken = localStorage.getItem("keycloak-refresh-token");
  const expiration = localStorage.getItem("keycloak-token-expiration");
  if (expiration) {
    keycloak.tokenParsed = {
      exp: expiration
    };
  }
}

export const initialize = () => {
  const config = {
    checkLoginIframe: false,
    onLoad: "check-sso",
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
  };
  return keycloak.init(config).then((authenticated) => {
    if (authenticated) {
      localStorage.setItem("keycloak-token", keycloak.token);
      localStorage.setItem("keycloak-refresh-token", keycloak.refreshToken);
      localStorage.setItem("keycloak-token-expiration", keycloak.tokenParsed.exp);
    }
  });
};

export const getUsername = async () => {
  
  const response = await fetch(
    `https://hvzkeycloak.azurewebsites.net/auth/realms/hvz/users/${keycloak.tokenParsed.sub}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get user information.");
  }

  const user = await response.json();
  return user.username;
};

export default keycloak;
