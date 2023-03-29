import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect, useRef } from "react";
import useGeolocation from "../Hooks/useGeolocation";
import { useGetOneMapAPI } from "../Hooks/APIMaps";
import { useGetAllMissionsAPI } from "../Hooks/APIMissions";
import { useGetAllSafeZonesAPI } from "../Hooks/APISafeZones";

const AdminEditMap = ({ mapId }) => {
  const mapRef = useRef(null);
  const [leafletMap, setLeafletMap] = useState(null);
  const { indexMap, isLoading: isLoadingMap } = useGetOneMapAPI(mapId);
  const { missions, isLoading: isLoadingMissions } = useGetAllMissionsAPI(mapId);
  const { safezones, isLoading: isLoadingSafeZones } = useGetAllSafeZonesAPI(mapId);

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (indexMap) {
      const map = L.map(mapRef.current).setView([indexMap.latitude, indexMap.longitude], 14);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
      
      const circle = L.circle([indexMap.latitude, indexMap.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: indexMap.radius
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
        <h2>Map:</h2>
        <div ref={mapRef} style={{ height: "50vh", width: "80vw" }}></div>
        {dataLoaded && (
            
        <>
            <div>
                <label htmlFor="mapName">Map Name:</label>
                <input type="text" id="mapName" name="mapName" value={indexMap.mapName} />
            </div>
            <div>
                <label htmlFor="mapDescription">Map Description:</label>
                <input type="text" id="mapDescription" name="mapDescription" value={indexMap.mapDescription} />
            </div>
            <div>
                <label htmlFor="latitude">Latitude:</label>
                <input type="text" id="latitude" name="latitude" value={indexMap.latitude} />
            </div>
            <div>
                <label htmlFor="longitude">Longitude:</label>
                <input type="text" id="longitude" name="longitude" value={indexMap.longitude} />
            </div>
            <div>
                <label htmlFor="radius">Radius:</label>
                <input type="text" id="radius" name="radius" value={indexMap.radius} />
            </div>


            <h2>Missions:</h2>
            <pre>{JSON.stringify(missions, null, 2)}</pre>
            <pre>{JSON.stringify(safezones, null, 2)}</pre>
        </>
        )}
    </div>
  );
};

export default AdminEditMap;