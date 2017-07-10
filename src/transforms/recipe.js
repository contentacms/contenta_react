import { get } from 'lodash';

export default function(recipe, images, files) {
  const imageId = get(recipe, 'relationships.image.data.id');
  const fileId = images[imageId].relationships.imageFile.data.id;
  return {
    id: recipe.id,
    title: get(recipe, 'attributes.title'),
    promoted: get(recipe, 'isPromoted'),
    image: fileId,
    time: get(recipe, 'attributes.totalTime'),
  };
};
