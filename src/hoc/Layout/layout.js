import React, { Component } from 'react';
import Header from '../../component/Header/header';
import Footer from '../../component/Footer/footer';

import './layout.css';

export default class layout extends Component {
  //state wil be used to open and close sideNav
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
        {/* passing props to header */}
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSidenav(false)}
          onOpenNav={() => this.toggleSidenav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
