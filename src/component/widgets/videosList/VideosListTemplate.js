import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './videosList.module.css';

import Cardinfo from '../Cardinfo/cardinfo';

export default function VideosListTemplate(props) {
  //   console.log(props);
  return props.data.map((item, i) => {
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className={Styles.videoListItem_wrapper}>
          <div
            className={Styles.left}
            style={{ background: `url(/images/videos/${item.image})` }}
          >
            <div />
          </div>
          <div className={Styles.right}>
            <Cardinfo teams={props.teams} team={item.team} date={item.date} />
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    );
  });
}
