import React from "react";
import classes from './ButtonandModalCreateShipment.module.css'


const ButtonCreateShipment = ({ openModal }) => {
  return <button 
    className={classes.button__create}
    onClick={() => openModal(true)}>
      Создать поставку
    </button>;
};

export default ButtonCreateShipment;
