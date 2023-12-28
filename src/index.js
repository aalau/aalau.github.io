import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom';

import App from './App';
import './index.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);