import { lazy } from 'react';
import { Navigate, type RouteObject } from 'react-router';
import { MainLayout } from '../components/layouts';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const CoursesPage = lazy(() => import('../pages/CoursesPage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <PublicRoute />,
    children: [
      { index: true, element: <LoginPage /> },
    ]
  },
  {
    path: '/home',
    element: <PrivateRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: 'dashboard', element: <DashboardPage /> },
          { path: 'courses', element: <CoursesPage /> },
          { path: 'users', element: <UsersPage /> },
          { index: true, element: <Navigate to="/home/dashboard" /> },
        ],
      }
    ]
  },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
