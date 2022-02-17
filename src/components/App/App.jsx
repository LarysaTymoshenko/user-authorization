import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from '../Loader/Loader';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
