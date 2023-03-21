import styles from "./KillCodeQR.module.css";
import { Col, Row } from "react-bootstrap";
import React from "react";
import QRCode from "react-qr-code";

const KillCodeQR = () => {
  return (
    <Row className={styles.qrRow} >
      <Col lg={3} xs={12} className={styles.qrColSides}></Col>
      <Col lg={6} xs={12} className={styles.qrColMid}>
        <Col lg={12} xs={12} className={styles.qrHeaderCol}>
          <h2>Your KillCode</h2>
        </Col>
        <Col lg={12} xs={12} className={styles.qrCol}>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={"Rene Marcker"}
            viewBox={`0 0 256 256`}
          />
        </Col>
      </Col>
      <Col lg={3} xs={12} className={styles.qrColSides}></Col>
    </Row>
  );
};

export default KillCodeQR;
