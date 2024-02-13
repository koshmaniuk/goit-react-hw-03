import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxTitle}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
