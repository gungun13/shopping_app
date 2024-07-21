import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'
import { BrowserRouter } from 'react-router-dom'
import {Toaster} from "react-hot-toast";
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-xjqvi8t0xz23hzfb.us.auth0.com"
    clientId={import.meta.env.VITE_DEPLOYED_CLIENT_ID}
    authorizationParams={{
       redirect_uri: window.location.origin
    }}

  >
      <Provider store={store}>
          <App />
          <Toaster/>
      </Provider>
    </Auth0Provider>
    </BrowserRouter>
  // </React.StrictMode>
)
