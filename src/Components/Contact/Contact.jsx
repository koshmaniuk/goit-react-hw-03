export const Contact = ({ name, phoneNumber, contactId, deleteUser }) => {
  return (
    <div>
      <li key={contactId}>
        <p>{name}</p>
        <p>{phoneNumber}</p>
      </li>
      <button onClick={() => deleteUser(contactId)}>Delete</button>
    </div>
  );
};
