import Keycloak from "keycloak-js";

const keycloak = new Keycloak("/keycloak.json");

export const initialize = () => {
  const config = {
    checkLoginIframe: false,
    onLoad: "check-sso",
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
  };
  return keycloak.init(config);
}

export const getUsername = async () => {
  const response = await fetch(
    `${keycloak.authServerUrl}/admin/realms/${keycloak.realm}/users/${keycloak.tokenParsed.sub}`,
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
