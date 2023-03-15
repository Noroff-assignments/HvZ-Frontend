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
  const [myMessages, setMyMessages] = useState([]);
  const [messages, setMessages] = useState([]);

  const toggleShow = () => setShowShow(!showShow);

  const handleSendMessage = (message) => {
    const timestamp = new Date().getTime();
    setMessages([...messages, { message, timestamp }]);
  };
  const handleSendMyMessage = (message) => {
    const timestamp = new Date().getTime();
    setMyMessages([...myMessages, { message, timestamp }]);
  };
  const combinedMessages = [...myMessages, ...messages].sort(
    (a, b) => a.timestamp - b.timestamp
  );

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
              <div className="d-flex justify-content-between align-items-center">
                <span>Chat</span>
                <MDBIcon fas icon="chevron-down" />
              </div>
            </MDBBtn>
            <MDBCollapse show={showShow} className={styles.ToggleChatContainer}>
              <MDBCard>
                <div className={styles.scroller}>
                  <MDBCardBody>
                    {combinedMessages.map(({ message, timestamp }, index) => (
                      <div
                        className={`d-flex flex-row justify-content-${
                          myMessages.find((m) => m.timestamp === timestamp)
                            ? "end"
                            : "start"
                        }`}
                        key={index}
                      >
                        {!myMessages.find((m) => m.timestamp === timestamp) && (
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                        )}
                        <div>
                          <p
                            className={`small p-2 ms-3 mb-1 rounded-3 breakWord ${
                              myMessages.find((m) => m.timestamp === timestamp)
                                ? styles.myMessageP
                                : ""
                            }`}
                            style={{
                              backgroundColor: myMessages.find(
                                (m) => m.timestamp === timestamp
                              )
                                ? "#f5f6f7"
                                : "",
                              wordBreak: "break-word",
                            }}
                          >
                            {message}
                          </p>
                          <p className="small ms-3 mb-3 rounded-3 text-muted">
                            {new Date(timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                        {myMessages.find((m) => m.timestamp === timestamp) && (
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                        )}
                      </div>
                    ))}
                  </MDBCardBody>
                </div>
                <MDBCardFooter>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const messageInput = e.target.elements.message;
                      if (messageInput.value.trim() !== "") {
                        handleSendMessage(messageInput.value);
                        messageInput.value = null;
                      }
                    }}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control breakWord"
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
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const messageInput = e.target.elements.message;
                      if (messageInput.value.trim() !== "") {
                        handleSendMyMessage(messageInput.value);
                        messageInput.value = null;
                      }
                    }}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control breakWord"
                        placeholder="Type others message here..."
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