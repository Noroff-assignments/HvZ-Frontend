import styles from "./KillCodeQR.module.css";
import { Col } from "react-bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { createRoot } from "react-dom/client";



const KillCodeQR = () => {
  return (
    <Col lg={12} xs={12} className={styles.mapCol}>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"thomasErCool1234"}
          viewBox={`0 0 256 256`}
        />
      </div>
    </Col>
  );
};

export default KillCodeQR;