import React from 'react';
import Styles from '../articles.module.css';

export default function TeamInfo(props) {
  console.log(props.team.logo);
  return (
    <div className={Styles.articleTeamHeader}>
      <div
        className={Styles.left}
        style={{ background: `url('/images/teams/${props.team.logo}')` }}
      />
      <div className={Styles.right}>
        <div>
          <span>{props.team.city}</span>
        </div>
        <div>
          <strong>
            W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
          </strong>
        </div>
      </div>
    </div>
  );
}
