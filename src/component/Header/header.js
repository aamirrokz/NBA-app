import React from 'react';
import Styles from './header.module.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import SideNav from './sidenav/sideNav';

export default function header(props) {
  const logo = () => (
    <Link to="/" className={Styles.logo}>
      <img alt="nba logo" src="\images\nba_logo.png" />
    </Link>
  );

  const navBars = () => (
    <div className="Styles.bars">
      <FontAwesome
        name="bars"
        onClick={props.onOpenNav}
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer',
        }}
      />
    </div>
  );

  return (
    <header className={Styles.header}>
      {/* passing props to sidenav */}
      <SideNav {...props} />
      <div className={Styles.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
}
