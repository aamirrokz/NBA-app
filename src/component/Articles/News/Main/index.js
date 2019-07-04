import React from 'react';

import NewsSlider from '../../../widgets/NewsSlider/slider';
import Newslist from '../../../widgets/NewsList/news_list';

export default function NewsMain() {
  return (
    <div>
      <NewsSlider
        type="featured"
        settings={{ dots: false }}
        start={0}
        amount={3}
      />
      <Newslist type="cardMain" loadMore={true} start={3} amount={10} />
    </div>
  );
}
