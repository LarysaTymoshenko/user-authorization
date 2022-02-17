import React from 'react';
import { Audio } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = props => (
  <div className={s.spinner__backdrop}>
    <div className={s.spinner}>
      <Audio
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="blue"
        {...props}
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </Audio>
    </div>
  </div>
);

Loader.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
};

export default Loader;
