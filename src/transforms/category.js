import { get } from 'lodash';

const transform = category => ({
  id: category.id,
  title: get(category, 'attributes.name'),
});

export default transform;
