import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const Contact = ({ name, phoneNumber, contactId, deleteUser }) => {
  return (
    <li className={css.item} key={contactId}>
      <div className={css.info}>
        <p className={css.text}>
          <FaUser size="13px" /> {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt size="13px" /> {phoneNumber}
        </p>
      </div>
      <button className={css.btn} onClick={() => deleteUser(contactId)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
