//React
import React from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/Loading/loading';
//Styling
import './index.css';
//3rd Party
import 'leaflet/dist/leaflet.css'
//Keycloak
import { initialize } from './keycloak/keycloak';
//App
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Loading message
root.render(<Loading message="Securing connection..." />)

// Init keycloak
initialize()
  .then(() => {
    root.render(
    // <React.StrictMode>
      <App />
    // </React.StrictMode> 
    )
  })
  .catch(() => {
    root.render(
      // <React.StrictMode>
        <p>"Could not establish connection to Keycloak."</p>
      // </React.StrictMode>
    )
  })

