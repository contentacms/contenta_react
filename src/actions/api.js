import axios from 'axios';

export const SERVER_LOADED_DATA = 'SERVER_LOADED_DATA';
export function serverLoadedData() {
  return {
    type: SERVER_LOADED_DATA,
    payload: {
      serverLoadedData: true,
    },
  };
}

export const FETCH_RECIPE_LANDING = 'FETCH_RECIPE_LANDING';
export function fetchRecipeLanding(origin = null) {
  return function (dispatch) {
    return axios(`${process.env.REACT_APP_JSONAPI}/node/recipe?sort=created&promote=true&limt=4`)
      .then(result => result.data.data)
      .then(recipes => {
        if (origin === 'server') {
          dispatch(serverLoadedData());
        }
        dispatch(loadRecipeLanding(recipes));
      })
      .catch(error => {});
  }
}

export const LOAD_RECIPE_LANDING = 'LOAD_RECIPE_LANDING';
export function loadRecipeLanding(recipes) {
  return {
    type: LOAD_RECIPE_LANDING,
    payload: {
      recipes: recipes,
    }
  };
}
