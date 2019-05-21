import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './footer.module.css';

import { CURRENT_YEAR } from '../../config';

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <Link to="/" className={Styles.logo}>
        <img alt="nba-logo" src="/images/nba_logo.png" />
      </Link>
      <div className={Styles.right}>
        @NBA {CURRENT_YEAR} All rights reserved
      </div>
    </div>
  );
};

export default Footer;
