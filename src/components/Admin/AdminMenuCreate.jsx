import AdminMapCreate from "./AdminMapCreate";
import { Container, Row, Col } from "react-bootstrap";

// Component meant for every admin feature that has anything to do with creating
const AdminMenuCreate = () => {

    return(
        <Container>
            <div style={{backgroundColor:"green"}}></div>
            <AdminMapCreate />  
        </Container>
    );
};
export default AdminMenuCreate