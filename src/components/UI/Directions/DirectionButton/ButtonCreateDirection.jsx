import React from 'react'
import { useState } from 'react';
import classNames from 'classnames';
import classes from './ButtonCreateDirection.module.css'

const ButtonCreateDirection = ({openModal, props}) => {
 
  return (
   <button className={classes.button}
    onClick={() => openModal(true)}>
      Добавить направление 
   </button>
  )
}

export default ButtonCreateDirection