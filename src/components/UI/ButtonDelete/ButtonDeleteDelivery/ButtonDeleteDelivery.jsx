import React from 'react'
import ModalNotification from '../../ModalNotification/ModalNotification';
import classes from "../ButtonDelete.module.css";
import { useState } from 'react';

const ButtonDeleteDelivery = ({ deliveryid, directionid }) => {
  const [modalNotification, setModalNotification] = useState(false);

  console.log(directionid)

  let [id, setId] = useState("");
  const [directionId, setDirectionId] = useState("")

  return (
    <>
      <button
        className={classes.delete__btn}
        onClick={() => {
          setId(deliveryid);
          setDirectionId(directionid)
          setModalNotification(true);
        }}
      ></button>

      <ModalNotification
        idDelivery={id}
        idDirection={directionId}
        show={modalNotification}
        onHide={() => setModalNotification(false)}
      />
    </>
  );
};

export default ButtonDeleteDelivery