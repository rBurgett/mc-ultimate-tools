import React from 'react';
import { SignUp } from './sign-up';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { route } from '../constants';
import { Login } from './login';
import { Main } from './main';

const router = createHashRouter([
  {
    path: route.HOME,
    element: <Main />,
  },
  {
    path: route.REGISTER,
    element: <SignUp />,
  },
  {
    path: route.LOGIN,
    element: <Login />,
  },
]);

export const App = () => {
  return (
    <div className={'dirt-bg'} style={styles.container as React.CSSProperties}>
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
