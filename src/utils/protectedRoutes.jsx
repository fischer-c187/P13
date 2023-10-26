import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store/slice/authSlice';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function ProtectedRoute() {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate('/sign-in');
    }
  }, [isAuth, navigate]);

  return <Outlet />;
}

export default ProtectedRoute;
