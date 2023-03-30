import styles from "./KillCodeQRScanner.module.css";
import { Col, Row } from "react-bootstrap";
import { QrReader } from "react-qr-reader";
import { postKill } from "../../api/KillAPI";
import { useState, useEffect } from "react";
const KillCodeQRScanner = ({ gameId, playerId }) => {
  const [data, setData] = useState("No result");
  //const {longitude, latitude, error} = useGeolocation();
  const handleKill = async (killCode) => {
    const decodedData = decodeURIComponent(killCode);
    const { biteCode } = JSON.parse(decodedData);
    const [error, killData] = await postKill(
      biteCode,
      gameId,
      new Date().toISOString(),
      "RIP",
      55.642876,
      12.27207,
      playerId
    );
  };
  useEffect(() => {
    if (data.length > 0) {
      handleKill(data);
    }
  }, [data]);
  const [rearCameraId, setRearCameraId] = useState(null);

  useEffect(() => {
    async function getRearCameraId() {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const rearCamera = devices.find(
        (device) =>
          device.kind === "videoinput" && device.label.includes("environment")
      );
      if (rearCamera) {
        setRearCameraId(rearCamera.deviceId);
      }
    }
    getRearCameraId();
  }, []);
  return (
    <Row>
      <Col lg={1} className={`d-none d-sm-block`}></Col>
      <Col lg={10} xs={12}>
        <Row className={styles.qrRow}>
          <Col lg={2} xs={12} className={styles.qrColSides}></Col>
          <Col lg={8} xs={12} className={styles.qrColMid}>
            <Col lg={12} xs={12} className={styles.qrHeaderCol}>
              <h2>Scan Target KillCode</h2>
            </Col>
            <Col lg={12} xs={12} className={styles.qrCol}>
              <img
                className={styles.qrScanFrameImg}
                src="https://static.thenounproject.com/png/3046863-200.png"
                alt="qrScanner"
              />
              <QrReader
                onResult={(result, error) => {
                  if (!!result) {
                    setData(JSON.stringify(JSON.parse(result)));
                  }
                  if (!!error) {
                    console.info(error);
                  }
                }}
                className={styles.qrScanner}
                facingMode={null}
                deviceId={rearCameraId}
              />
              <p className={styles.qrScanData}>{data}</p>
            </Col>
          </Col>
          <Col lg={2} xs={12} className={styles.qrColSides}></Col>
        </Row>
      </Col>
      <Col lg={1} className={`d-none d-sm-block`}></Col>
    </Row>
  );
};
export default KillCodeQRScanner;
