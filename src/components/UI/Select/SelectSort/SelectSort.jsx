import React from 'react'
import classes from './SelectSort.module.css'
import classNames from 'classnames';

const SelectSort = ({options, defaultValue, value, onChange}) => {
  return (
    <div className={classNames(classes.box)}>
        <select className={classNames(classes.sort)}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
            <option disabled value="">{defaultValue}</option>
            {
                options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )
            }
        </select>
      <button 
        className={classNames(classes.button)}
        onClick={() => onChange('')}
      >Сброс сортировки</button>

    </div>
   
  )
}

export default SelectSort