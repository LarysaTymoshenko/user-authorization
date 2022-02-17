import { Link } from 'react-router-dom';
import { Login } from '../components/Login/Login';
import Section from '../components/Section/Section';
import s from './Pages.module.css';

const LoginPage = () => {
  return (
    <Section>
      <h1>Login</h1>
      <Login />
      <p className={s.text}>
        <Link to="/register"> Register </Link>
      </p>
    </Section>
  );
};

export default LoginPage;
