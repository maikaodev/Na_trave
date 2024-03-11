import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

