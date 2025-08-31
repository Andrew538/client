import React, { useState } from "react";
import classes from "./ButtonDelete.module.css";
import ModalNotification from "../ModalNotification/ModalNotification";

const ButtonDeleteWarranty = ({ setid }) => {
  const [modalNotification, setModalNotification] = useState(false);

  let [id, setId] = useState("");

  return (
    <>
      <button
        className={classes.delete__btn}
        onClick={() => {
          setId(setid);
          setModalNotification(true);
        }}
      ></button>

      <ModalNotification
        props={id}
        show={modalNotification}
        onHide={() => setModalNotification(false)}
      />
    </>
  );
};

export default ButtonDeleteWarranty;
