import React, { Component } from "react";
import Newscard from "./Newscard";
//import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      totalResults: 0,
      articles: [],
      page: 1,
    };
  }

  async getApiData() {
    let response = await fetch(
      `https://gnews.io/api/v4/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&pageSize=24&page=1&sortBy=publishedAt&language=${
        this.props.language
      }&apiKey=8158cfb82f9446fe9df927a62c94c110`
    );
    response = await response.json();
    this.setState({
      totalResults: response.totalResults,
      articles: response.articles.filter((x) => x.title !== "[Removed]"),
    });
  }

  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&pageSize=24&page=${this.state.page}&sortBy=publishedAt&language=${
        this.props.language
      }&apiKey=807d700957354e9794ec9a60f0d7d8bc`
    );
    response = await response.json();
    if (response.articles) {
      this.setState({
        articles: this.state.articles.concat(
          response.articles.filter((x) => x.title !== "[Removed")
        ),
      });
    }
  };
  componentDidMount() {
    this.getApiData();
  }
  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) this.getApiData();
  }
  render() {
    return (
      <>
        <h1 className='text-capitalize text-center m-2'>
          {this.props.search ? this.props.search : this.props.q} News
        </h1>
        <div className='container-fluid'>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className='my-3 text-center'>
                <div className='spinner-border' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            }
          >
            <div className='row'>
              {this.state.articles
                ? this.state.articles.map((item, index) => {
                    return (
                      <Newscard key={index} title={item.title} data={item} />
                    );
                  })
                : ""}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
