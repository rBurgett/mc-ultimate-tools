import React from 'react';
import { DripstoneBlockCard } from './shared/card';
import { Container } from './shared/container';
import { Link } from 'react-router-dom';
import { route } from '../constants';
import { useLogin } from '../hooks/user-context';

export const Start = () => {

  const login = useLogin();

  const onGuestClick = (e: React.MouseEvent) => {
    login('', '');
  };

  return (
    <Container style={styles.container as React.CSSProperties}>
      <DripstoneBlockCard>
        <h1 className={'text-center mb-4'} style={styles.heading}>MC Ultimate Tools</h1>
        <Link to={route.LOGIN} className={'btn btn-secondary btn-lg w-100 mb-3'}>Login</Link>
        <button className={'btn btn-secondary btn-lg w-100 mb-3'} onClick={onGuestClick}>{'Continue as guest'}</button>
        <div style={styles.text}>Not have an account? <Link to={route.REGISTER} style={styles.text}>Sign up!</Link></div>
      </DripstoneBlockCard>
    </Container>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#ffffff',
  },
  text: {
    color: 'white',
  },
};
