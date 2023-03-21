import axios from "axios";
import keycloak from "../keycloak/keycloak";

const setAuthenticationHeader = (header, keycloak) => {
    const { token } = keycloak;
    return {
        ...headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};

axios.interceptors.request.use(async (config) => {
    if(!keycloak.authenticated){
        return config;
    }

    if(!keycloak.isTokenExpired()) {
        return {
            ...config,
            headers: setAuthenticationHeader(config.headers, keycloak)
        };
    }

    // Expire time
    const SECONDS = 3600;

    try {
        await keycloak.updateToken(SECONDS);
    } catch (e) {
        console.log("Could not refresh token (Axios Interceptor)");
    }

    return {
        ...config,
        headers: setAuthenticationHeader(config.headers, keycloak);
    };
});

export default axios;