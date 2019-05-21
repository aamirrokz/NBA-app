import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_items';

const sideNav = props => {
  return (
    <div>
      <SideNav
        showNav={props.showNav} //boolean value if true sidenav opens
        onHideNav={props.onHideNav} //boolean value if true sidenav closes
        navStyle={{
          background: '#242424',
          maxWidth: '220px',
        }}
      >
        <SideNavItems />
      </SideNav>
    </div>
  );
};

export default sideNav;
