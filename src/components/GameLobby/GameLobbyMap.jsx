import { Col} from "react-bootstrap";
import styles from "./GameLobbyMap.module.css";
import { useState, useMemo } from "react";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Rectangle, MapContainer } from "react-leaflet";

const GameLobbyMap = () => {
  
  const mapCoordinatesX = 55.642779272205274;
  const mapCoordinatesY = 12.271510716977884;
  
  //const mapCoordinatesX = 55.642779272205274;
  //const mapCoordinatesY = 12.271510716977884;
  

  const mapCoordinates = [mapCoordinatesX, mapCoordinatesY];

  const innerBounds = [
    [mapCoordinatesX + 0.003, mapCoordinatesY + 0.005],
    [mapCoordinatesX - 0.003, mapCoordinatesY - 0.005],
  ];
  const outerBounds = [
    [mapCoordinatesX + 0.003, mapCoordinatesY + 0.005],
    [mapCoordinatesX - 0.003, mapCoordinatesY - 0.005],
  ];
  const redColor = { color: "red" };
  const whiteColor = { color: "white" };

  function MapPlaceholder() {
    return (
      <p>
        Map. <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }
  function SetBoundsRectangles() {
    const [bounds, setBounds] = useState(outerBounds);
    const map = useMap();

    const innerHandlers = useMemo(
      () => ({
        click() {
          setBounds(innerBounds);
          map.fitBounds(innerBounds);
        },
      }),
      [map]
    );
    const outerHandlers = useMemo(
      () => ({
        click() {
          setBounds(outerBounds);
          map.fitBounds(outerBounds);
        },
      }),
      [map]
    );

    return (
      <>
        <Rectangle
          bounds={outerBounds}
          eventHandlers={outerHandlers}
          pathOptions={bounds === outerBounds ? redColor : whiteColor}
        />
        <Rectangle
          bounds={innerBounds}
          eventHandlers={innerHandlers}
          pathOptions={bounds === innerBounds ? redColor : whiteColor}
        />
      </>
    );
  }

  return (
    <Col lg={12} xs={12} className={styles.mapCol}>
      <MapContainer
        bounds={outerBounds}
        maxBounds={outerBounds}
        minZoom={16}
        maxZoom={18}
        className={styles.mapContainer}
        center={mapCoordinates}
        zoom={18}
        scrollWheelZoom={false}
        placeholder={<MapPlaceholder />}
      >
        <TileLayer
          className={styles.mapImg}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetBoundsRectangles />
      </MapContainer>
    </Col>
  );
};

export default GameLobbyMap;
