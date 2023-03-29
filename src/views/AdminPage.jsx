import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AdminMenu from '../components/Admin/AdminMenu';

import keycloak from '../keycloak/keycloak';


const AdminPage = () => {

  return (
    <Container>
      
    { keycloak.tokenParsed &&
        <AdminMenu />
      }
    </Container>
  );
};

export default AdminPage;