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
export default keycloak;


// const Login = (onAuthenticatedCallback) => {
//   keycloakInstance
//     .init({ onLoad: "login-required" })
//     .then(function (authenticated) {
//       authenticated ? onAuthenticatedCallback() : alert("NOT AUTHENTICATED");
//     })
//     .catch((e) => {
//         console.error("Keycloak Error:", e);
//     });
// };

// const KeycloakService = {
//   CallLogin: Login,
// };
