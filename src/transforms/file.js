import { get } from 'lodash';

const transform = (file) => ({
  id: file.id,
  uri: get(file, 'attributes.uri'),
});

export default transform;
