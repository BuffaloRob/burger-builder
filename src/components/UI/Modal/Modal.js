import React from 'react';

import classes from './Modal.module.css';

const modal = (props) => (
  <div>
    {props.children}
  </div>
);

export default modal;