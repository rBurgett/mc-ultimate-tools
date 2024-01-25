import React from 'react';
import { Start } from './start';
import { SignUp } from './sign-up';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { route } from '../constants';

const router = createHashRouter([
  {
    path: route.HOME,
    element: <Start />,
  },
  {
    path: route.REGISTER,
    element: <SignUp />,
  },
]);

export const App = () => {
  return (
    <div style={styles.container as React.CSSProperties}>
      <RouterProvider router={router} />
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
};
