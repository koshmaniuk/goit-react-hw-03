import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};
