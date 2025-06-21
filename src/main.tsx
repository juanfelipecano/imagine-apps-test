import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import { Provider } from 'react-redux';
import { store } from './store';

import './shared/css/colors.css';
import './shared/css/globals.css';
import './shared/css/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </StrictMode>,
)
