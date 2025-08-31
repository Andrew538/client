import React, { useState } from "react";
import ModalDelivery from "../ModalDelivery/ModalDelivery";
import classes from './ButtonDelivery.module.css'
const ButtonDelivery = ({ clientId }) => {
  const [modalDelivery, setModalDelivery] = useState(false);

  const [id, setId] = useState(undefined);

  return (
    <div> 
      <button
        className={classes.button__update}
        onClick={() => {
          setId(clientId);
          setModalDelivery(true);
        }}
      >
      
      </button>
      <ModalDelivery
        props={id}
        show={modalDelivery}
        onHide={() => setModalDelivery(false)}
      />
    </div>
  );
};

export default ButtonDelivery;
