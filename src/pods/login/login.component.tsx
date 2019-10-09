import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { LoginForm } from './login-form.component';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { routesLinks, SessionContext } from 'core';
import { LoginEntityVm, createEmptylogin } from './login.vm';
import { validateCredentials } from './login.api';
import { openSnackbar } from 'common/components/index';

export const LoginComponent = () => {
  const history = useHistory();
  const loginContext = useContext(SessionContext);
  const [initialLogin] = useState<LoginEntityVm>(createEmptylogin());

  const navigateToHotel = (loginInfo: LoginEntityVm) => {
    loginContext.updateUsername(loginInfo.username);
    history.push(routesLinks.hotelCollection);
  };

  const saveLogin = async (loginData: LoginEntityVm) => {
    const valid = await validateCredentials(loginData);
    valid ? navigateToHotel(loginData) : alert('Invalid credentials');
  };

  const showErrorSnackbar = (message: string) => {
    openSnackbar(message, 'error');
  };

  return (
    <Card>
      <CardHeader title='Login' />
      <CardContent>
        <LoginForm onLogin={saveLogin} initialLoginInfo={initialLogin} />
      </CardContent>
    </Card>
  );
};
