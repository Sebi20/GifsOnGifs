import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import './index.css';
import App from './Components/App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <App />
    </HashRouter>
);

