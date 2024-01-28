import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import './index.scss';
import './css/font-awesome.css';
import { WindowSizeProvider } from './hooks/window-size-context';
import { UserProvider } from './hooks/user-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WindowSizeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </WindowSizeProvider>
  </React.StrictMode>
);
