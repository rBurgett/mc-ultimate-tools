import React from 'react';
import { Container } from './shared/container';
import { Start } from './start';
import { useUser } from '../hooks/user-context';

export const Main = () => {

  const user = useUser();

  if(!user.id && !user.guest) {
    return (
      <Start />
    );
  }

  return (
    <Container style={styles.container as React.CSSProperties}>
      <h1 className={'text-center'}>Welcome {user.guest ? 'guest' : 'user'}!</h1>
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
};
