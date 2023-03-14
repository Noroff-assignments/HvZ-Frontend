import { Container, Col, Row } from "react-bootstrap";
import styles from "./GameChat.module.css";
import { useEffect, useState } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBCardFooter,
  MDBCollapse,
} from "mdb-react-ui-kit";

const GameChat = () => {
  const [showShow, setShowShow] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleShow = () => setShowShow(!showShow);

  const handleSendMessage = (message) => {
    const timestamp = new Date().getTime();
    setMessages([...messages, { message, timestamp }]);
  };
  
  return (
    <Col lg={12} xs={12} className={styles.ChatComponentContainer}>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="12" lg="12" xl="12" className={styles.ChatContainer}>
            <MDBBtn
              onClick={toggleShow}
              color="info"
              className={styles.chatToggleBtn}
            >
              <div class="d-flex justify-content-between align-items-center">
                <span>Chat</span>
                <MDBIcon fas icon="chevron-down" />
              </div>
            </MDBBtn>
            <MDBCollapse show={showShow} className="mt-3">
              <MDBCard>
                <div className={styles.scroller}>
                  <MDBCardBody>
                  {messages.map(({ message, timestamp }, index) => (
    <div className="d-flex flex-row justify-content-start" key={index}>
        <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
        />
        <div>
            <p
                className="small p-2 ms-3 mb-1 rounded-3"
                style={{ backgroundColor: "#f5f6f7" }}
            >
                {message}
            </p>
            <p className="small ms-3 mb-3 rounded-3 text-muted">
                {new Date(timestamp).toLocaleTimeString()}
            </p>
        </div>
    </div>
))}
                  </MDBCardBody>
                </div>
                <MDBCardFooter>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage(e.target.elements.message.value);
                    }}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your message here..."
                        name="message"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-info" type="submit">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </MDBCardFooter>
              </MDBCard>
            </MDBCollapse>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Col>
  );
};

export default GameChat;
