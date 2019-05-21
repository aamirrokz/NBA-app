import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';
import Styles from './slider.module.css';

const SliderTemplate = props => {
  let template = null;

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  switch (props.type) {
    case 'featured':
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={Styles.featured_item}>
              <div
                className={Styles.featured_image}
                style={{
                  background: `url(../images/articles/${item.image})`,
                }}
              >
                <Link to={`/articles/${item.id}`}>
                  <div className={Styles.featured_caption}>{item.title}</div>
                </Link>
              </div>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplate;
