import React from 'react';
import Styles from './sidenav.module.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const SideNavItems = () => {
  const items = [
    {
      type: Styles.option,
      icon: 'home',
      text: 'Home',
      link: '/',
    },
    {
      type: Styles.option,
      icon: 'file-text-o',
      text: 'News',
      link: '/news',
    },
  ];

  const showitems = () => {
    return items.map((item, i) => {
      return (
        <div className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };

  return <div>{showitems()}</div>;
};

export default SideNavItems;
