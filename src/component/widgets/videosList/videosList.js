import React, { Component } from 'react';
import Styles from './videosList.module.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/button';
import { stringTypeAnnotation } from '@babel/types';

export default class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  componentWillMount() {
    this.request(this.props.start, this.props.end);
  }

  request = (start, end) => {
    //videos request not working
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      console.log(response);
      this.setState({
        videos: response.data,
      });
    });
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        console.log(response);
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
        template = this.state.teams.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.name}</p>
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
    // console.log(this.state);
    return (
      <div className={Styles.videosList_wrapper}>
        {this.renderTitle(this.props.title)}
        {this.renderVideos(this.props.type)}
        {this.renderButton(this.props.loadmore)}
      </div>
    );
  }
}
