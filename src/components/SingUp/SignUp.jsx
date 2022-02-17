import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FormReg } from '../FormReg/FormReg';
import { setUser } from '../../redux/slices/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

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

  return <FormReg title="register" handleClick={handleRegister} />;
};

export { SignUp };
