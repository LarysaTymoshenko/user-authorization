import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FormLog } from '../FormLog/FormLog ';
import { setUser } from '../../redux/slices/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const { push } = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);

    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return <FormLog title="register" handleClick={handleRegister} />;
};

export { SignUp };
