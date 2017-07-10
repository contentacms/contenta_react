import {
  STORE_CATEGORY,
  STORE_FILE,
  STORE_RECIPE,
} from '../actions/api';
import categoryTransform from '../transforms/category';
import fileTransform from '../transforms/file';
import recipeTransform from '../transforms/recipe';

const initialState = {
  categories: {},
  files: {},
  recipes: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_CATEGORY: {
      const category = categoryTransform(action.payload.category);
      return {
        ...state,
        categories: {
          ...state.categories,
          [category.id]: category,
        }
      };
    }
    case STORE_FILE: {
      const file = fileTransform(action.payload.file);
      return {
        ...state,
        files: {
          ...state.files,
          [file.id]: file,
        }
      };
    }
    case STORE_RECIPE: {
      const recipe = recipeTransform(action.payload.recipe, action.payload.images, action.payload.files);
      return {
        ...state,
        recipes: {
          ...state.recipes,
          [recipe.id]: recipe,
        }
      };
    }
    default:
      return state;
  }
};
