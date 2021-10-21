import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Amplify from 'aws-amplify';
import config from './config.json';
import * as serviceWorker from './serviceWorker';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "../src/components/MSALAuth/authConfig";
import { msalConfig } from "../src/pages/Login/components/SSO-MS/authConfig";

//TEMPEROROY DECLARATION : Must be pickup up from Deployment Environment Variable
let env = "staging"

Amplify.configure({
  Auth: {
    manatorySignId: true,
    region: config.cognito.staging.REGION,
    userPoolId: config.cognito.staging.USER_POOL_ID,
    userPoolWebClientId: config.cognito.staging.APP_CLIENT_ID,
  },
});

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
