import { LoginEntityVm } from './login.vm';

export const validateCredentials = ({ username, password }: LoginEntityVm) => {
  return new Promise<boolean>(resolve =>
    resolve(username.toLowerCase() === 'nya' && password === 'password')
  );
};
