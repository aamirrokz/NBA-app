import React from 'react';
import Styles from '../articles.module.css';

export default function Postdata(props) {
  return (
    <div className={Styles.articlePostDate}>
      <div>
        Date:<span>{props.data.date}</span>
      </div>
      <div>
        Author:<span>{props.data.author}</span>
      </div>
    </div>
  );
}
