import { useState, useEffect } from "react";

/**
 * A custom hook to get the user's current geolocation coordinates.
 * @param {Object} options - Optional parameters for the geolocation API.
 * @returns {Object} - An object containing the user's latitude, longitude, and any errors.
 */
const useGeolocation = (options = {}) => {
  const [latitude, setLatitude] = useState("0");
  const [longitude, setLongitude] = useState("0");
  const [error, setError] = useState(null);

  useEffect(() => {
    let watcher;
    if (navigator.geolocation) {
      const cachedLocation = JSON.parse(localStorage.getItem("cachedLocation"));
      if (cachedLocation) {
        setLatitude(cachedLocation.latitude);
        setLongitude(cachedLocation.longitude);
      } else {
        // Use watchPosition to continually update the user's location
        watcher = navigator.geolocation.watchPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            localStorage.setItem(
              "cachedLocation",
              JSON.stringify({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              })
            );
          },
          (error) => {
            setError(error.message);
          },
          { maximumAge: 0, ...options }
        );
      }
    } else {
      setError("Geolocation is not supported by this browser.");
    }

    // Clear the watchPosition when the component unmounts
    return () => {
      if (watcher) {
        navigator.geolocation.clearWatch(watcher);
      }
    };
  }, [options]);

  return { latitude, longitude, error };
};

export default useGeolocation;