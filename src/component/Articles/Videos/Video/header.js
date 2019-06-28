import React from 'react';
import TeamInfo from '../../Elements/teamInfo';
export default function header(props) {
  const teamInfo = team => {
    return team ? <TeamInfo team={team} /> : null;
  };

  return <div>{teamInfo(props.teamData)}</div>;
}
