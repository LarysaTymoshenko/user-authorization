import { Link } from 'react-router-dom';
import { SignUp } from '../components/SingUp/SignUp';
import Section from '../components/Section/Section';
import s from './Pages.module.css';

const RegisterPage = () => {
  return (
    <Section>
      <h1>Register</h1>
      <SignUp />
      <p className={s.text}>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </Section>
  );
};

export default RegisterPage;
