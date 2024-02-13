import { useState, useEffect } from 'react';
import './App.css';

import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';

const App = () => {
  const [filter, setFilter] = useState('');
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
    <div className="container">
      <h1 className="text">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList items={filteredContacts} onDelete={deleteUser} />
    </div>
  );
};

export default App;
