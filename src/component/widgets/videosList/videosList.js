import React, { Component } from 'react';
import Styles from './videosList.module.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/button';

export default class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  loadMore = () => {};

  renderTitle = title => {
    return title ? <h3>NBA Videos</h3> : null;
  };

  renderButton = button => {
    return button ? (
      <Button
        type="loadmore"
        loadmore={() => this.loadMore}
        cta="Load more videos"
      />
    ) : (
      <Button type="LinkTo" cta="More videos" linkTo="/videos" />
    );
  };

  render() {
    return (
      <div className={Styles.videosList_wrapper}>
        {this.renderTitle(this.props.title)}
        {this.renderButton(this.props.loadmore)}
      </div>
    );
  }
}
