import { HashRouter, Route, Switch } from 'react-router-dom';
import { HotelCollectionPage, LoginPage } from 'scenes';

import React from 'react';
import ReactDOM from 'react-dom';
import { routerSwitchRoutes, SessionProvider } from 'core';

const root = document.getElementById('root');
ReactDOM.render(
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route exact path={routerSwitchRoutes.main} component={LoginPage} />
        <Route path={routerSwitchRoutes.hotelCollection} component={HotelCollectionPage} />
      </Switch>
    </HashRouter>
  </SessionProvider>,
  root
);
