import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { onError } from '../../utilits/toast';

export default function PrivateRoute({ element, redirectTo }) {
  const auth = useSelector(getAuth);
  if (!redirectTo) {
    onError('No path for redirect');
    return <Navigate to="/" />;
  }
  return <>{auth ? element : <Navigate to={redirectTo} />}</>;
}
