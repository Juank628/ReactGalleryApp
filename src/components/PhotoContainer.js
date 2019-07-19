import React, { Component } from "react";
import apiKey from "../config";
import Photo from "./Photo";

export default class PhotoContainer extends Component {
  state = {
    apiUrl: "https://api.unsplash.com/search/photos/",
    images: [],
    loading: true
  };

  //search for new images when the component did mount
  componentDidMount() {
    this.getImages(this.props.match.params.searchWord);
  }

  //search for new images only if the search word changes
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.searchWord !== this.props.match.params.searchWord
    ) {
      this.getImages(this.props.match.params.searchWord);
    }
  }

  //api fetch
  getImages(searchWord) {
    this.setState({ loading: true });
    fetch(`${this.state.apiUrl}?per_page=24&query=${searchWord}&client_id=${apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({ images: data.results, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const {searchWord} = this.props.match.params
    return (
      <div className="photo-container">
        
        {this.state.loading ? <h2 className="loading-text">Loading...</h2> : <h2>{`${searchWord} Gifs`}</h2>}
        
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
