import React from 'react';
import Picture from '../../01_atom/Picture/Picture';

const Teaser = (props) => (
  <div>
    <div>
      <Picture />
    </div>
    <div>
      {props.subtitle}
    </div>
    <div>
      {props.title}
    </div>
  </div>
);

export default Teaser;
