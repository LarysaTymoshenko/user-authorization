import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { onError } from '../../utilits/toast';
import { FormReg } from '../FormReg/FormReg';
import { setUser } from '../../redux/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        push('/');
      })
      .catch(() => onError('Invalid user!'));
  };

  return <FormReg title="sign in" handleClick={handleLogin} />;
};

export { Login };
