import App from "components/App/App";

import Catalogue from "pages/Catalogue";
import { ErrorBoundary } from "pages/ErrorBoundary/ErrorBoundary";
import Home, { getCatPeople } from "pages/Home";
import { createBrowserRouter } from "react-router-dom";
import * as route from "utils/constants";

// console.log(getCatPeople);
export const router = createBrowserRouter([
  {
    path: route.SHOP_ROUTE,
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: route.SHOP_ROUTE,
        element: <Home />,
      },
      {
        path: `/:gen`,
        element: <Home />,
        loader: ({ params }) => getCatPeople((params as { gen: string }).gen),
      },
      {
        path: `${route.SHOP_ROUTE}/:gen${route.CATALOGUE_ROUTE}`,
        element: <Catalogue />,
      },
      // {
      //   path: `${route.GEN_ROUTE}/:gen`,
      //   element: <Home />,
      // },
      // {
      //   path: route.CATALOGUE_ROUTE,
      //   caseSensitive: true,
      //   element: <Catalogue />,
      //   loader: () => ({ data: 1 }),
      // },
    ],
  },
]);
