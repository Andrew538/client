import React from 'react'
import ModalUpdateClient from './ModalUpdateClient';
//import classNames from 'classnames';
import classes from './ButtonUpdateClient.module.css'
import { useState } from 'react';

const ButtonUpdateClient = ({clientId, manager}) => {
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
      <ModalUpdateClient
        props={id}
        managerid={manager}
        show={modalDelivery}
        onHide={() => setModalDelivery(false)}
      />
    </div>
  );
};

export default ButtonUpdateClient