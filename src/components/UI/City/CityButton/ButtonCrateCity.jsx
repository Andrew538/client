import React from 'react'
import classNames from 'classnames';
import classes from './ButtonCrateCity.module.css'

const ButtonCrateCity = ({openModal, props}) => {
  return (
     <button
      className={classes.button} 
      onClick={() => openModal(true)}>
     Добавить город
   </button>
  )
}

export default ButtonCrateCity