/**
 * React Router compatible routes.
 *
 * The loadData function will allow data to be loaded on the server before being rendered.
 * It returns an array of Redux Thunks.
 */
import * as apiActions from './actions/api';
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
    path: '/recipes',
    component: RecipeLanding,
    exact: true,
    strict: true,
    loadData: [apiActions.fetchRecipeLanding],
  }
];

export default routes;
