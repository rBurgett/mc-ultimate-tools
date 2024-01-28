import { createContext, useCallback, useContext, useState } from 'react';

export interface UserState {
  id: string
  email: string
  guest: boolean
}
const defaultUserState = (): UserState => {
  return {
    id: '',
    email: '',
    guest: false,
  };
};
const UserContext = createContext<UserState>(defaultUserState());
const LoginContext = createContext<(email: string, password: string)=>void>(()=>{});

export const useUser = (): UserState => {
  return useContext(UserContext);
};
export const useLogin = () => useContext(LoginContext);
export const UserInnerProvider = ({ children, setState }: {children: any, setState: (state: UserState)=>void}) => {

  const login = useCallback((email: string, password: string) => {
    if(!email) {
      setState({
        id: '',
        email,
        guest: true,
      });
    } else {
      setState({
        id: '123',
        email,
        guest: false,
      });
    }
  }, [setState]);

  return (
    <LoginContext.Provider value={login}>
      {children}
    </LoginContext.Provider>
  );
};
export const UserProvider = ({ children }: {children: any}) => {

  const [ userState, setUserState ] = useState<UserState>(defaultUserState());

  return (
    <UserContext.Provider value={userState}>
      <UserInnerProvider setState={setUserState}>
        {children}
      </UserInnerProvider>
    </UserContext.Provider>
  )
};
