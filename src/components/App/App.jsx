import React, { Component } from 'react';
import FormBook from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(todo => todo.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addContacts = text => {
    const contact = {
      id: contact.id,
      name: contact.name,
      number: contact.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <FormBook onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
