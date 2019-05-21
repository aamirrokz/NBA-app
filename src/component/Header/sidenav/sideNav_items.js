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
    {
      type: Styles.option,
      icon: 'play',
      text: 'Video',
      link: '/video',
    },
    {
      type: Styles.option,
      icon: 'sign-in',
      text: 'Sign-in',
      link: '/sign-in',
    },
    {
      type: Styles.option,
      icon: 'sign-out',
      text: 'Sign-out',
      link: '/sign-out',
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
