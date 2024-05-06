import classNames from 'classnames';
import PropTypes from 'prop-types';

import s from '../ContactList/ContactList.module.css';

const Filter = ({ stateName, onChange }) => {
  return (
    <div className={classNames(s.box, s.contactList)}>
      <label className={(s.text, s.info)}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={stateName}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  stateName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
