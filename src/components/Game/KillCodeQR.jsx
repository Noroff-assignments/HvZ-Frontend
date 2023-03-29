import styles from "./KillCodeQR.module.css";
import { Col, Row } from "react-bootstrap";
import React from "react";
import QRCode from "react-qr-code";
import { useGetBiteCode } from "../Hooks/APIPlayers";
const KillCodeQR = ({gameId, playerId}) => {
  const {biteCode} = useGetBiteCode(gameId, playerId);
  
  return (
    <Row>
      <Col lg={1} className={`d-none d-sm-block`}></Col>
      <Col lg={10} xs={12} >
        <Row className={styles.qrRow}>
          <Col lg={2} xs={12} className={styles.qrColSides}></Col>
          <Col lg={8} xs={12} className={styles.qrColMid}>
            <Col lg={12} xs={12} className={styles.qrHeaderCol}>
              <h2>Your KillCode</h2>
            </Col>
            <Col lg={12} xs={12} className={styles.qrCol}>
              {biteCode &&
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={JSON.stringify(biteCode)}
                viewBox={`0 0 256 256`}
              />
            }
            </Col>
          </Col>
          <Col lg={2} xs={12} className={styles.qrColSides}></Col>
        </Row>
      </Col>
      <Col lg={1} className={`d-none d-sm-block`}></Col>
    </Row>
  );
};

export default KillCodeQR;
