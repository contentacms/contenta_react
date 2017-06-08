import {
  LOAD_RECIPE_LANDING,
} from '../actions/api';

const initialState = {
  latestRecipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPE_LANDING:
      return {
        ...state,
        latestRecipes: action.payload.recipes,
      };
    default:
      return state;
  }
};
