import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const Mydomain= 'dev-d6ifb35x.us.auth0.com';
const Myclient= 'HJKapvxix0G5wo85zlhAED9itaDOAIMx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
  domain={Mydomain}
  clientId={Myclient}
  redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
