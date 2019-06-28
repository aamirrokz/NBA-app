import React from 'react';
import Styles from '../videosList.module.css';
import VideoListTemplate from '../VideosListTemplate';

export default function VideoRelated(props) {
  return (
    <div className={Styles.relatedWrapper}>
      <VideoListTemplate data={props.data} teams={props.teams} />
    </div>
  );
}
