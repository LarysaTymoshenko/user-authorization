import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { onError } from '../../utilits/toast';

export default function PublicRoute({
  redirectTo,
  restricted = false,
  element,
}) {
  const auth = useSelector(getAuth);
  if (!redirectTo && restricted) {
    onError('No path for redirect');
    return <Navigate to="/" />;
  }

  return <>{auth && restricted ? <Navigate to={redirectTo} /> : element}</>;
}
