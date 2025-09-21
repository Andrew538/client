import React, { useState } from 'react'
import ModalUpdateClientRady from './ModalUpdateClientReady';
import classes from './ButtonUpdateClient.module.css'

const ButtonUpdateClientRady = ({clientidRady }) => {

      const [modalDelivery, setModalDelivery] = useState(false);
    
      const [id, setId] = useState(undefined);


  return (
    <>
      <button
        className={classes.button__update}
        onClick={() => {
          setId(clientidRady);
          setModalDelivery(true);
        }}
      ></button>
      <ModalUpdateClientRady
        props={id}
        show={modalDelivery}
        onHide={() => setModalDelivery(false)}
      />
    </>
  );
}

export default ButtonUpdateClientRady