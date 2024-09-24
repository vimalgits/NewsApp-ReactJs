import React, { Component } from "react";
import img1 from "../images/imagenotfound.PNG";
export default class Newscard extends Component {
  render() {
    return (
      <div className='col-md-3 col-sm-12 my-2' style={{ height: "30rem" }}>
        <div className='card m-2 ' style={{ height: "100%" }}>
          <img
            src={this.props.data.urlToImage ? this.props.data.urlToImage : img1}
            className='card-img-top'
            alt='...'
            height={160}
          />

          <div className='card-body'>
            <h5 className='card-title overflow-ellipsis'>
              {this.props.data.title}
            </h5>
            <p>{this.props.data.author}</p>
            <p>{new Date(this.props.data.publishedAt).toLocaleDateString()}</p>
            <p className='card-text overflow-ellipsis'>
              {this.props.data.description}
            </p>
            <a href={this.props.data.url} className='btn btn-outline-primary'>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
