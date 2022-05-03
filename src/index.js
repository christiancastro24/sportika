import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { ProviderTreinos } from "./context/index"

ReactDOM.render(
  <React.StrictMode>
    <ProviderTreinos>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderTreinos>
  </React.StrictMode>,
  document.getElementById('root')
);

