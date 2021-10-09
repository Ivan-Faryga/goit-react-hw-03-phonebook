import React from "react";
import ContactListItem from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.contactsList}>
    {contacts.map((contact) => (
      <ContactListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
