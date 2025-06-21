import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from './router/routes';

export const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={ router } />
  )
}
