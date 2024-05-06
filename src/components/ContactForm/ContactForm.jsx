import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { addContact, contacts } = this.props;
    const { name, number } = this.state;

    if (name === '' || '' || undefined) {
      return alert(`Please, fill the fields`);
    }

    const checkContact = contacts.some(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (!checkContact) {
      addContact(name, number);
      return this.resetAll();
    }

    alert(`${name} is already in contact`);
    this.resetName();
  };

  resetAll = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  resetName = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={classNames(s.box, s.contactForm)}>
        <form onSubmit={this.handleSubmit}>
          <label className={s.title_comp}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter a name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={s.title_comp}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              placeholder="+1 809-555-5555"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </form>

        <button
          type="submit"
          name="addContact"
          onClick={this.handleSubmit}
          className={s.btn}
        >
          Add contact
        </button>
      </div>
    );
  }
}

export default ContactForm;
