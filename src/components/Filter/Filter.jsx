import React from 'react';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input name="filter" type="filter" value={value} onChange={onChange} />
  </label>
);
