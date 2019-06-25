import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';

import Styles from '../../articles.module.css';

import Header from './header';
import Body from './body';

export default class NewsArticles extends Component {
  state = {
    article: [],
    team: [],
  };

  componentWillMount() {
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];

        axios.get(`${URL}/teams?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data,
          });
        });
      });
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;

    return (
      <div className={Styles.articleWrapper}>
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <Body />
      </div>
    );
  }
}
