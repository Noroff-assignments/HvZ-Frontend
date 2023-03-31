import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AdminMenu from '../components/Admin/AdminMenu';

import keycloak from '../keycloak/keycloak';


const AdminPage = () => {

  return (
    <Container fluid style={{ backgroundColor: "rgb(67, 95, 114)",width: "100%"}}>
      
    { keycloak.tokenParsed &&
        <AdminMenu />
      }
    </Container>
  );
};

export default AdminPage;