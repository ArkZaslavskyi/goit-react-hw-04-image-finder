import { PropTypes } from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ onLoadMore }) => (
    <Btn
        type="button"
        onClick={() => onLoadMore()}
    >
        Load more
    </Btn>
);

Button.propType = {
    onLoadMore: PropTypes.func.isRequired,
};

export default Button;