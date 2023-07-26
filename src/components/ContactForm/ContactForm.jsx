import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    handleAddContact: '',
  };

  static propTypes = {
    handleAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onSubmitForm = e => {
    e.preventDefault();

    this.props.handleAddContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInput = e => {
    const input = e.target.name;
    const inputValue = e.target.value;
    this.setState({ [input]: inputValue });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Enter name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInput}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            placeholder="Enter phone number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInput}
          />
        </label>

        <button type="submit" className={style.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
