import { useState, useEffect } from 'react';
import { postMessage } from "../../api/chatAPI";

export const usePostOneMessageAPI = (message, event) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function postData() {
      const [error, response] = await postMessage(message, event);

      if (error !== null) {
        setError(error);
      } else if (response !== undefined) {
        setResponse(response);
      }
      setIsLoading(false);
    }
    postData();
  }, [message, event]);

  return { response, error, isLoading };
};