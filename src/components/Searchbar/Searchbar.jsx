import { ImSearch } from 'react-icons/im';
import { PropTypes } from 'prop-types';
import { Button, Form, Header, Input, Label } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => (
    <Header>
        <Form
            onSubmit={onSubmit}
        >
            <Button>
                <ImSearch />
                <Label>Search</Label>
            </Button>
            <Input
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </Form>
    </Header>
);

Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired
};

export default Searchbar;