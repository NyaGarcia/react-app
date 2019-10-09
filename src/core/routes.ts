import { generatePath } from 'react-router';

type NavigationFunction = (id: string) => string;

interface BaseRoutes {
  main: string;
  hotelCollection: string;
  hotelEdit: string | NavigationFunction;
}

interface AppBaseRoutes extends BaseRoutes {
  hotelEdit: string;
}

interface RoutesLinks extends BaseRoutes {
  hotelEdit: NavigationFunction;
}

const appBaseRoutes: AppBaseRoutes = {
  main: '/',
  hotelCollection: '/hotel-collection',
  hotelEdit: '/hotel-edit',
};

export const routerSwitchRoutes: AppBaseRoutes = {
  ...appBaseRoutes,
  hotelEdit: `/${appBaseRoutes.hotelEdit}/:id`,
};

export const routesLinks: RoutesLinks = {
  ...appBaseRoutes,
  hotelEdit: id => generatePath(routerSwitchRoutes.hotelEdit, { id }),
};
