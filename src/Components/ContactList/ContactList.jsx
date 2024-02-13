import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.container}>
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
