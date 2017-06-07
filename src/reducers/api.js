import {
  SERVER_LOADED_DATA,
  LOAD_RECIPE_LANDING,
} from '../actions/api';

const initialState = {
  latestRecipes: [],
  serverLoadedData: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SERVER_LOADED_DATA:
      return {
        ...state,
        serverLoadedData: true,
      };
    case LOAD_RECIPE_LANDING:
      return {
        ...state,
        latestRecipes: action.payload.recipes,
      };
    default:
      return state;
  }
};
