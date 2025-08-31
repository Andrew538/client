import React, { useState } from 'react'
import ModalNotification from '../../ModalNotification/ModalNotification';
import classes from "../ButtonDelete.module.css";

const ButtonDeleteClient = ({ clientid, idDelivery, idDirection, dateCreate }) => {
  const [modalNotification, setModalNotification] = useState(false);

  // console.log(idDelivery)

  let [id, setId] = useState("");

  return (
    <>
      <button
        className={classes.delete__btn}
        onClick={() => {
          setId(clientid);
          setModalNotification(true);
        }}
      ></button>

      <ModalNotification
        idClient={id}
        idDelivery={idDelivery}
        idDirection={idDirection}
        dateCreate={dateCreate}
        show={modalNotification}
        onHide={() => setModalNotification(false)}
      />
    </>
  );
};

export default ButtonDeleteClient