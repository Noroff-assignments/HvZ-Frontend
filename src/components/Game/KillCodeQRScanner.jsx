import styles from "./KillCodeQRScanner.module.css";
import { Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { postKill } from "../../api/KillAPI";

const KillCodeQRScanner = (gameId) => {
  const [data, setData] = useState("No result");
  //const {longitude, latitude, error} = useGeolocation();
  const handleKill = async (killCode) => {
    const[error, killData] = await postKill(gameId,new Date().getTime(), "RIP", 55.642876, 12.272070, killCode  );
    console.log(killData);
  };
  return (
    <Row>
      <Col lg={1} className={`d-none d-sm-block`}></Col>
      <Col lg={10} xs={12} >
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
              {data &&
              <QrReader
                onResult={(result, error) => {
                  if (!!result) {
                    setData(result?.text);
                     handleKill(result);
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
                className={styles.qrScanner}
              />
            }
              <p>{data}</p>
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
