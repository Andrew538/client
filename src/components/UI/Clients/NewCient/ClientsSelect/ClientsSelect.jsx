import React from 'react'
import classes from '../ClientModal.module.css'

const ClientsSelect = ({ options, defaultValue, value, onChange}) => {
 

  return (
    <select 
     className={classes.modal__select} value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{defaultValue}</option>
      {options}
    </select>
  );
}

export default ClientsSelect