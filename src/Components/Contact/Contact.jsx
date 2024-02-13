import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const Contact = ({ name, phoneNumber, deleteContact }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p className={css.contactInfotext}>
          <FaUser size="13px" /> {name}
        </p>
        <p className={css.contactInfotext}>
          <FaPhoneAlt size="13px" /> {phoneNumber}
        </p>
      </div>
      <button className={css.contactDeleteBtn} onClick={() => deleteContact()}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
