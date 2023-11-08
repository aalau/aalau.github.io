import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from './App';
import './index.scss';

{ /* https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/*/}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);