import { Component } from "react";
import { BackDrop, FaceDrop } from './Modal.styled';
import { PropTypes } from 'prop-types';

const ESC_KEY = 27;

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    
    handleKeyDown = e => {
        if (e.keyCode === ESC_KEY) {
            this.props.toggleModal();
        };
    };

    render() {
        const { image, toggleModal } = this.props;

        return (
            <BackDrop onClick={() => toggleModal()}>
                <FaceDrop>
                    <img src={image} alt="" />
                </FaceDrop>
            </BackDrop>
        );
    }
}

Modal.propType = {
    image: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
};

export default Modal;