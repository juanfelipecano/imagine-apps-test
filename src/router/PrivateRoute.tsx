import { useEffect, useState } from 'react';
import { useStorage } from '../hooks';
import { Navigate, Outlet } from 'react-router';
import { ApplicationData } from '../config';

export const PrivateRoute = () => {
  const { getItem } = useStorage();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getItem(ApplicationData.user);
      setAuthorized(!!user);
    };

    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authorized === null) return null;
  return authorized ? <Outlet /> : <Navigate to="/login" replace />;
};
