import keycloak, {
    initialize,
    getUsername
} from "./keycloak";

export const initKeycloak = () => {
    keycloak
        .init({
            onLoad: "check-sso",
            silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
        })
        .then((authenticated) => {
            if (authenticated) {
                console.log(
                    `User ${
              keycloak.authenticated
                ? keycloak.tokenParsed.preferred_username
                : "unknown"
            } is authenticated`
                );
            } else {
                console.log("User is not authenticated");
            }
        });
};

export const getUsernameAsync = async () => {
    await initialize();
    try {
        const username = await getUsername();
        console.log("username");
        console.log(username);
    } catch (error) {
        console.error("Error getting username:", error);
    }
};

export default keycloak;