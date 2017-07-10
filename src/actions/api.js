import normalize from 'json-api-normalizer';

export function storeAPIData(data) {
  return function(dispatch) {
    const normalized = normalize(data);
    if (typeof normalized.categories !== 'undefined') {
      Object.keys(normalized.categories).forEach(categoryId => {
        dispatch(storeCategory(normalized.categories[categoryId]));
      });
    }

    if (typeof normalized.files !== 'undefined') {
      Object.keys(normalized.files).forEach(fileId => {
        dispatch(storeFile(normalized.files[fileId]));
      });
    }

    if (typeof normalized.recipes !== 'undefined') {
      Object.keys(normalized.recipes).forEach(recipeId => {
        dispatch(storeRecipe(normalized.recipes[recipeId], normalized.images, normalized.files));
      });
    }

    return Promise.resolve();
  }
}

export const STORE_CATEGORY = 'STORE_CATEGORY';
export function storeCategory(category) {
  return {
    type: STORE_CATEGORY,
    payload: {
      category,
    }
  };
}

export const STORE_FILE = 'STORE_FILE';
export function storeFile(file) {
  return {
    type: STORE_FILE,
    payload: {
      file,
    },
  };
}

export const STORE_RECIPE = 'STORE_RECIPE';
export function storeRecipe(recipe, images, files) {
  return {
    type: STORE_RECIPE,
    payload: {
      recipe,
      images,
      files,
    },
  };
}
