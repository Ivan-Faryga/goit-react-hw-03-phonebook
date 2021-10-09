import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <>
    <label className={s.filterInputLabel}>Find contacts by name</label>
    <br />
    <input
      className={s.filterInput}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Contact"
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
