import Keycloak from "keycloak-js";
import { DefaultAzureCredential } from "@azure/identity";
import { InteractiveBrowserCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

// const keycloak = new Keycloak({
//  url: "https://hvzkeycloak.azurewebsites.net/auth/",
//  realm: "hvz",
//  clientId: "hvzfrontend",
// });

async function getKeycloakConfig() {

    const clientId = "e40abe8c-ebd5-4180-b84a-c7ed26dfb9d4";

  // Create a new DefaultAzureCredential instance to authenticate with Azure.
  const credential = new InteractiveBrowserCredential({clientId});

  // Create a new SecretClient instance with your Key Vault URL and credentials.
  const vaultUrl = "https://hvzvault.vault.azure.net/";
  const client = new SecretClient(vaultUrl, credential);

  // Retrieve the secrets from the Key Vault.
  const urlSecret = await client.getSecret("KeycloakURL");

  // Assign the secret values to the Keycloak configuration.
  const keycloakConfig = {
    url: urlSecret.value,
    realm: "hvz",
    clientId: "hvzfrontend",
  };

  return keycloakConfig;
}

async function keycloak() {
    const keycloakConfig = await getKeycloakConfig();
  
    // Create a new Keycloak instance with the configuration.
    const keycloak = new Keycloak(keycloakConfig);
  
    // Initialize Keycloak and return the instance.
    return new Promise((resolve, reject) => {
      keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
        if (authenticated) {
          resolve(keycloak);
        } else {
          reject("Authentication failed");
        }
      });
    });
  }

export default keycloak;