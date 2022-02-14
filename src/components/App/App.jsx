// import HomePage from '../../pages/HomePage';
import UserMenu from '../UserMenu/UserMenu';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Loader from '../Loader/Loader';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
// import {useAuthState} from "react-firebase-hooks/auth";
// import { onError } from '../../utilits/toast';
import PublicRoute from '../PublicRoute/PublicRoute';
import PrivateRoute from '../PrivatRoute/PrivetRoute';

const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

export default function App() {
  // const { error } = useAuthState()

  // useEffect(() => {
  //   if (error) {
  //     onError(error.data)
  //   }
  // }, [error])

  return (
    <div className="App">
      <Suspense
        fallback={
          <p>
            Loading.... <Loader />
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<UserMenu />}>
            <Route
              path="login"
              element={
                <PublicRoute
                  element={<LoginPage />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute
                  element={<RegisterPage />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="contacts/*"
              element={
                <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}
// function App() {
//   return (
//     <Switch>
//       {/* <Navbar/> */}

//       <Route exact path="/" component={HomePage} />
//       <Route exact path="/login" component={LoginPage} />
//       <Route exact path="/register" component={RegisterPage} />
//       <Route exact path="/" component={UserMenu} />
//     </Switch>
//   );
// }

// export default App;
