import React, { useContext, useMemo } from 'react'
import classes from './SelectSort.module.css'
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../..';

const SelectSort = observer (({options, defaultValue, value, onChange}) => {
// console.log(options)
  return (
    <div className={classNames(classes.box)}>
        <select className={classNames(classes.sort)}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
            <option disabled value="">{defaultValue}</option>
            {options}
        </select>
      <button 
        className={classNames(classes.button)}
        onClick={() => onChange('')}
      ></button>


    </div>
   
  )
})

export default SelectSort