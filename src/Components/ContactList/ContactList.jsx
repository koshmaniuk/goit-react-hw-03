import { Contact } from '../Contact/Contact';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <Contact
          key={item.id}
          contactId={item.id}
          name={item.name}
          phoneNumber={item.number}
          deleteUser={onDelete}
        />
      ))}
    </ul>
  );
};
