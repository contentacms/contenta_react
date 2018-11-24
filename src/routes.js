/**
 * React Router compatible routes.
 *
 * The loadData function will allow data to be loaded on the server before being rendered.
 * It returns an array of Redux Thunks.
 */
import Home from './components/04_template/Home/Home';
import RecipeLanding from './components/04_template/RecipeLanding/RecipeLanding';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    strict: true,
  },
  {
    path: '/features',
    component: RecipeLanding,
    exact: true,
    strict: true,
  },
  {
    path: '/recipes',
    component: RecipeLanding,
    exact: true,
    strict: true,
  },
  {
    path: '/magazine',
    component: RecipeLanding,
    exact: true,
    strict: true,
  },
];

export default routes;
