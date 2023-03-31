import AdminMenuEditGames from "./AdminMenuEditGames";
import { useGetAllGamesAPI } from "../Hooks/APIGames";
import {Container, Row, Col} from "react-bootstrap";
import styles from "./AdminMenuEdit.css"

// Menu which sends the Games that can be edited to the AdminMenuEditGames component
const AdminMenuEdit = () => {
  const { games, isLoading } = useGetAllGamesAPI();

  return (
    <Container fluid className={styles.AdminMenuEdit}>
      <Row className={styles.colHeaderRow}>
        <Col lg={3} className={`d-lg-block d-xs-none`}></Col>
        <Col lg={6} xs={12} className={styles.colHeaderText}>
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