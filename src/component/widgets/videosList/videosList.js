import React, { Component } from 'react';
import Styles from './videosList.module.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/button';
import VideosListTemplate from './VideosListTemplate';
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
        videos: [...this.state.videos, ...response.data],
        start,
        end,
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

  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case 'card':
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;
      default:
        template = null;
    }

    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  renderTitle = title => {
    return title ? <h3>NBA Videos</h3> : null;
  };

  renderButton = button => {
    return button ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
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
