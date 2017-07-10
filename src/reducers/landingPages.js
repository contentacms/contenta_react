import {
  STORE_RECIPE_LANDING_PAGE
} from '../actions/landingPages';

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_RECIPE_LANDING_PAGE: {
      return {
        ...state,
        categories: action.payload.categories.map((category, index) => ({
          id: category,
          recipes: action.payload.recipesByCategory[index].data.data.map(recipe => recipe.id)
        }))
      };
    }
    default:
      return state;
  }
};
