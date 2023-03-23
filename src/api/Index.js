//this script is to help handle the API

// get the API key from the .env file
const apiKey = process.env.REACT_APP_API_KEY;

// define the standard header for fetch requests
export const createHeaders = () => {
  return {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
  };
};