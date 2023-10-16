import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n.js';

import './index.css';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
