import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../redux/slices/userSlice';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Searchbar from '../components/Searchbar/Searchbar';
import s from './Pages.module.css';

const HomePage = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  const [imgName, setimgName] = useState('');

  const onFormSubmit = imgName => {
    setimgName(imgName);
  };
  return isAuth ? (
    <div>
      <Button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </Button>
      <h1 className={s.title}> Welcome {email} ! </h1>
      <Searchbar onSubmit={onFormSubmit} />
      <ImageGallery imgName={imgName} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default HomePage;
