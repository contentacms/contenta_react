import axios from 'axios';

export const FETCH_RECIPE_LANDING = 'FETCH_RECIPE_LANDING';
export function fetchRecipeLanding(origin = null) {
  return function (dispatch) {
    return axios(`${process.env.REACT_APP_JSONAPI}/recipes?sort=created&promote=true&limt=4`)
      .then(result => result.data.data)
      .then(recipes => {
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
