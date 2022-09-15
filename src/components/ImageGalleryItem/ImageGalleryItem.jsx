const ImageGalleryItem = ({ webformatURL, largeImageURL, toggleModal }) => (
    <li className="ImageGalleryItem">
        <img
            src={webformatURL}
            alt=""
            onClick={() => toggleModal(largeImageURL)}
        />
    </li>
);

export default ImageGalleryItem;