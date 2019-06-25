import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './component/Home/home';
import Layout from './hoc/Layout/layout';

import NewsArticle from './component/Articles/News/Post/index';

export default class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
        </Switch>
      </Layout>
    );
  }
}
