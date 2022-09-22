import { useEffect } from "react";
import { BackDrop, FaceDrop } from './Modal.styled';
import { PropTypes } from 'prop-types';

const ESC_KEY = 27;

const Modal = ({ image, toggleModal }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.keyCode === ESC_KEY) {
                toggleModal();
            };
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    });
    

    return (
        <BackDrop onClick={() => toggleModal()}>
            <FaceDrop>
                <img src={image} alt="" />
            </FaceDrop>
        </BackDrop>
    );
};

Modal.propType = {
    image: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
};

export default Modal;