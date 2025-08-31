import React from 'react'
import classNames from 'classnames';
import classes from './ButtonCreateClient.module.css'

const ButtonCreateClient = ({openModal}) => {
  return (
   <button
    className={classes.button} 
    onClick={() => openModal(true)}>
     Добавить клиента
   </button>
  )
}

export default ButtonCreateClient