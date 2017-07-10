import React from 'react';
import Picture from '../../01_atom/Picture/Picture';

const Teaser = (props) => (
  <div>
    <div>
      <Picture uri={props.image} />
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
