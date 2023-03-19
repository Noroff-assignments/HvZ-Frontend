import { Col } from "react-bootstrap";
import styles from "./GameMap.module.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Circle, Pane } from "react-leaflet";
import { GiPirateGrave } from "react-icons/gi";
import { Marker } from "react-leaflet-marker";
import L from "leaflet";
const GameMap = () => {
  const mapCoordinatesX = 55.642779272205274;
  const mapCoordinatesY = 12.271510716977884;
  const deathLocations = [
    [mapCoordinatesX + 0.0003, mapCoordinatesY + 0.0003],
    [mapCoordinatesX - 0.0004, mapCoordinatesY + 0.00083],
    [mapCoordinatesX + 0.000664, mapCoordinatesY - 0.00032],
    [mapCoordinatesX - 0.00096, mapCoordinatesY + 0.00023],
    [mapCoordinatesX + 0.0003, mapCoordinatesY + 0.0003],
    [mapCoordinatesX + 0.0015, mapCoordinatesY + 0.00383],
    [mapCoordinatesX + 0.000664, mapCoordinatesY - 0.00032],
    [mapCoordinatesX - 0.00036, mapCoordinatesY + 0.00423],
  ];

  const mapCoordinates = [mapCoordinatesX, mapCoordinatesY];
  const circleBounds = [
    [mapCoordinatesX, mapCoordinatesY],
    [mapCoordinatesX, mapCoordinatesY],
  ];

  const MyMarker = ({ position }) => {
    const map = useMap();
    const markerPosition = map.project(position);
    const markerPixelCoords = L.point(markerPosition.x, markerPosition.y - 35);
    const markerLatLng = map.unproject(markerPixelCoords);
    return (
      <Pane zIndex={500}>
        <Marker position={markerLatLng}>
          <GiPirateGrave className={styles.graveStone} />
        </Marker>
      </Pane>
    );
  };

  return (
    <Col lg={12} xs={12} className={styles.mapCol}>
      <MapContainer
        bounds={circleBounds}
        maxBounds={circleBounds}
        minZoom={16}
        maxZoom={18}
        className={styles.mapContainer}
        center={mapCoordinates}
        zoom={18}
        scrollWheelZoom={false}
      >
        <Circle
          center={mapCoordinates}
          radius={150}
          pathOptions={{ color: "red" }}
        />
        {deathLocations.map((death, index) => {
          return <MyMarker key={index} position={death} />;
        })}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Col>
  );
};

export default GameMap;
