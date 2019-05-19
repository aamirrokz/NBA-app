import React, { Component } from 'react';
import Header from '../../component/Header/header';

import './layout.css';

export default class layout extends Component {
  state = {
    showNav: false,
  };

  toggleSidenav = action => {
    this.setState({
      showNav: action,
    });
  };

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSidenav(false)}
          onOpenNav={() => this.toggleSidenav(true)}
        />
        {this.props.children}
        Footer
      </div>
    );
  }
}