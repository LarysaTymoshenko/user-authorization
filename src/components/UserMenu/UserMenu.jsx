import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Section from '../Section/Section';
import { onError } from '../../utilits/toast';
import { List } from './list.styled';
import { Item } from './item.styled';
import { Block } from './block.styled';

export default function UserMenu() {
  const auth = getAuth();
  const userName = useSelector(auth);
  const [error] = useAuthState(auth);
  const location = useLocation();
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    if (error) {
      onError(error);
    }
  }, [error]);

  return (
    <>
      <Section size="full">
        <Block>
          {userName && !location.pathname.includes('add') && (
            <Link
              style={{ color: 'rgb(117, 111, 58)' }}
              to={`${location.pathname}/add`}
            >
              Add contact
            </Link>
          )}
          <List>
            {!userName ? (
              <>
                <Item>
                  <Link
                    to="register"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Register
                  </Link>
                </Item>
                <Item>
                  <Link
                    to="login"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    LogIn
                  </Link>
                </Item>
              </>
            ) : (
              <>
                <Item>Hello, {userName}</Item>
                <Item>
                  <Link
                    to="/"
                    style={{ color: 'rgb(117, 111, 58)' }}
                    onClick={logout}
                  >
                    LogOut
                  </Link>
                </Item>
              </>
            )}
          </List>
        </Block>
      </Section>
      <Outlet />
    </>
  );
}
