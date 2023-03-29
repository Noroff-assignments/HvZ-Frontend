import React, { useState, useEffect } from 'react';

import AdminMenu from '../components/Admin/AdminMenu';

import keycloak from '../keycloak/keycloak';

const AdminPage = () => {

  return (
    <>
      { keycloak.tokenParsed &&
        <AdminMenu />
      }
    </>
  );
};

export default AdminPage;