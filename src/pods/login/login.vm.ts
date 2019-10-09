export interface LoginEntityVm {
  username: string;
  password: string;
}

export const createEmptylogin = (): LoginEntityVm => ({
  username: '',
  password: '',
});
