import React from 'react';
import FontAwesome from 'react-fontawesome';
import Styles from './cardinfo.module.css';

const CardInfo = props => {
  const teamName = (teams, team) => {
    let data = teams.find(item => {
      return item.id === team;
    });
    if (data) {
      return data.name;
    }
  };

  return (
    <div className={Styles.cardInfo}>
      <span className={Styles.teamName}>
        {teamName(props.teams, props.team)}
      </span>
      <span className={Styles.date}>
        <FontAwesome name="clock-o" />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
