import PropTypes from 'prop-types';
// import classNames from "classnames";
import s from './ContactList.module.css';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <li className={s.item}>
      <p className={s.item_text}>
        📝 {name}: {number}
      </p>

      <button
        className={s.btn_del}
        name="del"
        type="button"
        onClick={() => onClick(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
