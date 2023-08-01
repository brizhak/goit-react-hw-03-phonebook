import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import style from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    const id = nanoid();

    const existingContact = this.state.contacts.find(
      contact => contact.name === name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact with the name "${name}" already exists.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleDelete = e => {
    const idBtn = e.currentTarget.id;

    const filteredArray = this.state.contacts.filter(item => item.id !== idBtn);

    this.setState({ contacts: filteredArray });
  };

  componentDidMount() {
    const savedData = localStorage.getItem('contacts');

    if (savedData) {
      this.setState({ contacts: JSON.parse(savedData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const lowerCaseFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );

    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
