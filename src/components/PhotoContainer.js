import React, { Component } from "react";

import apiKey from "../config"
import Photo from "./Photo"

export default class PhotoContainer extends Component {
  state = {
    apiUrl: "https://api.unsplash.com/search/photos/",
    searchWord: "dogs",
    images: []
  };

  componentDidMount() {
    fetch(`${this.state.apiUrl}?query=${this.state.searchWord}&client_id=${apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({images: data.results}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {this.state.images.map(image => 
            <Photo key={image.id} url={image.urls.thumb} alt={image.alt_description} />
          )}
          {/*Not Found*/}
          {/*<li class="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>*/}
        </ul>
      </div>
    );
  }
}
