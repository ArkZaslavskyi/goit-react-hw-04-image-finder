import ImageGalleryItem from "components/ImageGalleryItem";
import { PropTypes } from 'prop-types';
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ images, toggleModal }) => (
    <Gallery>
        {images.map(({ id, ...otherProps }) =>
            <ImageGalleryItem
                key={id}
                {...otherProps}
                toggleModal={toggleModal}
            />
        )} 
    </Gallery>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;