import AdminMenuEditGames from "./AdminMenuEditGames";
import { useGetAllGamesAPI } from "../Hooks/APIGames";
import {Container, Row, Col} from "react-bootstrap";
import styles from "./AdminMenuEdit.css"

const AdminMenuEdit = () => {
  const { games, isLoading } = useGetAllGamesAPI();

  return (
    <Container fluid className={styles.AdminMenuEdit}>
      <Row className={styles.colHeaderRow}>
        {/*<img src="./resources/LandingBackGround.jpg" className={styles.LandingPageHeaderImage} alt="Landing Page" />*/}
        <Col lg={3} className={`d-lg-block d-xs-none`}></Col>
        <Col lg={6} xs={12} className={styles.colHeaderText}>
          {/*<h2 className={styles.colHeaderText}>HUMAN VS ZOMBIE</h2>*/}
        </Col>
        <Col lg={3} className={`d-lg-block d-xs-none`}></Col>
      
    
    <div style={{ display: "flex" }}>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <AdminMenuEditGames games={games} />
        )}
      </div>
    </div>
    </Row>
    </Container>
  );
};

export default AdminMenuEdit;