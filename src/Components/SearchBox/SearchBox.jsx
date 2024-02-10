export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={event => onChange(event.target.value)} />
    </div>
  );
};
