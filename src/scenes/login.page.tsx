import { Link } from 'react-router-dom';
import React from 'react';
import { SingleViewLayout } from 'layout';
import { routesLinks } from 'core';
import { LoginContainer } from 'pods/login/index';

export const LoginPage = () => (
  <SingleViewLayout>
    <LoginContainer/>
  </SingleViewLayout>
);
