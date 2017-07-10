import axios from 'axios';
import * as apiActions from './api';

const api = process.env.REACT_APP_JSONAPI;

export const STORE_RECIPE_LANDING_PAGE = 'LOAD_RECIPE_LANDING_PAGE';
export function storeRecipeLandingPage(categories, recipesByCategory) {
  return {
    type: STORE_RECIPE_LANDING_PAGE,
    payload: {
      categories,
      recipesByCategory,
    },
  };
}

export function loadRecipeLandingPage() {
  return function (dispatch) {
    let pageCategories = [];
    return axios(`${api}/categories`)
      .then((result) => {
        dispatch(apiActions.storeAPIData(result.data));
        return result.data.data;
      })
      .then(categories => categories.map(category => category.id))
      .then((categories) => {
        pageCategories = categories;
        return Promise.all(categories.map(category =>
          axios(`${api}/recipes`, {
            params: {
              'filter[category.uuid][value]': category,
              'page[limit]': 4,
              sort: 'created',
              include: 'image,image.thumbnail',
              isPromoted: true,
            },
          }),
        ));
      })
      .then((result) => {
        result.forEach((recipesInCategory) => {
          dispatch(apiActions.storeAPIData(recipesInCategory.data));
        });

        dispatch(storeRecipeLandingPage(pageCategories, result));
      });
  };
}
