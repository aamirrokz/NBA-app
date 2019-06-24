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

  componentWillMount() {
    this.request(this.props.start, this.props.amount);
  }

  request = (start, end) => {
    //videos request not working
    let videoURL = `${URL}/videos?_start=${start}&_end=${end}`;
    axios.get(videoURL).then(response => {
      console.log(videoURL);
      this.setState({
        videos: response.data,
      });
    });
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data,
        });
      });
    }
  };

  renderVideos = type => {
    let template = null;
    switch (type) {
      case 'card':
        template = this.state.videos.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.title}</p>
            </div>
          );
        });
        break;
      default:
        template = null;
    }

    return template;
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
        {this.renderVideos(this.props.type)}
        {this.renderButton(this.props.loadmore)}
      </div>
    );
  }
}
