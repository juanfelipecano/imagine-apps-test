import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useStorage } from '../hooks';

export const PublicRoute = () => {
  const { getItem } = useStorage();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getItem('user');
      setAuthorized(!!user);
    };

    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authorized === null) return null;
  return authorized ? <Navigate to="/home" replace /> : <Outlet />;
};
