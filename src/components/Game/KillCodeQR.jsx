import styles from "./KillCodeQR.module.css";
import { Col } from "react-bootstrap";
import React from "react";
import QRCode from "react-qr-code";

const KillCodeQR = () => {
  return (
    <Col lg={12} xs={12} className={styles.mapCol}>
      
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"thomasErCool1234"}
          viewBox={`0 0 256 256`}
        />
      
    </Col>
  );
};

export default KillCodeQR;