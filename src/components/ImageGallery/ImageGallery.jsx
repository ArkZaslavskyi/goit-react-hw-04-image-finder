import ImageGalleryItem from "components/ImageGalleryItem";

const ImageGallery = ({ images, toggleModal }) => (
    <ul className="ImageGallery">
        {images.map(({ id, ...otherProps }) =>
            <ImageGalleryItem
                key={id}
                {...otherProps}
                toggleModal={toggleModal}
            />
        )} 
    </ul>
);

export default ImageGallery;