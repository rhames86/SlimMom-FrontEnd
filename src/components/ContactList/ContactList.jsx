import classNames from 'classnames';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <div className={classNames(s.box, s.contactForm)}>
      <h3 className={s.title_comp}>Contacts</h3>

      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onClick={onClick}
            ></ContactListItem>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList