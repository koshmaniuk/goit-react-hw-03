import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const contactsFromLs = window.localStorage.getItem('saved-contacts');
    if (contactsFromLs !== null) {
      return JSON.parse(contactsFromLs);
    }
    return [];
  });

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = newContact => {
    console.log(newContact);
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = userId => {
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
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
