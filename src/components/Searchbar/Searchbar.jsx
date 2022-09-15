// ImSearch
import { ImSearch } from 'react-icons/im';

const Searchbar = ({ onSubmit }) => (
    <header className="Searchbar">
        <form
            className="SearchForm"
            onSubmit={onSubmit}
        >
            <button type="submit" className="SearchForm-button">
                <ImSearch />
                <span className="SearchForm-button-label">Search</span>
            </button>
            <input
                className="SearchForm-input"
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>
);

export default Searchbar;