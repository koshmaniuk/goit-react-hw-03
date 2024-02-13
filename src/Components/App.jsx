import { useState, useEffect } from 'react';
import './App.css';

import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';

const App = () => {
  const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState([]);
  const [contacts, setContacts] = useState(() => {
    const contactsFromLs = window.localStorage.getItem('saved-contacts');
    if (contactsFromLs !== null) {
      return JSON.parse(contactsFromLs);
    }
    return [];
  });

  // const [reviews, setReviews] = useState(() => {
  //   const reviewsFromLs = window.localStorage.getItem('saved-reviews');
  //   if (reviewsFromLs !== null) {
  //     return JSON.parse(reviewsFromLs);
  //   }
  //   return { good: 0, neutral: 0, bad: 0 };
  // });

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = newContact => {
    console.log(newContact);
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const deleteUser = userId => {
    setContacts(prevContacts => {
      return prevContacts.filter(prevContact => prevContact.id !== userId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList items={filteredContacts} onDelete={deleteUser} />
    </div>
  );
};

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//   email: Yup.string().email('Must be a valid email!').required('Required'),
//   message: Yup.string().min(3, 'Too short').max(256, 'Too long').required('Required'),
//   level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
// });

// const initialValues = {
//   username: '',
//   email: '',
//   message: '',
//   level: 'good',
// };

// const FeedbackForm = () => {
//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const msgFieldId = useId();
//   const levelFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
//       <Form>
//         <div>
//           <label htmlFor={nameFieldId}>Username</label>
//           <Field type="text" name="username" id={nameFieldId} />
//           <ErrorMessage name="username" as="span" />
//         </div>

//         <div>
//           <label htmlFor={emailFieldId}>Email</label>
//           <Field type="email" name="email" id={emailFieldId} />
//           <ErrorMessage name="email" as="span" />
//         </div>

//         <div>
//           <label htmlFor={msgFieldId}>Message</label>
//           <Field as="textarea" name="message" id={msgFieldId} rows="5" />
//           <ErrorMessage name="message" as="span" />
//         </div>

//         <div>
//           <label htmlFor={levelFieldId}>Service satisfaction level</label>
//           <Field as="select" name="level" id={levelFieldId}>
//             <option value="good">Good</option>
//             <option value="neutral">Neutral</option>
//             <option value="bad">Bad</option>
//           </Field>
//           <ErrorMessage name="level" as="span" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

export default App;
