import React from 'react';
import VideosList from '../../../widgets/videosList/videosList';

const VideosMain = () => (
  <VideosList type="card" title={false} loadmore={true} start={0} amount={10} />
);
export default VideosMain;
