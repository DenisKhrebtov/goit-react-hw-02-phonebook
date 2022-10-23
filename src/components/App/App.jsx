import React, { Component } from 'react';
import FormBook from '../FormBook/FormBook';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <section>
          <FormBook onSubmit={this.formSubmitHandler} />
        </section>
        <h2>Contacts</h2>
      </div>
    );
  }
}
