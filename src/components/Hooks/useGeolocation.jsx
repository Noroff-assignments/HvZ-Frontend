import { useState, useEffect } from "react";

const useGeolocation = (options = {}) => {
  const [latitude, setLatitude] = useState("0");
  const [longitude, setLongitude] = useState("0");
  const [error, setError] = useState(null);

  useEffect(() => {
    let watcher;
    if (navigator.geolocation) {
      watcher = navigator.geolocation.watchPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        },                            
        { maximumAge: 0, ...options }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }

    return () => {
      if (watcher) {
        navigator.geolocation.clearWatch(watcher);
      }
    };
  }, [options]);

  return { latitude, longitude, error };
};

export default useGeolocation;