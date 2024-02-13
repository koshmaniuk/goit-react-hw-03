import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.contactListContainer}>
      {items.map(item => (
        <Contact
          key={item.id}
          contactId={item.id}
          name={item.name}
          phoneNumber={item.number}
          deleteContact={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
