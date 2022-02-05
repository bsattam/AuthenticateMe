import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;

export default function Layout(props) {
  return <Auth0Provider
    domain = {domain}
    clientId = {clientId}
    redirectUri={window.location.origin}
  >
      {props.children}
  </Auth0Provider>;
}
