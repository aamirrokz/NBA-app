import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './button.module.css';

export default function Button(props) {
  let template = null;

  switch (props.type) {
    case 'loadmore':
      template = (
        <div className={Styles.blue_btn} onClick={props.loadMore}>
          {props.cta}
        </div>
      );
      break;
    default:
      template = null;
  }
  // return template;
  // console.log(props);
  return <div>{template}</div>;
}
