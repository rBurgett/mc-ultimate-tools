import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import './index.scss';
import './css/font-awesome.css';
import { WindowSizeProvider } from './hooks/window-size-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WindowSizeProvider>
      <App />
    </WindowSizeProvider>
  </React.StrictMode>
);
