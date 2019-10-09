import { LoginEntityVm } from './login.vm';

export interface Props {
  onLogin: (data: LoginEntityVm) => void;
  initialLoginInfo: LoginEntityVm;
}
