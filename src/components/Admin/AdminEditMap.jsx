import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect, useRef } from "react";
import { useGetOneMapAPI } from "../Hooks/APIMaps";
import { useGetAllMissionsAPI } from "../Hooks/APIMissions";
import { useGetAllSafeZonesAPI } from "../Hooks/APISafeZones";
//AdminEditMap component renders a Leaflet map and provides editing functionality 
//for map properties like name, description, latitude, longitude, and radius.
const AdminEditMap = ({ mapId }) => {
  const mapRef = useRef(null);
  const [leafletMap, setLeafletMap] = useState(null);
  const { indexMap, isLoading: isLoadingMap } = useGetOneMapAPI(mapId);
  const { isLoading: isLoadingMissions } = useGetAllMissionsAPI(mapId);
  const { safezones, isLoading: isLoadingSafeZones } =
    useGetAllSafeZonesAPI(mapId);

  const [dataLoaded, setDataLoaded] = useState(false);
  
  // Initialize and render the Leaflet map when indexMap object changes
  useEffect(() => {
    if (indexMap) {
      const map = L.map(mapRef.current).setView(
        [indexMap.latitude, indexMap.longitude],
        14
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      const circle = L.circle([indexMap.latitude, indexMap.longitude], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: indexMap.radius,
      }).addTo(map);
      circle.bindPopup("Map location");

      setLeafletMap(map);

      return () => {
        map.remove();
      };
    }
  }, [indexMap, safezones, mapId]);

  useEffect(() => {
    if (!isLoadingMap && !isLoadingMissions && !isLoadingSafeZones) {
      setDataLoaded(true);
    }
  }, [isLoadingMap, isLoadingMissions, isLoadingSafeZones]);

  return (
    <div>
      <h2 style={{ color: "White" }}>Map:</h2>
      <div ref={mapRef} style={{ height: "50vh", width: "80vw" }}></div>
      {dataLoaded && (
        <>
          <div>
            <label htmlFor="mapName" style={{ width: "100%", color:"White"}}>Map Name:</label>
            <input
              type="text"
              id="mapName"
              name="mapName"
              value={indexMap.mapName}
            />
          </div>
          <div>
            <label htmlFor="mapDescription" style={{ width: "100%", color:"White"}}>Map Description:</label>
            <input
              type="text"
              id="mapDescription"
              name="mapDescription"
              value={indexMap.mapDescription}
            />
          </div>
          <div>
            <label htmlFor="latitude" style={{width: "100%",color:"White"}}>Latitude:</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={indexMap.latitude}
            />
          </div>
          <div>
            <label htmlFor="longitude" style={{width: "100%", color:"White"}}>Longitude:</label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={indexMap.longitude}
            />
          </div>
          <div>
            <label htmlFor="radius" style={{width: "100%", color:"White"}}>Radius:</label>
            <input
              type="text"
              id="radius"
              name="radius"
              value={indexMap.radius}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminEditMap;
