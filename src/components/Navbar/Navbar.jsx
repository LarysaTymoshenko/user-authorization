import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { Context } from '../../index';

export default function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user ? (
            <Button onClick={logout} variant={'outlined'}>
              Выйти
            </Button>
          ) : (
            <NavLink to={'/login'}>
              <Button variant={'outlined'}>Логин</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
