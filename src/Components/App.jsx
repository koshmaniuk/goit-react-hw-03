import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';

const App = () => {
  const [filterInput, setFilterInput] = useState('');
  const [contacts, setContacts] = useState(() => {
    const contactsFromLs = window.localStorage.getItem('saved-contacts');
    if (contactsFromLs !== null) {
      return JSON.parse(contactsFromLs);
    }
    return [];
  });

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  const onChangeFilterInput = text => {
    setFilterInput(text);
  };

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
    <div className="app-container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterInput} onChange={onChangeFilterInput} />
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
