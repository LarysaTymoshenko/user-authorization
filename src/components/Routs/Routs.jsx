import Login from '../Login/Login';
import ListContacts from '../ListContacts/ListContacts';

export const publicRoutes = [
  {
    path: './login',
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: './contacts',
    Component: ListContacts,
  },
];
