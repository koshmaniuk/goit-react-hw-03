import { useState, useId } from 'react';
import './App.css';
import * as Yup from 'yup';
// import { ContactList } from './ContactList/ContactList';
// import { SearchBox } from './SearchBox/SearchBox';
// import { ContactForm } from './ContactForm/ContactForm';
// const App = () => {
//   const [filter, setFilter] = useState('');
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   // const addUser = () => {};
//   const deleteUser = userId => {
//     setContacts(prevContacts => {
//       return prevContacts.filter(prevContact => prevContact.id !== userId);
//     });
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox value={filter} onChange={setFilter} />
//       <ContactList items={filteredContacts} onDelete={deleteUser} />
//     </div>
//   );
// };

import { Formik, Form, Field, ErrorMessage } from 'formik';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  message: Yup.string().min(3, 'Too short').max(256, 'Too long').required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" as="span" />
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" as="span" />
        </div>

        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field as="textarea" name="message" id={msgFieldId} rows="5" />
          <ErrorMessage name="message" as="span" />
        </div>

        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage name="level" as="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const App = () => {
  return <FeedbackForm />;
};

export default App;
