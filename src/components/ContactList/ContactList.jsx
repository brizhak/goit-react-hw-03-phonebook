import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

class ContactList extends Component {
  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, handleDelete } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name} : {contact.number}
            </p>
            <button
              className={style.btn}
              type="button"
              id={contact.id}
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
