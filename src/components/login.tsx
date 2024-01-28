import React, { useEffect } from 'react';
import { Container } from './shared/container';
import { DripstoneBlockCard } from './shared/card';
import { Input } from './shared/input';
import { BackButton } from './shared/back-button';
import { DangerAlert } from './shared/alert';
import { useLogin, useUser } from '../hooks/user-context';
import { useNavigate } from 'react-router-dom';
import { route } from '../constants';

export const Login = () => {

  const login = useLogin();
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if(user.id || user.guest) {
      navigate(route.HOME);
    }
  }, [user, navigate]);

  const [ email, setEmail ] = React.useState<string>('');
  const [ password, setPassword ] = React.useState<string>('');
  const [ errorMessage, setErrorMessage ] = React.useState<string>('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage('Oops! You must enter an email address.');
      return;
    }
    if (!password.trim()) {
      setErrorMessage('Oops! You must enter a password.');
      return;
    }
    login(email.trim(), password);
  };

  return (
    <Container style={styles.container as React.CSSProperties}>
      <BackButton />
      <DripstoneBlockCard>

        <h1 style={styles.heading} className={'text-center'}>Login</h1>

        <form onSubmit={onSubmit}>

          <Input
            label={'Email'}
            type={'email'}
            placeholder={'Enter email address'}
            value={email}
            onChange={onEmailChange}
            autoFocus={true}
            required={true}
          />

          <Input
            label={'Password'}
            type={'password'}
            placeholder={'Enter password'}
            value={password}
            onChange={onPasswordChange}
            required={true}
          />

          {errorMessage ?
            <DangerAlert className={'mt-3 mb-0'}>{errorMessage}</DangerAlert>
            :
            null
          }

          <button type={'submit'} className={'btn btn-secondary btn-lg mt-3 w-100'}>Login!</button>

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
