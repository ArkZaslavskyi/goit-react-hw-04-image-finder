import { Component } from "react";

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
            <div className="Overlay" onClick={() => toggleModal()}>
                <div className="Modal">
                    <img src={image} alt="" />
                </div>
            </div>
        );
    }
}

    

export default Modal;