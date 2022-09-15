import { PropTypes } from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, toggleModal }) => (
    <GalleryItem>
        <Image
            src={webformatURL}
            alt=""
            onClick={() => toggleModal(largeImageURL)}
        />
    </GalleryItem>
);

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;