import React, { Component } from "react";
import apiKey from "../config";
import Photo from "./Photo";

export default class PhotoContainer extends Component {
  state = {
    apiUrl: "https://api.unsplash.com/search/photos/",
    images: []
  };

  componentDidMount() {
    console.log("mounted");
    this.getImages(this.props.match.params.searchWord);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.searchWord !== this.props.match.params.searchWord
    ) {
      console.log("New data query");
      this.getImages(this.props.match.params.searchWord);
    }
  }

  getImages(searchWord) {
    fetch(`${this.state.apiUrl}?query=${searchWord}&client_id=${apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({ images: data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        {this.state.images.length > 0 ? (
          <ul>
            {this.state.images.map(image => (
              <Photo
                key={image.id}
                url={image.urls.thumb}
                alt={image.alt_description}
              />
            ))}
          </ul>
        ) : (
          <div className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </div>
        )}
      </div>
    );
  }
}
