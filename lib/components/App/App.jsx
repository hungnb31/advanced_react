import React, { Component } from 'react'

import DataApi from '../../DataApi'
import { data } from '../../testData'

// import components
import ArticleList from '../ArticleList/ArticleList'

// import style
import './App.scss'

const api = new DataApi(data)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: api.getArticle(),
      authors: api.getAuthor()
    }
  }

  render() {
    return (
      <div id="container">
        <ArticleList
          articles={this.state.articles}
          authors={this.state.authors}
        />
      </div>
    );
  }
}