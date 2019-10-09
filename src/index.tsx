import { HashRouter, Route, Switch } from 'react-router-dom';
import { HotelCollectionPage, HotelEditPage, LoginPage } from 'scenes';
import { SessionProvider, routerSwitchRoutes } from 'core';

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
ReactDOM.render(
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route exact path={routerSwitchRoutes.main} component={LoginPage} />
        <Route path={routerSwitchRoutes.hotelCollection} component={HotelCollectionPage} />
        <Route path={routerSwitchRoutes.hotelEdit} component={HotelEditPage} />
      </Switch>
    </HashRouter>
  </SessionProvider>,
  root
);
