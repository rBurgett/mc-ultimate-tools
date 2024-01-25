import React from 'react';
import { Container } from './shared/container';
import { DripstoneBlockCard } from './shared/card';
import { useNavigate } from 'react-router-dom';
import { Input } from './shared/input';
import { BackButton } from './shared/back-button';

export const SignUp = () => {

  const [ email, setEmail ] = React.useState<string>('');
  const [ password, setPassword ] = React.useState<string>('');
  const [ passwordRepeat, setPasswordRepeat ] = React.useState<string>('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const onPasswordRepeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPasswordRepeat(e.target.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('onSubmit');
  };

  return (
    <Container className={'dirt-bg'} style={styles.container as React.CSSProperties}>
      <BackButton />
      <DripstoneBlockCard>
        <h1 style={styles.heading} className={'text-center'}>Sign up!</h1>
        <form onSubmit={onSubmit}>

          <button type={'submit'} className={'btn btn-secondary btn-lg mt-3 w-100'}>{'Create account!'}</button>

        </form>
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
