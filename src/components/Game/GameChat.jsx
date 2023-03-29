import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import styles from "./GameChat.module.css";
import Pusher from "../../utils/Pusher";
import { postMessage } from "../../api/chatAPI";
import { useGetUserIsZombie } from "../Hooks/APIPlayers";
import keycloak from "../../keycloak/keycloak";
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
  const [category, setCategory] = useState("global");
  const [showChat, setShowChat] = useState(false);
  const [myMessages, setMyMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [combinedMessages, setCombinedMessages] = useState([]);
  const [newMessage, setNewMessage] = useState([]);
  const location = useLocation();
  const currentGameId = location.state.currentGameId;
  const { isZombie, player } = useGetUserIsZombie(
    currentGameId,
    keycloak.tokenParsed.sub
  );
  const toggleShow = () => setShowChat(!showChat);

  const handleSendMessage = (message) => {
    const timestamp = new Date().getTime();
    setMessages([...messages, { message, timestamp }]);
  };

  const handleSendMyMessage = (message) => {
    const playerPrefix = player.userID;
    console.log("playerPrefix")
    console.log(playerPrefix)
    const timestamp = new Date().getTime();
    setMyMessages([...myMessages, { message, timestamp, category }]);

    postMessage(3, playerPrefix + message, category === "squad" ? category + player?.squadId : category).then(([error, data]) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  };

  useEffect(() => {
    setCombinedMessages(
      [...myMessages, ...messages].sort((a, b) => a.timestamp - b.timestamp)
    );
  }, [myMessages, messages]);

  const channel = Pusher.subscribe("HvZApp");
  channel.bind("Game" + currentGameId + "_" + category, function (data) {
    const timestamp = new Date().getTime();
    let message = data;
    let newMessages = [];
    if (player && data.substring(0, 36).trim() === player.userID.trim()) {
      // do nothing if the message is from the current player
    } else {
      message = data.substring(36); // remove the playerPrefix
      newMessages.push({ message, timestamp, category });
    }
    setNewMessage(JSON.stringify(data));
    setMessages([...messages, ...newMessages]);
  });
  useEffect(() => {
  }, [messages]);

  return (
    <Container fluid>
      <Row>
        <Col lg={1} className={`d-none d-sm-block`}></Col>
        <Col lg={10} xs={12} className={styles.ChatComponentContainer}>
          <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="12" lg="12" xl="12" className={styles.ChatContainer}>
                <MDBBtn
                  onClick={toggleShow}
                  color="info"
                  className={styles.chatToggleBtn}
                  style={{
                    backgroundColor:
                      category === "zombies" || category === "humans"
                        ? "rgb(64, 82, 102)"
                        : category === "global"
                        ? "rgb(102, 64, 64)"
                        : category === "squad"
                        ? "rgb(102, 93, 64)"
                        : "rgb(102, 93, 64)"
                  }}
                >
                  <div className={styles.ChatBtnText}>
                    <span>{category.toUpperCase()}</span>
                    <MDBIcon fas icon="chevron-down" />
                  </div>
                </MDBBtn>
                <MDBCollapse show={showChat}>
                  <Row className={styles.chatCategoryRow}>
                    <Col lg={4} xs={4} className={styles.chatCategoryCol}>
                      <Button
                        type="submit"
                        className={
                          category === "local"
                            ? `${styles.localBtn} ${styles.active}`
                            : styles.localBtn
                        }
                        onClick={() =>
                          isZombie
                            ? setCategory("zombies")
                            : setCategory("humans")
                        }
                      >
                        {isZombie ? <>zombie</> : <>human</>}
                      </Button>
                    </Col>
                    <Col lg={4} xs={4} className={styles.chatCategoryCol}>
                      <Button
                        type="submit"
                        className={
                          category === "squad"
                            ? `${styles.squadBtn} ${styles.active}`
                            : styles.squadBtn
                        }
                        onClick={() => player?.squadId > 0 ? setCategory("squad") : setCategory(category)}
                      >
                        squad
                      </Button>
                    </Col>
                    <Col lg={4} xs={4} className={styles.chatCategoryCol}>
                      <Button
                        type="submit"
                        className={
                          category === "global"
                            ? `${styles.globalBtn} ${styles.active}`
                            : styles.globalBtn
                        }
                        onClick={() => setCategory("global")}
                      >
                        global
                      </Button>
                    </Col>
                  </Row>
                  <MDBCard className={styles.ToggleChatContainer}>
                    <div className={styles.scroller}>
                      <MDBCardBody>
                        {combinedMessages.map(
                          ({ message, timestamp, category }, index) => (
                            <div
                            
                              className={`d-flex flex-row justify-content-${
                                myMessages.find(
                                  (m) => m.timestamp === timestamp
                                )
                                  ? "end"
                                  : "start"
                              }`}
                              key={index}
                            >
                              {!myMessages.find(
                                (m) => m.timestamp === timestamp
                              ) && (
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                  alt="theirAvatar"
                                  style={{ width: "45px", height: "100%" }}
                                />
                              )}
                              <div>
                                <p
                                  className={`small p-2 ms-3 mb-1 rounded-3 breakWord ${
                                    myMessages.find(
                                      (m) => m.timestamp === timestamp
                                    )
                                      ? styles.myMessageP
                                      : styles.theirMessageP
                                  }`}
                                  style={{
                                    backgroundColor: myMessages.find(
                                      (m) => m.timestamp === timestamp
                                    )
                                      ? "#f5f6f7"
                                      : "",
                                    wordBreak: "break-word",
                                    color: category === "zombies" || category === "humans"
                                    ? "white"
                                    : category === "global"
                                    ? "rgb(102, 64, 64)"
                                    : category === "squad"
                                    ? "orange"
                                    : "orange"
                                    
                                  }}
                                >
                                  {message}
                                </p>
                                <p className="small ms-3 mb-3 rounded-3 text-muted">
                                  {new Date(timestamp).toLocaleTimeString()}
                                </p>
                              </div>
                              {myMessages.find(
                                (m) => m.timestamp === timestamp
                              ) && (
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                  alt="myAvatar"
                                  style={{ width: "45px", height: "100%" }}
                                />
                              )}
                            </div>
                          )
                        )}
                      </MDBCardBody>
                    </div>
                    <MDBCardFooter>
                      
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
                            placeholder="Type your message here..."
                            name="message"
                          />
                          <div className="input-group-append">
                            <button
                              className={styles.sendMessageBtn}
                              type="submit"
                            >
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
        <Col lg={1} className={`d-none d-sm-block`}></Col>
      </Row>
    </Container>
  );
};

export default GameChat;
