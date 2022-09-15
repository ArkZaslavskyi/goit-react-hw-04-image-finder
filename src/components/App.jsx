import React, { Component } from "react";

import ImageGallery from "components/ImageGallery";
import Searchbar from "components/Searchbar";
import Loader from "components/Loader";
import Button from "components/Button";
import Modal from "components/Modal";

import getImage from 'services/api.js';

import { Main } from "./App.styled";

const IMAGES_PER_PAGE = 12;

class App extends Component {
  state = {
    images: [],         //
    query: '',          // query string
    page: 1,            // current page number
    isLastPage: false,
    isLoading: false,   // show/hide Loader
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    // 
    if (
      prevState.query !== query ||
      prevState.page !== page) {
      
      // activate preLoader;
      this.setState({ isLoading: true });

      // get images from server
      getImage({ query, page, per_page: IMAGES_PER_PAGE })
        .then(({ hits, totalHits }) => {
          this.setState(prevState => ({
            images: [
              ...prevState.images,
              ...hits.map(
                ({ id, webformatURL, largeImageURL }) =>
                ({ id, webformatURL, largeImageURL })
              )
            ],
            isLastPage: (page * IMAGES_PER_PAGE >= totalHits),
          }));
        })
        .catch(error => console.log(error))
        .finally(() =>  // de-activate preLoader;
          this.setState({ isLoading: false, })
        );
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.query;

    const query = value.trim().toLowerCase();;
    if (!query || query === this.state.query) {
      return;
    };

    this.setState({ query, images: [], page: 1,});
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  };

  toggleModal = image =>
    this.setState({
      modalImage: image ?? '',
    });

  render() {
    const { images, isLoading, isLastPage, modalImage } = this.state;
    return (
      <Main>
        <Searchbar onSubmit={this.handleSubmit} />

        {!!images.length &&
          <ImageGallery images={images} toggleModal={this.toggleModal} />}
        
        {isLoading && <Loader />}
        
        {!!images.length &&
          !isLoading &&
          !isLastPage &&
          <Button onLoadMore={this.handleLoadMore} />}
        
        {modalImage &&
          <Modal
            image={modalImage}
            toggleModal={this.toggleModal} />}
      </Main>
    );
  }
};

export default App;