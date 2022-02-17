import { useState } from 'react';
import s from './FormReg.module.css';

const FormReg = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className={s.container}>
      <input
        className={s.input}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        className={s.input}
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="password"
      />
      <button className={s.button} onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export { FormReg };
