import React from 'react';
import { DripstoneBlockCard } from './shared/card';
import { Container } from './shared/container';
import { Link } from 'react-router-dom';

export const Start = () => {
  return (
    <Container className={'dirt-bg'} style={styles.container as React.CSSProperties}>
      <DripstoneBlockCard>
        <h1 className={'text-center mb-4'} style={styles.heading}>MC Ultimate Tools</h1>
        <button className={'btn btn-secondary btn-lg w-100 mb-3'}>{'Login'}</button>
        <button className={'btn btn-secondary btn-lg w-100 mb-3'}>{'Continue as guest'}</button>
        <div style={styles.text}>Not have an account? <Link to={'/sign-up'} style={styles.text}>Sign up!</Link></div>
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
