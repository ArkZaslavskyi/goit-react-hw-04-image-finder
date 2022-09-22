import React, { useState, useEffect } from "react";

import ImageGallery from "components/ImageGallery";
import Searchbar from "components/Searchbar";
import Loader from "components/Loader";
import Button from "components/Button";
import Modal from "components/Modal";

import getImage from 'services/api.js';

import { Main } from "./App.styled";

const IMAGES_PER_PAGE = 12;

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);  
  const [isLoading, setIsLoading] = useState(false);  
  const [modalImage, setModalImage] = useState('');

  // 
  useEffect(() => {
    if (!query) return;
    
    // activate preLoader;
    setIsLoading(true);
  
    // get images from server
    getImage({ query, page, per_page: IMAGES_PER_PAGE })
      .then(({ hits, totalHits }) => {
        
        setImages(prevImages =>
          [
            ...prevImages,
            ...hits.map(
              ({ id, webformatURL, largeImageURL }) =>
                ({ id, webformatURL, largeImageURL })
            )
          ]);
        setIsLastPage(page * IMAGES_PER_PAGE >= totalHits);
      })
      .catch(error => console.log(error))
      .finally(() =>  // de-activate preLoader;
        setIsLoading(false)
      );
  }, [page, query]);

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.query;

    const queryNormalized = value.trim().toLowerCase();;
    if (!queryNormalized || queryNormalized === query) {
      return;
    };

    setQuery(queryNormalized);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () =>
    setPage(prevPage => prevPage + 1);

  const toggleModal = image =>
    setModalImage(image ?? '');
  
  return (
    <Main>
      <Searchbar onSubmit={handleSubmit} />

      {!!images.length &&
        <ImageGallery images={images} toggleModal={toggleModal} />}
      
      {isLoading && <Loader />}
      
      {!!images.length &&
        !isLoading &&
        !isLastPage &&
        <Button onLoadMore={handleLoadMore} />}
      
      {modalImage &&
        <Modal
          image={modalImage}
          toggleModal={toggleModal} />}
    </Main>
  );
};
// class oldApp extends Component {
//   state = {
//     images: [],         //
//     query: '',          // query string
//     page: 1,            // current page number
//     isLastPage: false,
//     isLoading: false,   // show/hide Loader
//     modalImage: '',
//   };

//   componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;

//     // 
//     if (
//       prevState.query !== query ||
//       prevState.page !== page) {
      
//       // activate preLoader;
//       this.setState({ isLoading: true });

//       // get images from server
//       getImage({ query, page, per_page: IMAGES_PER_PAGE })
//         .then(({ hits, totalHits }) => {
//           this.setState(prevState => ({
//             images: [
//               ...prevState.images,
//               ...hits.map(
//                 ({ id, webformatURL, largeImageURL }) =>
//                 ({ id, webformatURL, largeImageURL })
//               )
//             ],
//             isLastPage: (page * IMAGES_PER_PAGE >= totalHits),
//           }));
//         })
//         .catch(error => console.log(error))
//         .finally(() =>  // de-activate preLoader;
//           this.setState({ isLoading: false, })
//         );
//     };
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { value } = e.currentTarget.query;

//     const query = value.trim().toLowerCase();;
//     if (!query || query === this.state.query) {
//       return;
//     };

//     this.setState({ query, images: [], page: 1,});
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }))
//   };

//   toggleModal = image =>
//     this.setState({
//       modalImage: image ?? '',
//     });

//   render() {
//     const { images, isLoading, isLastPage, modalImage } = this.state;
    
//     return (
//       <Main>
//         <Searchbar onSubmit={this.handleSubmit} />

//         {!!images.length &&
//           <ImageGallery images={images} toggleModal={this.toggleModal} />}
        
//         {isLoading && <Loader />}
        
//         {!!images.length &&
//           !isLoading &&
//           !isLastPage &&
//           <Button onLoadMore={this.handleLoadMore} />}
        
//         {modalImage &&
//           <Modal
//             image={modalImage}
//             toggleModal={this.toggleModal} />}
//       </Main>
//     );
//   }
// };

export default App;