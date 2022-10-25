import PropTypes from 'prop-types';
export const ContactElem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    </>
  );
};
